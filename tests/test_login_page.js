
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  'Verify if elements are present on login page': function (browser) {
    var login = browser.page.commandsLogin()

    login.navigate()
      .validateForm()

    browser.end()
  },

  /** Verify if user can login without providing email and password in login form
   * and if error message are displayed
  */

  'Verify login with no email and password': function (browser) {
    var login = browser.page.commandsLogin()

    login.navigate()
      .submit()
      .inputEmailError('Email is required.')
      .inputPasswordError('Password is required.')

    browser.end()
  },

  /** verify if user can login when no password is provided and verify if error message is displayed  */

  'Verify login with a email and empty password': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()

    login.navigate()
      .fillInForm(user.valid.email, '')
      .submit()
      .inputPasswordError('Password is required.')

    browser.end()
  },

  /** verify if user can login when no email is provided and verify if error message is displayed  */

  'Verify login with a password and empty email': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()

    login.navigate()
      .fillInForm('', user.valid.password)
      .submit()
      .inputEmailError('Email is required.')

    browser.end()
  },

  /** verify if user can login with valid email & password is provided and verify if dashboard is displayed on login */
  '@tags': ['smoke'], // eslint-disable-line
  'Verify login with vaild username and password xcoobeeid': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    const userDashboard = browser.page.userDashboardHeader()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboard.UserXcoobeeId(user.valid.xbid)

    browser.end()
  },

  /** verify if user can login with valid email & password is provided and verify if dashboard is displayed on login */
  '@tags': ['smoke'], // eslint-disable-line
  'Verify login with vaild username and password': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    const userDashboard = browser.page.userDashboardHeader()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboard.balanceElementHeader()

    browser.end()
  },

  /** verify if user can login when trailing space is present in email and verify if error message is displayed */

  'Check login with trailing space email': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()

    login.navigate()
      .fillInForm(user.invalid.trailing_email, user.valid.password)
      .submit()
      .inputEmailError('Entry is not a valid email.')

    browser.end()
  },

  /** verify if user can login with wrong credentails and verify if error message is displayed */

  'Verify if wrong username and password': function (browser) {
    var login = browser.page.commandsLogin()
    function getRandomInt (max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
    var randomCharcter = getRandomInt(123)

    login.navigate()
      .fillInForm('abcdef' + randomCharcter + '@example.com', '123')
      .submit()
      .globalError('Wrong email and/or password.')

    browser.end()
  }

}
