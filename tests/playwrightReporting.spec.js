const { test, expect } = require('@playwright/test');

test('Playwright Reporting', async ({ page }) => {
    await page.goto('https://www.google.com');

    //Assertion
    await expect(page).toHaveTitle('Google');
    //Assertion
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Hare Kri');
    //print in console
    console.log(await page.getByRole('combobox', { name: 'Search' }).inputValue())
    //Ss of the search engine
    await page.getByRole('combobox', { name: 'Search' }).screenshot({ path: 'test-results/partialcreenshot.png' })
    //screenshot of the full page
    await page.screenshot({ path: 'test-results/Googlescreenshot.png' });

    //expect(await page.screenshot()).toMatchSnapshot('test-results/Googlescreenshot.png', { maxDiffPixels: 17262 })
    //await page.pause();
    //await page.getByText('hare krishna', { exact: true }).click();
    //screenshot
    //await page.screenshot({ 'path: google.png'})

})