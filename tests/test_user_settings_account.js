
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** Function to check if user can login to xcoobee account and check if account tab is present and verify conent */

  'verify account panel elements visible': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var account = browser.page.userSettingsAccount()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.checkHeaderSubElements()
    account.navigate()
    account.verifyAccountTab()
    account.accountPanel('profile')
    account.accountPanel('Address')
    account.accountPanel('Email')
    account.accountPanel('International')
    account.accountPanel('Phone')
    account.accountPanel('Account Options')
    browser.end()
  }

/*
    "verify-edit-buttons": function(browser) {
      var login = browser.page.commandsLogin();
      var dashboard = browser.page.userDashboardHeader();
      var account = browser.page.userSettingsAccount();
      login.navigate()
        .fillInForm(test_data.login.valid["email"], test_data.login.valid["password"])
        .submit();
        dashboard.checkHeaderSubElements();
        account.navigate();
        account.editProfileModalTitle();
        account.closeEditSettingsModal()
          .editAddressModalTitle()
          .closeEditSettingsModal()
          .editEmailModalTitle()
          .closeEditSettingsModal()
          .editPhoneModalTitle()
          .closeEditSettingsModal();

          browser.end();
    }
*/
}
