var testData = require('./test_data.js')
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  '@disabled': true, // This will prevent the test module from running.

  /** Function to perform login to xcoobee account, navigate to contact page and verify page title */

  'verify-contacts-page-title': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterContacts = browser.page.userConsentcenterContacts()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenterContacts.navigate()
      .contactsPageTitle()
  },

  /** Function to perform login to xcoobee account, navigate to contact page and verify page title */

  'verify-contacts-tab-title': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterContacts = browser.page.userConsentcenterContacts()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenterContacts.navigate()
      .contactsTab()
  },

  /** Function to perform login to xcoobee account, navigate to contact page and verify if contact page is active */

  'verify-if-contacts-tab-is-active': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterContacts = browser.page.userConsentcenterContacts()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenterContacts.navigate()
      .activeTab()
  },

  /** Function to perform login to xcoobee account, navigate to contact page and verify page content */

  'verify-contacts-page': function (browser) {
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userConsentCenterContacts = browser.page.userConsentcenterContacts()

    login.navigate()
      .fillInForm(testData.login.valid.email, testData.login.valid.password)
      .submit()
    dashboard.checkHeaderSubElements()
    userConsentCenterContacts.navigate()
      .contactsPage()
  }
}
