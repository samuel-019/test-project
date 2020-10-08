var testData = require('./test_data.js')
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': true, // This will prevent the test module from running.

  /** Function to check if user can login to xcoobee account and navigate to my consent page and verify title */

  'verify-consent-page-title': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenter = browser.page.userConsentcenterConsent()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenter.navigate()
      .consentPageTitle()
  },

  /** Function to check if user can login to xcoobee account and navigate to my consent page and verify consent tab title */

  'verify-consent-tab-title': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenter = browser.page.userConsentcenterConsent()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenter.navigate()
      .consentTab()
  },

  /** Function to check if user can login to xcoobee account and navigate to my consent page and verify if consent tab is present */

  'verify-if-consent-tab-is-active': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenter = browser.page.userConsentcenterConsent()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenter.navigate()
      .activeTab()
  }
}
