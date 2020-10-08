
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** verify if user can login to free xcoobee acount and get started button is displayed on dashboard */
  '@tags': ['smoke'], // eslint-disable-line
  'verify if Get Started block appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.verifyGetStartedContent()

    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'verify if Get Started drop zone works for hire bee': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.hireBeesdragDrop()
    dashboard.hireBeesUploadFile()

    browser.end()
  },

  'verify if send file block appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.verifySendFilesContent()

    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'verify if Get Started drop zone works': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.sendFileDropzone()
      .sendFileUploadFile()

    browser.end()
  },

  'verify if email guard block appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.verifyEmailGuardContent()

    browser.end()
  },

  'verify if My Data block appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.verifyMyDataContent()

    browser.end()
  },

  'verify if Consent Center block appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.verifyConsentCenterContent()

    browser.end()
  },

  'verify if Contact Shares block appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const dashboard = browser.page.commandsDashboard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.verifyContactSharesContent()

    browser.end()
  }

}
