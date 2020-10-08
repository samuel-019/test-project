
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': false, // This will prevent the test module from running.

  /** Function verifies if user can login to xcoobee account adn navigate to active balance tab and verify if balance tab is present */

  'verify-active-balances-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var activeBalances = browser.page.userBalancesActive()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    activeBalances.navigate()
      .activeBalancesTab()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account adn navigate to active balance tab and verify balance tabl column is present in active tab */

  'verify-active-balances-table': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var activeBalances = browser.page.userBalancesActive()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    activeBalances.navigate()
      .balancesColumnNames()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account adn navigate to active balance tab and verify if balance is present in active tab */

  'verify-if-active-balances-are-present': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var activeBalances = browser.page.userBalancesActive()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    activeBalances.navigate()
      .activeBalances()
    browser.end()
  }
}
