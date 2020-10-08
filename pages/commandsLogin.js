var loginCommands = {
  /** Function to validate content of login page */
  validateForm: function () {
    this.waitForElementVisible('@submit', 4000)
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.visible('@facebookButton')
      .verify.visible('@googleButton')
      .verify.visible('@forgotPasswordLink')
    return this.verify.containsText('@submit', 'Login')
  },
  /** Function to enter data in email and password field  */
  fillInForm: function (username, password) {
    this.waitForElementVisible('@submit', 10000, 'Login Button is visible')
      .clearValue('@username')
      .setValue('@username', username)
      .clearValue('@password')
      .setValue('@password', password)
    return this
  },
  /** Function to enter data and click on submit button and check url */
  enterInputsAndSubmit: function (username, password) {
    this.fillInForm(username, password)
    this.click('@submit')
    this.waitForElementNotPresent('@submit', 10000)
    return this.verify.urlContains('/#access_token')
  },

  /** Function to enter data and click on submit button and check url */
  fillInFormAndSubmit: function (username, password) {
    this.waitForElementVisible('@submit', 10000, 'Login Button is visible')
      .clearValue('@username')
      .setValue('@username', username)
      .clearValue('@password')
      .setValue('@password', password)
      .click('@submit')
      .waitForElementNotPresent('@submit', 10000)
    return this.verify.urlContains('/#access_token')
  },
  /** Function to verify if submit button is clicked */
  submit: function () {
    this.waitForElementVisible('@submit', 4000, 'Login Button is visible')
    return this.click('@submit')
  },
  /** Function to verify if error message is displayed */
  globalError: function (errorMessage) {
    this.waitForElementVisible('@globalError', 60000)
    return this.verify.containsText('@globalError', errorMessage)
  },
  /** Function to check if error message are displayed when invalid email is provided */
  inputEmailError: function (emailErrorMessage) {
    this.waitForElementVisible('@emailError', 4000)
      .verify.visible('@emailError')
      .verify.containsText('@emailError', emailErrorMessage)
    return this.verify.valueContains('@username', '')
  },
  /** Function to check if error message are displayed when invalid password is provided */
  inputPasswordError: function (passwordErrorMessage) {
    this.waitForElementVisible('@passwordError', 4000)
      .verify.containsText('@passwordError', passwordErrorMessage)
    return this.verify.valueContains('@password', '')
  },

  // Here contains reset password commands
  clickForgotPasswordLink: function () {
    this.waitForElementVisible('@forgotPasswordLink', 4000)
    return this.click('@forgotPasswordLink')
  },
  /** Function to check reset password content adn forgot password description */
  verifyContent: function () {
    return this.waitForElementVisible('@resetPasswordModal', 4000)
      .verify.containsText('@forgotPasswordHeading', 'Reset Password')
      .waitForElementVisible('@forgotPasswordDescription', 2000)
      .verify.containsText('@forgotPasswordDescription', 'We will send an email to the below mentioned email address to reset your password')
  },
  /** Function to verify reset password link can be clicked */
  submitResetPasswordForm: function () {
    return this.waitForElementPresent('div.modal-footer button.btn.btn-primary:enabled', 3000, 'Button is enabled')
      .verify.containsText('@resetPasswordSubmit', 'Confirm')
      .click('@resetPasswordSubmit')
  },
  /** Funtion to check if reset password link is disbaled */
  submitResetPasswordDisbled: function () {
    return this.waitForElementPresent('@resetPasswordSubmit', 3000, 'Button is disabled')
      .click('@resetPasswordSubmit')
  },
  /** Function to set value [email] in reset password input field */
  inputEmail: function (email) {
    return this.waitForElementVisible('@resetPasswordInput', 4000)
      .clearValue('@resetPasswordInput')
      .setValue('@resetPasswordInput', email)
  },
  /** Function to verify if error message is displayed */
  resetPasswordEmailError: function (errorMessage) {
    return this.waitForElementVisible('@forgotPasswordError', 20000)
      .verify.containsText('@forgotPasswordError', errorMessage)
  },
  /** Function to verify if global error message are displayed */
  notificationError: function (notifyMessage) {
    return this.waitForElementVisible('@globalError', 60000)
      .verify.containsText('@globalError', notifyMessage)
  },
  /** Function to perform click on sign up button */
  clickSignupLink: function () {
    return this.waitForElementVisible('@signupLink', 4000)
      .click('@signupLink')
  }
}

module.exports = {
  commands: [loginCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {
    /** css selector for username */
    username: {
      selector: 'input[name=email]'
    },
    /** css selector for password */
    password: {
      selector: 'input[type=password]'
    },
    /** css selector for submit */
    submit: {
      selector: 'button[type=submit]'
    },
    /** css selector for email error message */
    emailError: {
      selector: 'div.field-container:nth-child(1) .error'
    },
    /** css selector for password validation message */
    passwordError: {
      selector: 'div.field-container:nth-child(2) .error'
    },
    /** css selector for globla error message */
    globalError: {
      selector: 'div.Toastify p.notification-message span'                                    //'div.notification div.notification-message span'
    },
    /** css selector for facebook login */
    facebookButton: {
      selector: 'input.login__authLogos:nth-child(1)'
    },
    /** css selector for google  */
    googleButton: {
      selector: 'input.login__authLogos:nth-child(2)'
    },
    /** css selector for sign up link */
    signupLink: {
      selector: '.login__show-register-link'
    },
    // Forgot password UI elements
    forgotPasswordLink: {
      selector: 'button.login__forgot-password'
    },
    /** css selector for reset password input field */
    resetPasswordInput: {
      selector: 'div.modal-body input.form-control[type=text]'
    },
    // css selector for forgot password header
    forgotPasswordHeading: {
      selector: 'h4.modal-title'
    },
    /** css selector for forgot password description */
    forgotPasswordDescription: {
      selector: 'div.modal-body > span'
    },
    /** css selector for reset password modal */
    resetPasswordModal: {
      selector: 'div.modal-body'
    },
    /** css selector for forgot password error message */
    forgotPasswordError: {
      selector: 'div p.error'
    },
    /** css selector for reset password submit button */
    resetPasswordSubmit: {
      selector: 'div.modal-footer button.btn.btn-primary'
    },
    /** css selector for cancel button */
    resetPasswordCancel: {
      selector: 'div.div.modal-footer button.btn.btn-default'
    }
  }

}
