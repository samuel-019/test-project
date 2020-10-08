module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': false, // This will prevent the test module from running.
  '@tags': ['smoke'], // eslint-disable-line
  /** Function to verify if user can login to xcoobee account , naviagte to inbox tour , click on inbox tour and view the tour. */
  'verify if inbox tour section is appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userDashboardHeader = browser.page.userDashboardHeader()
    const userInbox = browser.page.userInbox()
    const userInboxTour = browser.page.userInboxTour()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboardHeader.beeRowLoading()
    userInbox.navigate()
    userDashboardHeader.clickOnTakeTour()
    userInboxTour.checkInboxHeaderElements()
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

    browser.end()
  }

}
