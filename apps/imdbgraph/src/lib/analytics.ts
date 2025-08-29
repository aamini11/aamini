import posthog from 'posthog-js'

export function initPosthog() {
	posthog.init('phc_LWC2pawiFEeBiZTp3rxnzsebkRVJ1ZkOwsTiZARWXgC', {
		api_host: '/api/analytics',
		ui_host: 'https://us.posthog.com',
		defaults: '2025-05-24',
		person_profiles: 'identified_only',
	})
}
