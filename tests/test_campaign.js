module.exports = {
  '@tags': ['smoke'], // eslint-disable-line
  verify_creation_of_advance_campaign: function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const consentCampaign = browser.page.consentCampaign()
    const campaignGeneral = browser.page.campaignWizardGeneral()
    const campaignData = browser.page.campaignWizardData()
   // const campaignOffers = browser.page.campaignWizardOffers()            //Offer step has been reomoved
    const campaignScope = browser.page.campaignWizardScope()
    const campaignUsers = browser.page.campaignWizardUsers()
    const campaignOptions = browser.page.campaignWizardOptions()
    const campaignLabels = browser.page.campaignWizardLabels()
    const campaignSummary = browser.page.campaignWizardSummary()
    const securitySetting = browser.page.userSettingsSecurity()
    const campaignEmail = browser.page.campaignWizardEmail()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    consentCampaign.navigate()
      .clickCampaignsTab()
    if ( browser.globals.testdata.campaign.newUser == false) {
      consentCampaign.clickCreateCampaignButton()
      consentCampaign.clickAdvanceCampaignLink()
    } else {
      consentCampaign.clickGoToSecuritySettingButton()
      securitySetting.generatePGPKey()
      consentCampaign.navigate()
      consentCampaign.clickCampaignsTab()
      consentCampaign.clickOnCreateAdvanceCampaign()
    }
      
    // set global variable for future reference
    browser.globals.testdata.campaign.name = campaignGeneral.enterCampaignName()
    campaignGeneral.enterDescription()
      .clickConsentDataCheckbox()
      .clickNext()
    campaignData.addDataFields(3)
      .clickNext()
   // campaignOffers.clickNext()
    campaignScope.addScopes(2)
      .clickNextButton()
    campaignUsers.clickAddUserButton()
      .enterXcoobeeId(user.campaignUser.xcoobee_id)
      .clickSaveButtonOnPopUp()
      .clickNextButton()
    campaignOptions.clickNext()
    campaignEmail.clickNext()
    campaignLabels.clickNext()
    campaignSummary.clickActivateCampaign()
    consentCampaign.verifyCampaignName(browser.globals.testdata.campaign.name)
    browser.end()
  },

  // This test will fail if run individually.
  // Need to run test first 'verify creation of advance campaign'
  // This fails as the campaign name wont be set in global variable
  '@tags': ['smoke'], // eslint-disable-line
  'verify campaign received by user': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()

    login.navigate()
      .enterInputsAndSubmit(user.campaignUser.email, user.campaignUser.password)
    activity.verifyFirstActivityCampaignTitle(browser.globals.testdata.campaign.name)
    browser.end()
  },

  '@tags': ['smoke'], // eslint-disable-line
  'verify accepting campaign received by user': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()

    login.navigate()
      .enterInputsAndSubmit(user.campaignUser.email, user.campaignUser.password)
    activity.clickFirstCampaignCard()
      .clickAcceptButton()
      .verifySuccessText()
    browser.end()
  },

  '@tags': ['smoke'], // eslint-disable-line
  // rerun the create campaign test
  'Re-Run Create Campaign': function (browser) {
    this.verify_creation_of_advance_campaign(browser)
  },

  '@tags': ['smoke'], // eslint-disable-line
  'verify accepting campaign received with save for reuse toggle': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()

    login.navigate()
      .enterInputsAndSubmit(user.campaignUser.email, user.campaignUser.password)
    activity.clickFirstCampaignCard()
      .enableSaveForReuseToggle()
      .clickAcceptButton()
      .clickFinishOnConsentModal()
      //.verifyNotificationSuccessMessageDisplayed()
     // .verifyNotificationCount()
  }
}
