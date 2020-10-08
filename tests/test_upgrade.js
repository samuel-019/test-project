
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  // "@disabled": true, // This will prevent the test module from running.

  /** In here we are login to free user account,navigating to upgrade wizard and check for upgrade wizard header element */

  'verify upgrade wizard header element': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const header = browser.page.userDashboardHeader()
    const userUpgrade = browser.page.userUpgrade()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    header.upgradeButton()
    userUpgrade.navigate()
      .checkUpgradeWizardheaderElement()

    browser.end()
  },

  /** In here we are login to free user account,navigating to upgrade wizard and check for upgrade wizard content */

  'verify upgrade wizard general content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userUpgrade = browser.page.userUpgrade()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userUpgrade.navigate()
      .checkUpgradeWizardContent()
    userUpgrade.checkSubscriptionBlockElement()
    // userUpgrade.checkSubscriptionDropdown();

    browser.end()
  }

  //Scripts disbaled as they are failing

  /** In here we are login to free user account,navigating to upgrade wizard and check for developer subscription content */

 /** 'verify upgrade wizard developer subscription content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userUpgrade = browser.page.userUpgrade()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userUpgrade.navigate()
    userUpgrade.checkDeveloperSubscription()

    browser.end()
  },**/

  /** In here we are login to free user account,navigating to upgrade wizard and check for personal subscription content */

/**  'verify upgrade wizard Personal subscription content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userUpgrade = browser.page.userUpgrade()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userUpgrade.navigate()
    userUpgrade.checkPersonalSubscription()

    browser.end()
  },**/

  /** In here we are login to free user account,navigating to upgrade wizard and check for Professional subscription content */

 /** 'verify upgrade wizard Professional subscription content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userUpgrade = browser.page.userUpgrade()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userUpgrade.navigate()
    userUpgrade.checkProfessionalSubscription()

    browser.end()
  },**/

  /** In here we are login to free user account,navigating to upgrade wizard and check for Business subscription content */

  /**'verify upgrade wizard Business subscription content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userUpgrade = browser.page.userUpgrade()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userUpgrade.navigate()
    userUpgrade.checkBussinessSubscription()
    browser.end()
  } **/

}
