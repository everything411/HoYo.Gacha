import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import GachaActions, { Props as GachaActionsProps } from '@/components/gacha/gacha-actions'
import GachaTab from '@/components/gacha/gacha-tab'
import GachaTabOverview from '@/components/gacha/gacha-tab-overview'
import { GachaLogItem } from '@/interfaces/models'
import { useStatefulSettings } from '@/hooks/useStatefulSettings'
import Commands from '@/utilities/commands'

const Tabs = ['总览', '统计', '数据']

export default function GachaPage () {
  const { selectedAccount } = useStatefulSettings()
  const [tab, setTab] = useState(0)
  const [alert, setAlert] = useState<{ severity: 'success' | 'error', message: string }>()

  const handleError = useCallback<Required<GachaActionsProps>['onError']>((error) => {
    setAlert({
      severity: 'error',
      message: '错误：' + (error instanceof Error || typeof error === 'object'
        ? error.message
        : error)
    })
  }, [setAlert])

  const gachaLogs = useQuery({
    queryKey: ['gacha-logs', selectedAccount?.uid],
    queryFn: () => {
      if (!selectedAccount) {
        return Promise.resolve([])
      } else {
        console.debug('Fetch gacha logs:', selectedAccount.uid)
        return Commands.findGachaLogsByUID({ uid: selectedAccount.uid })
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    onError: handleError
  })

  const {
    gachaTotal,
    gachaTypeGroups,
    gachaFirstTime,
    gachaLastTime
  } = useMemo(() => {
    const data = gachaLogs.data
    const gachaTypeGroups: Record<GachaLogItem['gachaType'], GachaLogItem[]> = { 100: [], 200: [], 301: [], 302: [], 400: [] }
    if (!data) {
      return {
        gachaTotal: 0,
        gachaTypeGroups,
        gachaFirstTime: undefined,
        gachaLastTime: undefined
      }
    } else {
      data.reduce((acc, value) => {
        if (!acc[value.gachaType]) acc[value.gachaType] = []
        acc[value.gachaType].push(value)
        return acc
      }, gachaTypeGroups)

      return {
        gachaTotal: data.length,
        gachaTypeGroups,
        gachaFirstTime: data[0]?.time,
        gachaLastTime: data[data.length - 1]?.time
      }
    }
  }, [gachaLogs])

  const handleSuccess = useCallback<Required<GachaActionsProps>['onSuccess']>((action, message) => {
    setAlert(message
      ? { severity: 'success', message }
      : undefined
    )
    if (action === 'gacha-fetch' || action === 'gacha-import') {
      console.debug('Refetch gacha logs...')
      gachaLogs.refetch()
    }
  }, [setAlert, gachaLogs])

  useEffect(() => {
    if (alert && alert.severity === 'success') {
      const timeout = window.setTimeout(() => { setAlert(undefined) }, 5000)
      return () => { window.clearTimeout(timeout) }
    }
  }, [alert])

  return (
    <Box className="page page-gacha">
      {alert && (
        <Alert
          severity={alert.severity}
          onClose={() => setAlert(undefined)}
          sx={{ marginBottom: 2 }}
        >
          {alert.message}
        </Alert>
      )}
      {selectedAccount
        ? (<>
          <GachaActions
            account={selectedAccount}
            data={gachaTypeGroups}
            tabs={Tabs}
            tabIndex={tab}
            onTabChange={(_, newValue) => setTab(newValue)}
            onSuccess={handleSuccess}
            onError={handleError}
            disabled={!selectedAccount}
          />
          <Box marginTop={2}>
            {gachaLogs.isFetching && <Typography variant="caption">数据加载中...</Typography>}
            {gachaLogs.data && Tabs.map((label, index) => (
              <GachaTab key={index} value={tab} index={index}>
                {
                  index === 0
                    ? <GachaTabOverview
                        total={gachaTotal}
                        data={gachaTypeGroups}
                        rawData={gachaLogs.data}
                        firstTime={gachaFirstTime}
                        lastTime={gachaLastTime}
                      />
                    : label
                }
              </GachaTab>
            ))}
          </Box>
          </>)
        : (<Typography variant="h6" color="error">
            No account selected!
          </Typography>)
      }
    </Box>
  )
}
