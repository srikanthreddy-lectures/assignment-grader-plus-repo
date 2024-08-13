test('has title', async (page, projectRoot) => {
  await page.goto('file://' + projectRoot + '/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Website/);
});
