import { expect, test } from '@playwright/test'
import searchData from '../__mocks__/hars/data.json' with { type: 'json' }

test('search api should work', async ({ request }) => {
	const resp = await request.get('/api/suggestions?q=Avatar')
	expect(await resp.json()).toEqual(searchData)
})
