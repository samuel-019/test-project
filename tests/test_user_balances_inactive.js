
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': true, // This will prevent the test module from running.

  /** Function to verify if user can login to xcoobee account and navigate to balance tab */

  'verify-inactive-balances-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var inactiveBalances = browser.page.userBalancesInactive()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    inactiveBalances.navigate()
      .pastBalancesTab()
    browser.end()
  },

  /** FUnction verify if user can login to xcoobee account and navigate to balance tab and check if balance is present or not in past tab */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-inactive-balances-table': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var inactiveBalances = browser.page.userBalancesInactive()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    inactiveBalances.navigate()
      .inactiveStates()
    browser.end()
  }
}
