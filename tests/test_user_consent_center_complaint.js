module.exports = {
  '@tags': ['stable'], // eslint-disable-line
  // "@disabled": true, // This will prevent the test module from running.

  /** Function to perform login to xcoobee account and navigate user to complaint tab and verify page title */

  'verify-complaint-page-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterComplaint = browser.page.userConsentcenterComplaint()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterComplaint.navigate()
      .userComplaintPageTitle()
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to complaint tab and verify complaint tab title */

  'verify-complaint-tab-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterComplaint = browser.page.userConsentcenterComplaint()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterComplaint.navigate()
      .complaintTab()
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to complaint tab and verify if message is displayed when complaint page is empty */

  'verify-empty-complaint-tab-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterComplaint = browser.page.userConsentcenterComplaint()

    login.navigate()
      .fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterComplaint.navigate()
      .complaintTab()
      .emptyComplaintTab()
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to complaint tab and verify content of complaint pop up modal */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-complaint-tab-pop-up': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var userConsentCenterComplaint = browser.page.userConsentcenterComplaint()

    login.navigate()
    login.fillInFormAndSubmit(user.valid.email, user.valid.password)
    userConsentCenterComplaint.navigate()
      .complaintTab()
      .checkComplaintPopUpContent()
    browser.end()
  }

}
