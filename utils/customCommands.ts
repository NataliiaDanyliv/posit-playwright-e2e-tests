import { Page, expect } from '@playwright/test';
import { login, RStudioProject, sideBar, yourWorkspacePage } from '../helper/locators';



export async function performLogin(page: Page, email: string, password: string): Promise<void> {
    await page.goto(process.env.LOGIN_URL);

    // Land on the login form and verify the page URL
    await expect(page.locator(login.loginFormTitle)).toHaveText('Log In');
    await expect(page).toHaveURL(/login/);
    
    await page.fill(login.emailField, email);
    page.getByText('Continue').click();
    await page.fill(login.passworField, password);
    await page.click(login.loginButton);

    // Handle case for destination selection
    await expect(page.locator(login.destinationPageFrom)).toBeVisible({ timeout: 10000 });
    const isVisible = await page.isVisible(login.destinationPageFrom);
    if (isVisible) {
      await page.click(login.cloudProjects, { timeout: 10000 });
    };

    await expect(page.locator(yourWorkspacePage.studioHeader)).toBeVisible({ timeout: 10000 });
    await expect(page.locator(yourWorkspacePage.studioHeader)).toContainText('Your Workspace');
    await expect(page.locator(yourWorkspacePage.currentUserIcon)).toContainText('Nataliia Danyliv');
    await expect(page).toHaveURL(/\/content\/yours\?sort=name_asc/);

};

export async function deleteSpace(page: Page): Promise<void> {
  try {
    const spaceName = page.locator(sideBar.spaceName)
    await spaceName.click();

    // expand the dropdown menu
    await page.click(RStudioProject.moreActionsMenu)
    const deleteButton = page.locator('button#headerDeleteSpaceButton');
    await expect(deleteButton).toBeVisible({timeout: 10000});
    await expect(deleteButton).toHaveText('Delete Space');
    await deleteButton.click();

    // Verify that the modal dialog is visible
    const modalDialogInputField = page.locator(RStudioProject.deleteSpaceItem);
    await expect(modalDialogInputField).toBeVisible({ timeout: 15000 });
    // Type into the input field
    await modalDialogInputField.fill('Delete Demo Space');
    await page.click(RStudioProject.deleteSpaceButton);

    // Verify that the space name is no longer visible
    await expect(spaceName).not.toBeVisible({ timeout: 15000 });
  } catch (error) {
      console.error('Error while deleting the space:', error);
      throw error; // Re-throw the error so it’s reported as test failure
  }
};
