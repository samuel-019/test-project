
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** Function verifies if user can login to xcoobee account and navigate to optiosn tab and checks for page title */

  'verify-options-page-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterOption = browser.page.userConsentcenterOptions()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterOption.navigate()
      .optionsPageTitle()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account and navigate to optiosn tab and checks for page title */

  'verify-options-tab-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterOption = browser.page.userConsentcenterOptions()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterOption.navigate()
      .optionsTab()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account and navigate to optiosn tab and checks if options tab is active */

  'verify-if-options-tab-is-active': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterOption = browser.page.userConsentcenterOptions()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterOption.navigate()
      .activeTab()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account and navigate to optiosn tab and checks for general block content */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-options-page-general-Block': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterOption = browser.page.userConsentcenterOptions()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterOption.navigate()
      .optionsTab()
      .generalBlockContent()
      .defaultExpirationDropdown()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account and navigate to optiosn tab and checks for cookie block content */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-options-page-cookie-Block': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterOption = browser.page.userConsentcenterOptions()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterOption.navigate()
      .optionsTab()
      .cookieBlockContent()
    browser.end()
  },

  /** Function verifies if user can login to xcoobee account and navigate to optiosn tab and checks if tooltip are displayed and content is appropriate */

  'verify-options-page-tooltip': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterOption = browser.page.userConsentcenterOptions()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterOption.navigate()
      .optionsTab()
      .optionTooltip()
      .checkboxVerification()
    browser.end()
  }
}
