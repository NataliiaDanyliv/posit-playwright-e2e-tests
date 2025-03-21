import { Locator } from '@playwright/test';

interface LocatorObject {
    [key: string]: string; // Always a string (CSS selector)
}


export const login: LocatorObject = {
    loginFormTitle: '.loginActive',
    emailField: '[name="email"]',
    passworField: '[name="password"]',
    loginButton: 'button[type="submit"]',
    destinationPageFrom: '.fullPageFormContainer .linksWrapper',
    cloudProjects: '[href*="cloud/projects/"]'
};

export const yourWorkspacePage: LocatorObject  = {
    studioHeader:'#appBody #rStudioHeader',
    currentUserIcon: '#currentUser .user',
};

export const sideBar: LocatorObject = {
    newSpaceButton: '.navMenu .newSpace',
    spaceName: '.navMenu .spaceNameWithOwner'
};

export const newSpace: LocatorObject = {
    dialogForm: 'dialog form #name',
    createSpaceButton:'dialog form [type="submit"]',
    headerOwnerName: '#rStudioHeader .showOwner',
    newProjecButton: '.popupButtonAndMenuContainer .menuDropDown',
    newRStudionProject:'[title="New RStudio Project"]'
};

export const RStudioProject: LocatorObject = {
    progressBar: '.progressBarBackground',
    iframeElement: '#contentIFrame',
    rstudioContainer: '#rstudio_container',
    rstudioContent: '#contentIFrame',
    moreActionsMenu:'#rStudioHeader .moreActions',
    deleteSpaceItem: 'input#deleteSpaceTest',
    deleteSpaceButton:'button#deleteSpaceSubmit'
};



