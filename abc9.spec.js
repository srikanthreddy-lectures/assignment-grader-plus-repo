test('has title', async ({ page, expect }) => {
    const title = await page.title();
    await expect(title).toContain('My Website');
});

test('has heading', async ({ page, expect }) => {
    const headingText = await page.locator('h1').first().textContent();
    await expect(headingText).toContain('Welcome');
});
