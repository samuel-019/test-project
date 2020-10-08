
module.exports = {
  '@disabled': false, // This will prevent the test module from running.
  '@tags': ['stable'], // eslint-disable-line

  /** Function verifies if user can lgin to xcoobee account and navigate to search balance tab */

  'verify-search-balances-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var searchBalances = browser.page.userBalancesSearch()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    searchBalances.navigate()
      .searchBalancesTab()
    browser.end()
  },

  /** Function verifies if user can lgin to xcoobee account and navigate to search balance tab
     * enter data in search input field and click on search button and verify result
    */
  '@tags': ['smoke'], // eslint-disable-line
  'test balances search by click': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var searchBalances = browser.page.userBalancesSearch()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    searchBalances.navigate()
      .searchUserInput('3.jpg')
      .clickSearchButton()
    searchBalances.verifySearchResults()
    browser.end()
  },

  /** Function verifies if user can lgin to xcoobee account and navigate to search balance tab
     * enter data in search input field and press enter key and verify result
    */
  '@tags': ['smoke'], // eslint-disable-line
  'test balances search by enter key': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var searchBalances = browser.page.userBalancesSearch()

    login.navigate()

      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    searchBalances.navigate()
      .searchUserInput('3.jpg')
      .hitEnterKey()

    searchBalances.verifySearchResults()
    browser.end()
  }

}
