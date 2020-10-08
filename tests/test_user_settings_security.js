
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** This function perform login to xcoobee account and verify if security tab is displayed */
  'verify-security-tab': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var security = browser.page.userSettingsSecurity()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    security.navigate()
      .verifySecurityTab()
    browser.end()
  },

  /** This function performs logim to xcoobee account, navigate user to security tab and check if all security block title are present */

  'verify-security-tab-settings': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var security = browser.page.userSettingsSecurity()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    security.navigate()
      .verifySecurityTabSettings()
    browser.end()
  }

  /*  "verify-password-settings-edit-button": function(browser) {
        var login = browser.page.commandsLogin();
        var dashboard = browser.page.userDashboardHeader();
        var security = browser.page.userSettingsSecurity();

        login.navigate()
            .fillInForm(test_data.login.valid["email"], test_data.login.valid["password"])
            .submit();
        dashboard.checkHeaderSubElements();
        security.navigate()
            .clickEditPassword()
            .editPasswordModalTitle()
            .closeEditPasswordModal()
            .stayLoggedInToggle();
    } */
}
