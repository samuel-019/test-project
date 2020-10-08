
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': true, // This will prevent the test module from running.

  'verify-user-intro-section': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userIntro = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userIntro.verifyUserIntro()
  },

  'verify-get-started-section': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userIntro = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userIntro.verifyGetStarted()
  },

  'verify-send-files-section': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userIntro = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userIntro.beeIcon()
      .verifySendFiles()
  },

  'verify-consent-center-section': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userIntro = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userIntro.consentCenterIcon()
      .verifyConsentCenter()
  }
}
