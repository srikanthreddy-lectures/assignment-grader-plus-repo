test('has title', async ({ page, url, expect }) => {
    await page.goto(url);
    const title = await page.title();
    await expect(title).toContain('ACCCCCC');
});

test('has heading', async ({ page, url, expect }) => {
    await page.goto(url);
    const headingText = await page.locator('h1').first().textContent();
    await expect(headingText).toContain('Welcome');
});
