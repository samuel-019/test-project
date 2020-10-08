
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  // "@disabled": true, // This will prevent the test module from running.

  /** Function to perform login to xcoobee account and navigate to mydata page and verify page title */

  'verify-data-page-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterData = browser.page.userConsentcenterUserdata()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    userConsentCenterData.navigate()
      .userDataPageTitle()
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate to mydata page and verify header element */

  'verify-data-page-header-element': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterData = browser.page.userConsentcenterUserdata()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    userConsentCenterData.navigate()
      .userDataHeaderElement()
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate to mydata page and verify table data is present or not */

  'verify-data-page-Table': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterData = browser.page.userConsentcenterUserdata()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    userConsentCenterData.navigate()
      .userDataTable()
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate to mydata page and verify table button is present or not */

  'verify-data-page-Table-buttons': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterData = browser.page.userConsentcenterUserdata()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    userConsentCenterData.navigate()
      .userDataTable()
      .userDataTableButtons()
    browser.end()
  }

}
