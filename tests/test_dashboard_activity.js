
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  'verify if activity section appears': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()
    const userDashboard = browser.page.userDashboardHeader()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboard.balanceElementHeader()
    activity.verifyActivtySection()
    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'verify if more button is working on click': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()
    const userDashboard = browser.page.userDashboardHeader()
    const activityHistory = browser.page.userActivityHistory()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboard.balanceElementHeader()
    activity.clickMoreButton()
    activityHistory.verifyElementsPresent()

    browser.end()
  },
  '@tags': ['smoke'], // eslint-disable-line
  'verify if Activity Cards Modal is loading on click': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()
    const userDashboard = browser.page.userDashboardHeader()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboard.balanceElementHeader()
    activity.moveToActivity()
      .clickOnCard()
      .cardModal()
    browser.end()
  },
  'verify if next button works on click': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const activity = browser.page.userDashboardActivity()
    const userDashboard = browser.page.userDashboardHeader()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    userDashboard.balanceElementHeader()
    activity.moveToActivity()
      .clickOnNextButton()
    // .cardList();

    browser.end()
  }

}
