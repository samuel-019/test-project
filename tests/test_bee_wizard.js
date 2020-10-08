
module.exports = {

  'verify copy deck on bee wizard page': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .verifyCopyDeck(browser.globals.testdata.beenames)

    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'verify search on bee wizard page': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .verifySearch()

    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'verify biz wizard flow for message bee': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .sendMesssageSelected()
      .selectSender()
      .enterMessage()
      .clickNextbutton()
      //  .beeSuccess()

    browser.end()
  },

  'verify biz wizard flow for message bee via email': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .sendMesssageSelected()
      .selectSenderViaEmail()
      .enterMessage()
      .clickNextbutton()
      //  .beeSuccess()

    browser.end()
  },

  'verify biz wizard flow for send file bee via email': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .verifySelected()
      .clickNextbutton()
      .verifyUploadCopyDeck()
      .uploadFile()
      .editfilename()
      .clickNextbutton()
      .selectSenderViaEmail()
      .displayMesssageBox()
      .clickNextbutton()

    browser.end()
  },

  '@tags': ['smoke'], // eslint-disable-line
  'verify biz wizard flow for send file bee': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .selectSendFileBee()
      .verifyUploadCopyDeck()
      .uploadFile()
      .editfilename()
      .clickNextbutton()
      .selectSender()
      .displayMesssageBox()
      .clickNextbutton()
      //  .beeSuccess()

    browser.end()
  },

  'verify biz wizard flow for send file bee via email': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const beewizard = browser.page.commandsBeeWizard()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    beewizard.navigate()
      .selectSendFileBee()
      .verifyUploadCopyDeck()
      .uploadFile()
      .editfilename()
      .clickNextbutton()
      .selectSenderViaEmail()
      .displayMesssageBox()
      .clickNextbutton()
      //  .beeSuccess()

    browser.end()
  }
}
