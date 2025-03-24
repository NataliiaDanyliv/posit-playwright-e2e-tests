import { test, expect, Locator } from '@playwright/test';
import { performLogin, deleteSpace } from '../utils/customCommands';
import { sideBar, newSpace, RStudioProject } from '../helper/locators'

test.describe('Workspace project creation tests', () => {

  test.beforeEach(async ({ page }) => {
    await performLogin(page, process.env.EMAIL, process.env.PASSWORD);
  });

  test.afterEach(async ({ page }) => {
    try {
      const spaceNameLocator: Locator = page.locator(sideBar.spaceName);
      const spaceExists = await spaceNameLocator.isVisible();

      // Only attempt to delete if the space was created
      if (spaceExists) {
        await deleteSpace(page);
      } else {
        console.log('Space was not created, skipping deletion.');
      }
    } catch (error) {
        console.error('Error in afterEach cleanup:', error);
    }
  });

  test('Create a New RStudio Project in the Space', async ({ page }) => {
    // Create a new space
    await page.click(sideBar.newSpaceButton);
    const nameInput = page.locator(newSpace.dialogForm);
    await expect(nameInput).toBeVisible();
    await nameInput.fill('Demo Space');
    await page.click(newSpace.createSpaceButton);
    await expect(page.locator(newSpace.headerOwnerName)).toContainText('Demo Space');

    // creat a New RStudio Project
    await page.click(newSpace.newProjecButton);
    await page.click(newSpace.newRStudionProject);

    // Verify that the progress bar is visible
    const progressBar = page.locator(RStudioProject.progressBar);
    await expect(progressBar).toBeVisible();
    await progressBar.waitFor({ state: 'hidden', timeout: 50000 });

    //  Verifying that the RStudio IDE loads
    test.setTimeout(60000);
    await page.waitForResponse(response => response.url().includes('/rpc/list_files'));
    const iframeElement = page.locator(RStudioProject.rstudioContent);
    await expect(iframeElement).toBeVisible({ timeout: 60000 });
    // Get the content inside the iframe
    const iframe = iframeElement.contentFrame();
    expect(iframe).not.toBeNull();
    const rstudioContainer = iframe.locator(RStudioProject.rstudioContainer);
    await expect(rstudioContainer).toBeVisible({ timeout: 15000 });
  });
});

