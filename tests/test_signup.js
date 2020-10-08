
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  /** Function to verify if user can navigate to sign up page and verify content on sign up page and close sign up page */

  'Verify if user can close signup page': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.verifySignupPage()
      .clickCloseIcon()
      .clickOKonCloseConfirmation()
    login.validateForm()
    browser.end()
  },

  /** verify if user can perform blank sign  */
  '@tags': ['smoke'], // eslint-disable-line
  'Verify blank signup': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.verifyRegisterIfEnabled()
    browser.end()
  },

  /** Verify if already registered user can sign up again adn if error message are displayed */
  '@tags': ['smoke'], // eslint-disable-line
  'Verify if registered user can signup': function (browser) {
    const user = browser.globals.login
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('Test')
      .setLastname('user')
      .setEmail(user.valid.email)
      .setPassword(user.valid.password)
      .clickRegister()
      .globalValidationmessage('Sorry we had problems signing you up. If you already have an account,')// pending verification click here to login on notification message
    browser.end()
  },

  /** verify minimum character validations on sign up page and if validation message are displayed to user */

  'Verify minimum characters validations': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('')
      .clickRegister()
      .verifyFirstNameErrorContainer('The min length of First Name field is 1 characters.')
      .setLastname('t')
      .clickRegister()
      .verifyLastNameErrorContainer('The min length of Last Name field is 2 characters.')
      .setPassword('12345')
      .clickRegister()
      .verifyPasswordErrorContainer('The min length of Password field is 6 characters.')// email min char not checked

    browser.end()
  },

  /** verify maximum character validations on sign up page and if validation message are displayed to user */

  'Verify maximum characters validations': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('testtesttesttesttesttesttesttesttesttesttesttesttes')
      .clickRegister()
      .verifyFirstNameErrorContainer('The max length of First Name field is 50 characters.')
      .setLastname('testtesttesttesttesttesttesttesttesttesttesttesttes')
      .clickRegister()
      .verifyLastNameErrorContainer('The max length of Last Name field is 50 characters.')
      .setPassword('testtesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttes')
      .clickRegister()
      .verifyPasswordErrorContainer('The max length of Password field is 250 characters.') // pending email max not set

    browser.end()
  },

  /** verify if first name field accepts space on sign up page and if validation message are displayed to user */

  'Verify if First name accepts only spaces': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('  ')
      .clickRegister()
      .verifyFirstNameErrorContainer('First Name is required.')

    browser.end()
  },

  /** verify if first name field accepts special character on sign up page and if validation message are displayed to user */

  'Verify if First name accepts special characters': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('.')
      .clickRegister()
      .verifyFirstNameErrorContainer('Not valid name')

    browser.end()
  },

  /** verify if last name field accepts space on sign up page and if validation message are displayed to user */

  'Verify if Last name accepts only spaces': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setLastname('  ')
      .clickRegister()
      .verifyLastNameErrorContainer('Last Name is required.')

    browser.end()
  },

  /** verify if last name field accepts special character on sign up page and if validation message are displayed to user */

  'Verify if Last name accepts special characters': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setLastname('..')
      .clickRegister()
      .verifyLastNameErrorContainer('Not valid name')

    browser.end()
  },

  /** verify if email field accepts invalid email on sign up page and if validation message are displayed to user */
  'Verify if user can signup with invalid email format': function (browser) {
    const user = browser.globals.login
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('Test')
      .setLastname('user')
      .setEmail(user.invalid.email)
      .setPassword(user.valid.password)
      .clickRegister()
      .verifyEmailErrorContainer('Entry is not a valid email.')
    browser.end()
  },

  /** Verify if user can sign up using valid invite code */

  'Verify if user can signup with valid invite code': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.clickAddInviteCodeLink()
      .setInviteCode('59.3elru5sj')
      .clickAddInviteCodebutton()
      .verifyInviteCodeAdded('Change Invite / Promo Code', '59.3elru5sj')

    browser.end()
  },

  /** verify if user can sign up using invalid invite code */

  'Verify if user can signup with invalid invite code': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.clickAddInviteCodeLink()
      .setInviteCode('safsdf')
      .clickAddInviteCodebutton()
      .verifyInviteCodeErrorContainer('Invalid Format')

    browser.end()
  }
  /*

  "Verify if new user can signup through XcooBee form" : function(browser){ //verification through mail and add xcoobee ID not included
    var signup = browser.page.commandsSignup();
    var name = signup.randomNameGenerator();
    var login = browser.page.commandsLogin();

    login.navigate()
    .clickSignupLink();
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@mailinator.com")
    .setPassword("Testing1")
    .clickRegister()
    .verifyEmailVerificationpage();
    browser.end();
  },

  "Verify if resend button works" : function(browser){ //verification through mail not included
    var signup = browser.page.commandsSignup();
    var name = signup.randomNameGenerator();
    var login = browser.page.commandsLogin();

    login.navigate()
    .clickSignupLink();
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@mailinator.com")
    .setPassword("Testing1")
    .clickRegister()
    .verifyEmailVerificationpage()
    .clickResendButton()
    .verifyResendVerificationMail("Email verification was successfully resent.");
    browser.end();

  },

  "Verify if use a different account button works" : function(browser){
    var signup = browser.page.commandsSignup();
    var login = browser.page.commandsLogin();
    var name = signup.randomNameGenerator();

    login.navigate()
      .clickSignupLink();
    signup.setFirstname("Test")
      .setLastname(name)
      .setEmail(name + "@mailinator.com")
      .setPassword("Testing1")
      .clickRegister()
      .verifyEmailVerificationpage()
      .clickUseDifferentAccountButton();
    login.validateForm();
    browser.end();
  },

  "Verify if user can close email verification page" : function (browser) {
    var signup = browser.page.commandsSignup();
    var login = browser.page.commandsLogin();
    var name = signup.randomNameGenerator();

    login.navigate()
    .clickSignupLink();
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@mailinator.com")
    .setPassword("Testing1")
    .clickRegister()
    .verifyEmailVerificationpage()
    .clickCloseIcon();
    login.validateForm();
    browser.end();
  }
  /** Facebook and
  "Verify if user can signup through facebook" : function (browser) {
    var signup = browser.page.commandsSignup();
    var login = browser.page.commandsLogin();

    login.navigate()
    .clickSignupLink()
    signup.signupViafacebook()
    .enterFacebookusername("qasjiuser@gmail.com")
    .enterFacebookpassword("demouser")
    .loginFacebook();
    browser.end();
//pending
   },

  "Verify if user can signup through google" : function (browser) {
    var signup = browser.page.commandsSignup();
    var login = browser.page.commandsLogin();

    login.navigate()
    .clickSignupLink()
    signup.signupViagoogle()
    .enterGoogleusername("qasjiuser@gmail.com")
    .clickGoogleemailNext()
    .enterGooglepassword("demouser")
    .clickGooglepasswordNext()
    browser.pause(7000);
    browser.end();
  }
 */

}
