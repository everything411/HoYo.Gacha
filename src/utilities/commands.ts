import { invoke } from '@tauri-apps/api'
import { GameDirectory, GachaUrl, GachaLogItem, EnkaNetworkPlayerInfo } from '@/interfaces/models'

interface InvocableCommand<R = unknown> {
  (args?: Record<string, unknown> | undefined): R extends Promise<unknown> ? R : Promise<R>
}

function declareInvocableCommand<R = unknown> (cmd: string): InvocableCommand<R> {
  return invoke.bind(undefined, cmd) as InvocableCommand<R>
}

/** Commands */

const Commands = Object.freeze({
  findAvailableGameDirectories: declareInvocableCommand<GameDirectory[]>('cmd_find_available_game_directories'),
  findRecentGachaUrl: declareInvocableCommand<GachaUrl>('cmd_find_recent_gacha_url'),
  crateGachaLogFetcherChannel: declareInvocableCommand<void>('cmd_crate_gacha_log_fetcher_channel'),
  findGachaLogsByUID: declareInvocableCommand<GachaLogItem[]>('cmd_find_gacha_logs_by_uid'),
  exportGachaLogsByUID: declareInvocableCommand<string>('cmd_export_gacha_logs_by_uid'),
  importGachaLogsByUID: declareInvocableCommand<number>('cmd_import_gacha_logs_by_uid'),
  thirdPartyEnkaNetworkFetchPlayerInfo: declareInvocableCommand<EnkaNetworkPlayerInfo>('cmd_third_party_enka_network_fetch_player_info'),
  open: declareInvocableCommand<void>('cmd_open'),
  openAppDataDir: declareInvocableCommand<void>('cmd_open_app_data_dir')
})

export default Commands
