module.exports = {

  /** Function to perform login to xcoobee account and navigate user to inbox page and check title */

  'verify copy dack': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userInbox = browser.page.userInbox()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userInbox.navigate()
      .pageURL()
      .pageHeading()

    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to inbox page and check inbox page content */
  '@tags': ['smoke'], // eslint-disable-line
  'verify-inbox-page-content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userInbox = browser.page.userInbox()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    userInbox.navigate()
      .inboxPageContent()

    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to inbox page and perform search by title and verify if result are displayed */
  '@tags': ['smoke'], // eslint-disable-line
  'verify search by title': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userInbox = browser.page.userInbox()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    userInbox.navigate()
      .enterLastFileName()
      .clickSearchButton()
      .searchResultForTitle()

    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to inbox page and perform search by xcoobee id and verify if result are displayed */
  '@tags': ['smoke'], // eslint-disable-line
  'verify search by XB Id': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userInbox = browser.page.userInbox()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    userInbox.navigate()
      .getXcoobeeId()
    browser.perform(function(browser, done) {
      userInbox.enterKeyword(browser.globals.testdata.inboxXcoobeeId)
      userInbox.clickSearchButton()
      userInbox.searchResultForXBid(browser.globals.testdata.inboxXcoobeeId)
      done();
    })
    browser.end()
  },

  /** Function to perform login to xcoobee account and navigate user to inbox page and perform search by xcoobee id , to and fromd date and verify if result are displayed */
  '@tags': ['smoke'], // eslint-disable-line
  'verify search applying date filter': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const userInbox = browser.page.userInbox()

    login.navigate()
      .enterInputsAndSubmit(user.businessUser.email, user.businessUser.password)
    userInbox.navigate()
      .getXcoobeeId()
    browser.perform(function(browser, done) {
      userInbox.enterKeyword(browser.globals.testdata.inboxXcoobeeId)
        .pickFromAndToDate()
        .clickSearchButton()
        .searchResultForXBid(browser.globals.testdata.inboxXcoobeeId)
      done();
    })
    browser.end()
  }

}
