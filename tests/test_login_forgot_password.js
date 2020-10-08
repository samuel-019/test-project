
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** verify if forgot password content is correct */
  'Verify if content is correct on forgot passowrd': function (browser) {
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickForgotPasswordLink()
      .verifyContent()

    browser.end()
  },

  /** verify if error message is displayed when user provide invalid eamil id in input field */

  'Verify if invalid email error is displayed': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickForgotPasswordLink()
      .inputEmail(user.invalid.invalidEmail)
      .submitResetPasswordDisbled()
      .resetPasswordEmailError('Entry is not a valid email.')

    browser.end()
  },

  /** verify if reset password input field empty message is displayed */

  'Verify if empty input error is displayed': function (browser) {
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickForgotPasswordLink()
      .inputEmail('')
      .submitResetPasswordDisbled()
      .resetPasswordEmailError('is required.')

    browser.end()
  },

  /** verify if message is displayed when user enters valid email id and clicks on submit button */
  '@tags': ['smoke'], // eslint-disable-line
  'Verify forgot passowrd with valid email': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickForgotPasswordLink()
      .inputEmail(user.valid.email)
      .submitResetPasswordForm()
      .notificationError('If you use your email and password to login, a password reset email will be sent to you. Please note that if you are using Google or Facebook authentication you will have to go to the respective service to reset your password.')
    browser.end()
  }
}
