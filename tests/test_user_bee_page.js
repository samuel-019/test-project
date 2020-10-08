
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': false, // This will prevent the test module from running.

  /** Function to check if user can login to xcoobee account and navigate to bee page and verify title */

  'verify-if-page-title-is-present': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var beePage = browser.page.userBeePage()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    beePage.navigate()
      .beePageTitle()

    browser.end()
  },

  /** Function to check if user can login to xcoobee account and navigate to bee page and verify bee information */

  'verify-bee-page-details': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var beePage = browser.page.userBeePage()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    beePage.navigate()
      .beeImage()
      .beeName()
      .hireBeeButton()
      .beeRatingStars()
      .beeDescription()
      .beeInfoTable()
      .advancedInformationDropdown()
    browser.end()
  }
}
