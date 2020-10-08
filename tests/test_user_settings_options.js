/*module.exports = {
  '@tags': ['stable'],

  'verify-options-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var option = browser.page.userSettingsOption()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    option.navigate()
      .verifyOptionTab()
    browser.end()
  },

  'verify file drop content': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var option = browser.page.userSettingsOption()
    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    option.navigate()
      .fileDropBlockContent()
    browser.end()
  },

  'verify-option-tab-toogle': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var option = browser.page.userSettingsOption()
    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    option.navigate()
      .fileDropToggle()
    browser.end()
  }

  
}
*/