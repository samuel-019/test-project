
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': true, // This will prevent the test module from running.

  'verify if wizard header section is appears': function (browser) {
    const user = browser.globals.login

    const login = browser.page.commandsLogin()
    const beeWizard = browser.page.userBeeWizardHeader()
    const userDashboardHeader = browser.page.userDashboardHeader()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboardHeader.beeRowLoading()
    beeWizard.navigate()
      .checkBeeWizardHeaderElements()
      .ButtonsNumber()
    browser.end()
  },

  'verify if wizard header tour section is appears': function (browser) {
    const user = browser.globals.login

    const login = browser.page.commandsLogin()
    const beeWizard = browser.page.userBeeWizardHeader()
    const userDashboardHeader = browser.page.userDashboardHeader()
    const beeWizardTour = browser.page.userBeeWizardTour()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboardHeader.beeRowLoading()
    beeWizard.navigate()
      .checkBeeWizardHeaderElements()
      .clickOnTakeTour()
    beeWizardTour.checkBeeWizardHeaderElements()
      .checkTipStep1()
      .nextTipStep()
      .checkTipStep2()
      .nextTipStep()
      .checkTipStep3()
      .nextTipStep()
      .checkTipStep4()
      .nextTipStep()
      .checkTipStep5()
      .nextTipStep()
      .checkTipStep6()
      .nextTipStep()
      .checkTipStep7()
      .nextTipStep()
      .checkTipStep8()
      .nextTipStep()
    browser.end()
  }
}
