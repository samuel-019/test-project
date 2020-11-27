var signuptest = {
  /** Function to generate random name */
  randomNameGenerator: function () {
    var text = ''
    var possible = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 5; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }
    return text
  },

  /** Function to verify if sign up content is visible */
  verifySignupPage: function () {
    this.waitForElementVisible('@closeIcon', 10000)
      .verify.visible('@xcoobeeLogo')
      .verify.visible('@signupPageBanner')
      .verify.visible('@facebookSignupbutton')
      .verify.visible('@googleSignupbutton')
      return this.verify.visible('@registerButton')
  },

  /** Function to clcik on register button */
  clickRegister: function () {
    this.waitForElementVisible('@registerButton', 5000)
    return this.click('@registerButton')
  },

  /** Function to click on add invite link */
  clickAddInviteCodeLink: function () {
    this.waitForElementVisible('@addInvitecodeLink', 5000)
    return this.click('@addInvitecodeLink')
  },

  /** Function to click on addinvite code button */
  clickAddInviteCodebutton: function () {
    this.waitForElementVisible('@addInvitecodeButton', 5000)
    return this.click('@addInvitecodeButton')
  },

  /** Function to click on resend button */
  clickResendButton: function () {
    return this.waitForElementVisible('@resendButton', 5000)
      .click('@resendButton')
  },

  /** Function to click on use different account button */
  clickUseDifferentAccountButton: function () {
    return this.waitForElementVisible('@useDifferentaccountButton', 5000)
      .click('@useDifferentaccountButton')
  },

  /** Function to click on close icon  */
  clickCloseIcon: function () {
    return this.waitForElementVisible('@closeIcon', 5000)
      .click('@closeIcon')
  },

  /** Function to click on close confirmation button */
  clickOKonCloseConfirmation: function () {
    return this.waitForElementVisible('@OkButton', 5000)
      .click('@OkButton')
  },

  /** Function to clear and set first name in first name field */
  setFirstname: function (firstname) {
    this.waitForElementVisible('@firstName', 5000)
    this.clearValue('@firstName')
    return this.setValue('@firstName', firstname)
  },

  /** Function to set last name in lst name field */
  setLastname: function (lastname) {
    return this.waitForElementVisible('@lastName', 5000)
      .setValue('@lastName', lastname)
  },

  /** Function to set email in email field */
  setEmail: function (email) {
    return this.waitForElementVisible('@email', 5000)
      .setValue('@email', email)
  },

  /** Function to set password in password field */
  setPassword: function (password) {
    return this.waitForElementVisible('@password', 5000)
      .setValue('@password', password)
  },

  /** Function to set invite code in invite field */
  setInviteCode: function (code) {
    return this.waitForElementVisible('@inviteCodeinput', 5000)
      .setValue('@inviteCodeinput', code)
  },

  /** Function to verify if error message is displayed */
  globalValidationmessage: function (errorMessage) {
    this.waitForElementVisible('@errorMessageForAlreadyExistingUser', 5000)
      return this.verify.containsText('@errorMessageForAlreadyExistingUser', errorMessage)
  },

  /** Function to verify if register button is enabled */
  verifyRegisterIfEnabled: function () {
    this.waitForElementVisible('@registerButton', 5000)
    return  this.expect.element('@registerButton').to.not.be.enabled;
  },

  /** Function to verify if error message is displayed when invalid data is entered in first name input field */
  verifyFirstNameErrorContainer: function (errorMessage) {
    return this.waitForElementVisible('@FirstNameErrorContainer', 5000)
      .verify.containsText('@FirstNameErrorContainer', errorMessage)
  },

  /** Function to verify if error message is displayed when invalid data is entered in las name input field */
  verifyLastNameErrorContainer: function (errorMessage) {
    return this.waitForElementVisible('@LastNameErrorContainer', 5000)
      .verify.containsText('@LastNameErrorContainer', errorMessage)
  },

  /** Function to verify if error message is displayed when invalid data is entered in password input field */
  verifyPasswordErrorContainer: function (errorMessage) {
    return this.waitForElementVisible('@PasswordErrorContainer', 5000)
      .verify.containsText('@PasswordErrorContainer', errorMessage)
  },

  /** Function to verify if error message is displayed when invalid data is entered in email input field */
  verifyEmailErrorContainer: function (errorMessage) {
    return this.waitForElementVisible('@EmailErrorContainer', 5000)
      .verify.containsText('@EmailErrorContainer', errorMessage)
  },

  /** Function to verify if error message is displayed when invalid data is entered in invite code input field */
  verifyInviteCodeErrorContainer: function (errorMessage) {
    return this.waitForElementVisible('@inviteCodeerrorContainer', 5000)
      .verify.containsText('@inviteCodeerrorContainer', errorMessage)
  },

  /** Function to verify if invite code is added or not */
  verifyInviteCodeAdded: function (linktext, code) {
  	this.api.pause(5000)
    return this.waitForElementPresent('@addInvitecodeLink', 5000)
      .verify.containsText('@addInvitecodeLink', linktext)
      .verify.containsText('@inviteCodecontainer', code)
  },

  /** Function to verify email verification page */
  verifyEmailVerificationpage: function () {
    return this.waitForElementVisible('@verificationStageBanner', 50000)
      .verify.visible('@xcoobeeLogo')
      .verify.visible('@closeIcon')
      .verify.visible('@resendButton')
      .verify.visible('@useDifferentaccountButton')
  },

  /** Function to verify resend email verification page */
  verifyResendVerificationMail: function (message) {
    return this.waitForElementVisible('@resendMailtext', 10000)
      .verify.containsText('@resendMailtext', message)
  },

  /** Function to verify sign up using facebook */
  signupViafacebook: function () {
    this.api.pause(5000)
    return this.waitForElementVisible('@facebookSignupbutton', 5000)
      .click('@facebookSignupbutton')
  },

  /** Function to verify if user can added email in email input field on faceobook login */
  enterFacebookusername: function (email) {
    return this.waitForElementVisible('@facebookEmailinput', 5000)
      .setValue('@facebookEmailinput', email)
  },

  /** Function to verify if user can added password in password input field on faceobook login */
  enterFacebookpassword: function (password) {
    return this.waitForElementVisible('@facebookPasswordinput', 5000)
      .setValue('@facebookPasswordinput', password)
  },

  /** Function to verify if user can click on login button on facebook loginpage */
  loginFacebook: function () {
    return this.waitForElementVisible('@facebookLoginbutton', 5000)
      .click('@facebookLoginbutton')
  },

  /** Function to verify sign up using google */
  signupViagoogle: function () {
    this.api.pause(5000)
    return this.waitForElementVisible('@googleSignupbutton', 5000)
      .click('@googleSignupbutton')
  },

  /** Function to verify if user can added email in email input field on google login */
  enterGoogleusername: function (email) {
    return this.waitForElementVisible('@googleEmailinput', 5000)
      .setValue('@googleEmailinput', email)
  },

  /** Function to verify if user can click on next button  */
  clickGoogleemailNext: function () {
    return this.waitForElementVisible('@googleEmailnextButton', 5000)
      .click('@googleEmailnextButton')
  },

  /** Function to verify if user can added password in password input field on faceobook login */
  enterGooglepassword: function (password) {
    return this.waitForElementVisible('@googlePasswordinput', 5000)
      .setValue('@googlePasswordinput', password)
  },

  /** Function to verify if user can click on next button  */
  clickGooglepasswordNext: function () {
    return this.waitForElementVisible('@googlePasswordnextButton', 5000)
      .click('@googlePasswordnextButton')
  },

  verifySignupPageContent: function() {
    this.waitForElementVisible('@closeIcon', 10000)
      .verify.containsText('@textCenterMessage', 'What do you need to do?')
      .verify.containsText('@personalText', 'Personal')
      .verify.containsText('@freeMessage', 'FREE: Try our standard free account with many tools you can use daily.')


  },
  clickBannerImageOnSignUpPage: function(){
    this.waitForElementVisible('@verificationSignupPageBanner', 1000)
    return this.click('@verificationSignupPageBanner')
  },


  navigateSignupPage: function () {
    this.waitForElementVisible('@closeIcon', 10000)
    this.click('div.flex-col-sm-6 button.btn.btn-flat-primary.btn-block.btn-lg')
  },

  checkTheCheckbox: function(){
    this.waitForElementVisible('@checkbox', 10000)
    return this.click('@checkbox')
  }

  /** Function to verify if user can click on next button
  clickGooglepasswordNext: function() {
    return this.waitForElementVisible("@beeLogoonVerifypage", 5000)
    .click("@googlePasswordnextButton");
  } */
}

