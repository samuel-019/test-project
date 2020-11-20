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
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeDonationCollection()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmit()
    projectPayment.clickOnNextCtaPayment();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
    selectProject.checkProjectStatus(); 
    browser.end()
  },

  'Test if user can suspend a project': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const suspendExistingProject = browser.page.projectActionTab();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
    suspendExistingProject.navigate()
    .clickOnSuspendIcon()
    .clickOnSuspendCtaOnConfirmationModal()
    .verifyAddNewProjectCta();
    browser.end()
  },

  'Test if user can delete a project': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const deleteExistingProject = browser.page.projectActionTab();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
    deleteExistingProject.navigate()
    .closeProject();
    deleteExistingProject.deleteProject();
    browser.end()
  },

  'Test if user can copy a project': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const copyExistingProject = browser.page.projectActionTab();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      copyExistingProject.navigate()
      .clickOnCopyProject()
      .verifyAddNewProjectCta();
      browser.end()
  },

  'Test if user can activate a project type Attendance List': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const projectGeneral = browser.page.projectWizardGeneral();
    const selectProject = browser.page.projectWizardType();
    const projectData = browser.page.projectWizardData();
    const projectConnectivity = browser.page.projectWizardConnectivity();
    const projectDevelopment = browser.page.projectWizardDevelopment();
    const projectSummary = browser.page.projectWizardSummary();
    const projectOptions = browser.page.projectWizardOptions();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeAttendanceList()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmit2();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
    selectProject.checkProjectStatus();  
    browser.end()
  },

  'Test if user can activate a project type Simple Agreement Project': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const projectGeneral = browser.page.projectWizardGeneral();
    const selectProject = browser.page.projectWizardType();
    const projectData = browser.page.projectWizardData();
    const projectConnectivity = browser.page.projectWizardConnectivity();
    const projectDevelopment = browser.page.projectWizardDevelopment();
    const projectSummary = browser.page.projectWizardSummary();
    const projectOptions = browser.page.projectWizardOptions();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeSimpleAgreementProject()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmit2();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();  
    selectProject.checkProjectStatus();
    browser.end()
  },

   'Test if user can activate a project type Donation With Spreedsheet': function (browser) {
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
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeDonationCollection()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmit()
    projectPayment.clickOnNextCtaPayment();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
    selectProject.checkProjectStatus();
    browser.end()
  },

  'Test if user can activate a project type Events': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const selectProject = browser.page.projectWizardType();
    const projectGeneral = browser.page.projectWizardGeneral();
    const projectPayment = browser.page.projectWizardPayment();
    const projectData = browser.page.projectWizardData();
    const projectConnectivity = browser.page.projectWizardConnectivity();
    const projectDevelopment = browser.page.projectWizardDevelopment();
    const projectSummary = browser.page.projectWizardSummary();
    const projectOptions = browser.page.projectWizardOptions();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeEvents()
      .clickOnNextCta();
      projectGeneral.fillFormAndSubmitForEvents()
      projectData.clickOnNextCtaData();
      projectConnectivity.clickOnNextCtaConnectivity();
      projectOptions.clickOnNextCtaOption();
      projectDevelopment.clickOnNextCtaDevelopment();
      projectSummary.clickOnActivateButton();
      selectProject.checkProjectStatus();
      browser.end()
  },
  'Test if user can activate a project type Events with payment': function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const selectProject = browser.page.projectWizardType();
    const projectGeneral = browser.page.projectWizardGeneral();
    const projectPayment = browser.page.projectWizardPayment();
    const projectData = browser.page.projectWizardData();
    const projectConnectivity = browser.page.projectWizardConnectivity();
    const projectDevelopment = browser.page.projectWizardDevelopment();
    const projectSummary = browser.page.projectWizardSummary();
    const projectOptions = browser.page.projectWizardOptions();
    login.navigate()
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeEventsWithPayment()
      .clickOnNextCta();
      projectGeneral.fillFormAndSubmitForEventsWithPayment()
      projectPayment.clickOnNextCtaPayment();
      projectData.clickOnNextCtaData();
      projectConnectivity.clickOnNextCtaConnectivity();
      projectOptions.clickOnNextCtaOption();
      projectDevelopment.clickOnNextCtaDevelopment();
      projectSummary.clickOnActivateButton();
      selectProject.checkProjectStatus();
      browser.end()
  },
  'Test if user can activate a project type Payment Request': function (browser) {
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
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypePaymentRequest()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmit()
    projectPayment.clickOnNextCtaPayment();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
    selectProject.checkProjectStatus(); 
    browser.end()
  },

  'Test if user can activate a project type Mailchimp Project': function (browser) {
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
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeMailchimpProject()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmit2()
    projectData.clickOnNextCtaData();
    projectConnectivity.enterUniqueId()
      .clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
    selectProject.checkProjectStatus(); 
    browser.end()
  },

  'Test if user can activate a project type Membership Project': function (browser) {
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
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeMembershipProject()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmitForMembershipProject()
    projectPayment.clickOnNextCtaPayment();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnActivateButton();
    selectProject.checkProjectStatus(); 
    browser.end()
  },
   'Test if user can activate a project type Voucher Project': function (browser) {
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
      .enterInputsAndSubmit(user.projectUser.email, user.projectUser.password);
      //Navigate to project page
    selectProject.navigate()
      .clickOnAddNewProject()
      .selectProjectTypeVoucherProject()
      .clickOnNextCta();
    projectGeneral.fillFormAndSubmitForVoucherProject()
    projectPayment.clickOnNextCtaPayment();
    projectData.clickOnNextCtaData();
    projectConnectivity.clickOnNextCtaConnectivity();
    projectOptions.clickOnNextCtaOption();
    projectDevelopment.clickOnNextCtaDevelopment();
    projectSummary.clickOnSaveAndExitButton();
    selectProject.checkProjectStatus(); 
    browser.end()
  },



};
