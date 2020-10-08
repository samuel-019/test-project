
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** Function to perform login to xcoobee account, navigate to notification tab and check if notification tab is present */

  'verify-notifications-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var notifications = browser.page.userSettingsNotifications()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    notifications.navigate()
      .notificationsTab()
    browser.end()
  },

  /** Function to perform login to xcoobee account, navigate to notification tab and check if notification tab is present */

  'verify-notifications-tab-settings': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var notifications = browser.page.userSettingsNotifications()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    notifications.navigate()
      .notificationsTabSettings()

    browser.end()
  },

  /** Function to perform login to xcoobee account, navigate to notification tab and check if notification tab content */

  'verify-notifications-tab-content': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var notifications = browser.page.userSettingsNotifications()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    notifications.navigate()
    notifications.notificationMessage()
    notifications.blockContentVerification()

    browser.end()
  },

  /** Function to perform login to xcoobee account, navigate to notification tab and check checkbox and text tooltip content */

  'verify-notifications-tab-checkbox-tooltip': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var notifications = browser.page.userSettingsNotifications()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    notifications.navigate()
    notifications.notificationsTabSettings()
    notifications.checkboxVerification()
    notifications.textTooltipVerification()

    browser.end()
  }
}
