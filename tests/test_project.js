module.exports = {
  'Test if user can activate a project type Donation collection': function (browser) {
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const projectGeneral = browser.page.projectWizardGeneral();
    const selectProject = browser.page.projectWizardType();
    const projectPayment = browser.page.projectWizardPayment();
    const projectData = browser.page.projectWizardData();
    const projectConnectivity = browser.page.projectWizardConnectivity();
    const projectDevelopment = browser.page.projectWizardDevelopment();
    const projectSummary = browser.page.projectWizardSummary();
    const projectOptions = browser.page.projectWizardOptions();
    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectType()
      .clickOnNextCta();
    projectGeneral.enterProjectName()
    
    projectGeneral.enterDescription()
    .clickNext();
    projectPayment.clickOnNextCtaPayment();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
  }
};