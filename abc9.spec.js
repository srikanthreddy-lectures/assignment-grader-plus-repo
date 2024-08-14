test('has title', async ({ page, loadHtml, expect }) => {
    await loadHtml('index.html');
    const title = await page.title();
    await expect(title).toContain('My Website');
});

test('has heading', async ({ page, loadHtml, expect }) => {
    await loadHtml('index.html');
    const headingText = await page.locator('h1').first().textContent();
    await expect(headingText).toContain('Welcome');
});
