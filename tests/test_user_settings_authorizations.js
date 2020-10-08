
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** Function to perform login to xcoobee account and verify if authorization tab is displayed */

  'verify-authorizations-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var authorizations = browser.page.userSettingsAuthorizations()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.balanceElementHeader()
    authorizations.navigate()
      .authorizationsTab()

    browser.end()
  },

  /** Function to perform login to xcoobee account and verify if authorization connection is displayed */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-connections': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var authorizations = browser.page.userSettingsAuthorizations()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.balanceElementHeader()
    authorizations.navigate()
      .authorizationConnections()
    browser.end()
  }
}
