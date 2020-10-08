
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  'Verify if header menu options are loading': function (browser) {
    const user = browser.globals.login
    var header = browser.page.userDashboardHeader()
    var login = browser.page.commandsLogin()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    header.checkHeaderElements()
    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'Verify if search is working': function (browser) {
    const user = browser.globals.login
    const header = browser.page.userDashboardHeader()
    const login = browser.page.commandsLogin()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    header.enterSearchKeyword('We are testing this app')
      .searchAutoSuggestion('No results found')

    browser.end()
  },

  'verify if for xcoobee id': function (browser) {
    const user = browser.globals.login
    const header = browser.page.userDashboardHeader()
    const login = browser.page.commandsLogin()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    header.UserXcoobeeId(user.valid.xbid)// need to change

    browser.end()
  },

  'verify tooltips are displayed': function (browser) {
    const user = browser.globals.login
    const header = browser.page.userDashboardHeader()
    const login = browser.page.commandsLogin()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    header.balanceElementHeader()
    header.upgradeButton()
    header.Tooltip()

    browser.end()
  },

  'verify header for upgraded member': function (browser) {
    const user = browser.globals.login
    const header = browser.page.userDashboardHeader()
    const login = browser.page.commandsLogin()

    login.navigate()
    login.enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)// need to change
    header.balanceElementHeader()
    header.upgradeButtonNotVisible()
    header.checkupgradedHeaderElements()

    browser.end()
  }

/*
    "verify advance Settings for upgraded member ": function(browser){
        const header = browser.page.userDashboardHeader();
        const login = browser.page.commandsLogin();

        login.navigate();
        login.enterInputsAndSubmit("milton@sjinnovation.com","55Newyork");
        header.webHeader();
        header.advanceSettingTooltip();

        browser.end();
      }
*/
}
