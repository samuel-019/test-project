module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** verify if user can login to xcoobee account and navigate to invite module and check invite tab content */

  'Verify invite module for free user': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const invite = browser.page.invite()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    invite.checkInvitePopUpForFreeUser()
    invite.checkInviteTab()
    browser.end()
  },

  /** verify if user can login to xcoobee account and navigate to invite module and check invite tab content */

  'Verify invite module for paid user': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const invite = browser.page.invite()

    login.navigate()
    login.enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    invite.checkInvitePopUpForPaidUser()
    browser.end()
  }
}
