import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('/')
})

test('Screenshot Entire Page', async ({ page }) => {
	await expect(page).toHaveScreenshot({
		fullPage: true,
		omitBackground: true,
	})
})
