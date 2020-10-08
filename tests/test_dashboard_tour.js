
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': false, // This will prevent the test module from running.

  /** verify if user can login to xcoobee account and view dashboard tour and its content */
  '@tags': ['smoke'], // eslint-disable-line
  'verify if dasboard tour tool tips are working': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboardHeader = browser.page.userDashboardHeader()
    const dashboardTour = browser.page.userDashboardTour()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboardHeader.balanceElementHeader()
    dashboardHeader.clickOnTakeTour()
    dashboardTour.checkToolTipElements()
      .checkTipWelcome()
      .nextTipStep()
      .checkTipActivity()
      .nextTipStep()
      .checkTipConsentCenter()
      .nextTipStep()
      .checkTipMenuBar()
      .nextTipStep()
      .checkTipConnectAccounts()
      .nextTipStep()
      .checkTipTour()
      .nextTipStep()
      .checkTipGetStarted()
      .nextTipStep()
    browser.end()
  }

}
