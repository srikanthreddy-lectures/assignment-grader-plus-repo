test('has title', async (page, projectRoot, loadHtml) => {
  await loadHtml('index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Website/);
});
