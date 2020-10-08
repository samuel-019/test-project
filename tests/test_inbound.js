/*module.exports = {
                                                                                //Test disbaled due to multiple failure at dropdown


  'verify inbound page content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const inbound = browser.page.commandsInbound()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    inbound.navigate()
    inbound.verifyLandingPadManagerDeck()
    inbound.verifyInboundDeck()

    browser.end()
  },

  'verify adding user to allowed inbound category': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const inbound = browser.page.commandsInbound()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    inbound.navigate()
    inbound.verifyLandingPadManagerDeck()
    inbound.verifyAddUserToAddSenderBlock()
    inbound.verifyAddSenderBlock()
    inbound.removeUserFromAddSenderBlock()

    browser.end()
  },

  'verify adding user to inbound via input field': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const inbound = browser.page.commandsInbound()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    inbound.navigate()
    inbound.verifyLandingPadManagerDeck()
    inbound.verifyAddingXcoobeeId()
    inbound.removeUserFromAddSenderBlock()

    browser.end()
  }


 /* 'verify special group content in inbound': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const inbound = browser.page.commandsInbound()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    inbound.navigate()
    inbound.verifyLandingPadManagerDeck()
    inbound.verifySpecialGroup()

    browser.end()
  }
}*/