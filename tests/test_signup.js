
module.exports = {
  '@tags': ['stable'], // eslint-disable-line
   "Verify if new user can signup" : function(browser){ //verification through mail and add xcoobee ID not included
    var signup = browser.page.commandsSignup();
    var name = signup.randomNameGenerator();
    var login = browser.page.commandsLogin();

    login.navigate()
    .clickSignupLink();
    signup.navigateSignupPage()
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@gmail.com")
    .setPassword("Testing1")
    .checkTheCheckbox()
    .clickRegister()
    .verifyEmailVerificationpage();
    browser.end();
  },

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


  '@tags': ['smoke'], // eslint-disable-line
  'Verify if registered user can signup': function (browser) {
    const user = browser.globals.login
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('Test')
    signup.setLastname('user')
    signup.setEmail(user.valid.email)
    signup.setPassword(user.valid.password)
    signup.checkTheCheckbox()
    signup.clickRegister()
    .saveScreenshot('C:/Xcoobee Project/xcoobee-e2e/Screenshots/alertMessage.png')
    signup.globalValidationmessage('Sorry we had problems signing you up. If you already have an account, ')// pending verification click here to login on notification message
    browser.end()
  },

  
 
  'Verify minimum characters validations': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('')
      .clickBannerImageOnSignUpPage()
      .verifyFirstNameErrorContainer('The min length of First Name field is 1 characters.')
      .setLastname('t')
      .clickBannerImageOnSignUpPage()
      .verifyLastNameErrorContainer('The min length of Last Name field is 2 characters.')
      .setPassword('12345')
      .clickBannerImageOnSignUpPage()
      .verifyPasswordErrorContainer('The min length of Password field is 6 characters.')// email min char not checked

    browser.end()
  },

  

  'Verify maximum characters validations': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('testtesttesttesttesttesttesttesttesttesttesttesttes')
      .clickBannerImageOnSignUpPage()
      .verifyFirstNameErrorContainer('The max length of First Name field is 50 characters.')
      .setLastname('testtesttesttesttesttesttesttesttesttesttesttesttes')
      .clickBannerImageOnSignUpPage()
      .verifyLastNameErrorContainer('The max length of Last Name field is 50 characters.')
      .setPassword('testtesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttesttestesttesttesttesttesttesttesttesttesttesttesttes')
      .clickBannerImageOnSignUpPage()
      .verifyPasswordErrorContainer('The max length of Password field is 250 characters.') // pending email max not set

    browser.end()
  },



  'Verify if First name accepts only spaces': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('  ')
      .clickBannerImageOnSignUpPage()
      .verifyFirstNameErrorContainer('First Name is required.')

    browser.end()
  },

  

  'Verify if First name accepts special characters': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setFirstname('.')
      .clickBannerImageOnSignUpPage()
      .verifyFirstNameErrorContainer('Not valid name')

    browser.end()
  },



  'Verify if Last name accepts only spaces': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setLastname('  ')
      .clickBannerImageOnSignUpPage()
      .verifyLastNameErrorContainer('Last Name is required.')

    browser.end()
  },

  

  'Verify if Last name accepts special characters': function (browser) {
    var signup = browser.page.commandsSignup()
    var login = browser.page.commandsLogin()

    login.navigate()
      .clickSignupLink()
    signup.navigateSignupPage()
    signup.setLastname('..')
      .clickBannerImageOnSignUpPage()
      .verifyLastNameErrorContainer('Not valid name')

    browser.end()
  },

  
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
      signup.checkTheCheckbox()
      .clickRegister()
      .verifyEmailErrorContainer('Entry is not a valid email.')
    browser.end()
  },

  

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
  },
  
  'Verify if new user can signup through xcoobee form': function(browser){ 
    var signup = browser.page.commandsSignup();
    var name = signup.randomNameGenerator();
    var login = browser.page.commandsLogin();

    login.navigate()
    .clickSignupLink();
    signup.navigateSignupPage()
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@gmail.com")
    .setPassword("Testing1")
    signup.checkTheCheckbox()
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
    signup.navigateSignupPage()
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@gmail.com")
    .setPassword("Testing1")
    signup.checkTheCheckbox()
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
    signup.navigateSignupPage()
    signup.setFirstname("Test")
      .setLastname(name)
      .setEmail(name + "@gmail.com")
      .setPassword("Testing1")
    signup.checkTheCheckbox()  
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
    signup.navigateSignupPage()
    signup.setFirstname("Test")
    .setLastname(name)
    .setEmail(name + "@gmail.com")
    .setPassword("Testing1")
    signup.checkTheCheckbox() 
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