module.exports = {
  commands: [signuptest],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {

    firstName: 'input[name = first_name]', // css selector for first name
    lastName: 'input[name = last_name]', // css selector for last name
    email: 'input[type=email]', // css selector for email
    password: 'input[type=password]', // css selector for password
    registerButton: '.form-generator__submit-button', // css selector for register button
    addInvitecodeLink: 'button.btn.btn-link span', // css selector for add invite code
    inviteCodeinput: 'input[name = inviteCode]', // css selector for invite code input
    inviteCodeerrorContainer: '.error', // css selector for invite code container
    addInvitecodeButton: 'button.btn.btn-primary:nth-child(2) span', // css selector for invite code button
    privacyPolicyLink: '.signup__permission-info', // css selector for privacy policy link
    signupAlertMessage: '.signup__permission-info:last-child', // css selector for sign up alert message
    OkButton: 'button.btn.btn-primary:nth-child(2) span', // css selector for ok button
    inviteCodecontainer: '.text-gray', // css selector for invite code container
    FirstNameErrorContainer: 'form > div:nth-child(1) .error span', // css selector for first name error container
    LastNameErrorContainer: 'form > div:nth-child(2) .error span', // css selector for first name error container
    EmailErrorContainer: 'form > div:nth-child(3) .error span', // css selector for email error container
    PasswordErrorContainer: 'form > div:nth-child(4) .error span', // css selector for password container
    facebookSignupbutton: '.login__authLogos[alt=Facebook]', // css selector for facebook button
    googleSignupbutton: '.login__authLogos[alt=Google]', // css selector for google sign up button
    globalErrorcontainer: '.notification-message > span >span', // css selector for global error conatiner
    errorMessageForAlreadyExistingUser: '.Toastify__toast div.Toastify__toast-body .notification-message', // css selecter for the error message pop-up window
    facebookEmailinput: 'input[id=email]', // css selector for facebook email input
    facebookPasswordinput: 'input[id=pass]', // css selector for facebook password input
    facebookLoginbutton: 'button[id=loginbutton]', // css selector for facebook login button
    googleEmailinput: 'input[id=identifierId]', // css selector for google email input
    googleEmailnextButton: 'div[id=identifierNext]', // css selector for google email next button
    googlePasswordinput: 'input[type=password]', // css selector for google password input
    googlePasswordnextButton: 'div[id=passwordNext]', // css selector for google password next button
    closeIcon: '.authorization__close-icon', // css selector for close icon
    resendButton: '.verify-email__resend-button', // css selector for resend button
    resendMailtext: '.verify-email__button-container h3', // css selector for resent mail text
    useDifferentaccountButton: '.btn:nth-child(3)', // css selector for use different account button
    xcoobeeLogo: '.login__logo-header', // css selector for xcoobee logo
    verificationStageBanner: '.verify-email__left-half-image', // css selector for verification banner
    verificationSignupPageBanner: '.authorization__background-image', // css selector for banner image on signup page
    loginPageBanner: '.login__left-half-image', // css selector for login page banner
    signupPageBanner: '.signup__left-half-image', // css selector for sin up page banner
    textCenterMessage : '.subscription-level-picker__container p.text-center.h4.mb-5 span',
    personalText : 'section.mb-5 > div.flex-row.align-items-center.mb-3.justify-content-center > div.flex-col-sm-10 > p.text-uppercase.font-lg > span',
    freeMessage : 'div#root section.mb-5 > div.flex-row.align-items-center.mb-3.justify-content-center > div.flex-col-sm-10 > p:nth-child(2) > span',
    freePointOne : 'section.mb-5 > div.flex-row.align-items-center.mb-3.justify-content-center > div.flex-col-sm-4 > ul > li:nth-child(1) > span',
    freePointTwo : 'section.mb-5 > div.flex-row.align-items-center.mb-3.justify-content-center > div.flex-col-sm-4 > ul > li:nth-child(2) > span',
    freePointThree : 'section.mb-5 > div.flex-row.align-items-center.mb-3.justify-content-center > div.flex-col-sm-4 > ul > li:nth-child(3) > span',
    freePointFour : 'section.mb-5 > div.flex-row.align-items-center.mb-3.justify-content-center > div.flex-col-sm-4 > ul > li:nth-child(4) > span',
    checkbox : '.checkbox',
  }
}
