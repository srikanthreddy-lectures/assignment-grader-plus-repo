test('has title', async ({ page, loadHtml, expect }) => {
  await loadHtml('index.html');

  try {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/My Website/);
  } catch (error) {
    throw new Error(`Title test failed: ${error.message}`);
  }
});

test('has heading', async ({ page, loadHtml, expect }) => {
  await loadHtml('index.html');

  try {
    // Expect the page to have a heading with "Welcome"
    const heading = await page.locator('h1').first();
    await expect(heading).toHaveText(/Welcome/);
  } catch (error) {
    throw new Error(`Heading test failed: ${error.message}`);
  }
});
