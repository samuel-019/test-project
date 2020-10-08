
module.exports = {

  /** Function to verify login to xcoobee paid account and navigate to email guard and check tis content */

  'verify copy deck on bee wizard page': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const email = browser.page.commandsEmailGuard()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    email.navigate()
      .verifyCopyDeck()

    browser.end()
  },

  // Disabled due to failures in script execution

  /*
  "verify quick add button is adding emails": function(browser){
    const user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const email = browser.page.commandsEmailGuard();

    login.navigate()
       .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password);
    email.navigate()
       .quickAddEmail();

      browser.end();
  },
*/

  /** Function to verify if user can login to xcoobee account, navigate to email guard and add email guard using the add button */
  '@tags': ['smoke'], // eslint-disable-line
  'verify addding email by using add button': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const email = browser.page.commandsEmailGuard()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    email.navigate()
      .addEmail()

    browser.end()
  },

  /** Function to verify if user can login to xcoobee account, navigate to email guard and search email guard using the search filter */
  '@tags': ['smoke'], // eslint-disable-line
  'verify search email is working': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const email = browser.page.commandsEmailGuard()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    email.navigate()
      .searchEmail()

    browser.end()
  },

  /** Function to verify if user can login to xcoobee account, navigate to email guard and delete email guard using the delete button */
  '@tags': ['smoke'], // eslint-disable-line
  'verify if delete button is deleting email guard': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const email = browser.page.commandsEmailGuard()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    email.navigate()
      .deleteEmailGuard()

    browser.end()
  },

  /** Function to verify if user can login to xcoobee account, navigate to email guard and edit email guard using the edit button */
  '@tags': ['smoke'], // eslint-disable-line
  'verify if edit button is edit email guard': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const email = browser.page.commandsEmailGuard()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    email.navigate()
      .updateEmailGuard()

    browser.end()
  }
}
