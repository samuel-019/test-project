
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** This function performs login to xcoobee account, navigate user to privacy tab and check if privacy tab is present  */

  'verify privacy tab is visible': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    privacy.navigate()
      .privacyTabStates()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and check if privacy tab title is present  */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-privacy-settings': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    privacy.navigate()
      .privacySettings()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and check free subscription privacy tab content */

  'verify-privacy-block-free-user': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    privacy.navigate()
      .privacyBlockFreeUser()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and check paid subscription privacy tab content */

  'verify-privacy-block-paid-user': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    privacy.navigate()
      .privacyBlockPaidUser()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and checks block sender block when no record are present */

  'verify-blocked-sender-list-block-without-record': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    privacy.navigate()
      .blockedSenderListWithoutRecords()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and checks block sender block when record are present */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-blocked-sender-list-block-with-record': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    privacy.navigate()
      .blockedSenderListwithRecords()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and checks export center block content for free user */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-export-center-block-for-free-user': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    privacy.navigate()
      .exportCenterFreeUser()
      .exportCenterMessage()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and checks export center block content for paid user */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-export-center-block-for-paid-user': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    privacy.navigate()
      .exportCenterPaidUser()
      .exportCenterMessage()
    browser.end()
  },

  /** This function performs login to xcoobee account, navigate user to privacy tab and checks discoverability block content for paid user */
  'verify-discoverability-block': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    privacy.navigate()
      .discoverabilityBlock()
    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  /** This function performs login to xcoobee account, navigate user to privacy tab and checks if blocked sender list pop up is displayed */
  'verify-blocked-sender-list-pop-up': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var privacy = browser.page.userSettingsPrivacy()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    privacy.navigate()
      .blockedSenderListPopUp()
    browser.end()
  }

  /*   "verify-privacy-tab-tooltip": function(browser) {                  //Issue encountered for commented tooltip
        let user = browser.globals.login;
        var login = browser.page.commandsLogin();
        var privacy = browser.page.userSettingsPrivacy();

        login.navigate()
            .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password);
        privacy.navigate()
            .privacyTooltip();
        browser.end();
    } */

}
