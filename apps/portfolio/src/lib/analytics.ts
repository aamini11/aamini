import posthog from 'posthog-js'

export const posthogProxy = '/relay-WXgC'

export function initPosthog() {
	posthog.init('phc_LWC2pawiFEeBiZTp3rxnzsebkRVJ1ZkOwsTiZARWXgC', {
		api_host: posthogProxy,
		ui_host: 'https://us.posthog.com',
	})
}
