test('has title', async ({ page, loadHtml }) => {
  await loadHtml('index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Website/);
});

// Add another test to ensure multiple tests are being run
test('has heading', async ({ page, loadHtml }) => {
  await loadHtml('index.html');

  // Expect the page to have a heading with "Welcome"
  const heading = await page.locator('h1').first();
  await expect(heading).toHaveText(/Welcome/);
});
