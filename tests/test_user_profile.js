
module.exports = {

  '@tags': ['stable'], // eslint-disable-line

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile title
     */

  'verify-user-profile-page-title': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.pageTitle()

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the user profile image is present or not
     */

  'verify-user-profile-image': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.userProfileImage()

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile xcoobee id
     */

  'verify-xcoobee-id': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.xcoobeeId(user.valid.xbid)

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile ratings
     */

  'verify-user-ratings': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.usersRatings()

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile first name
     */

  'verify-user-first-last-name': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.userFirstLastName()

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile address
     */

  'verify-user-address': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.userAddress()

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile edit button
     */

  'test-edit-profile-button': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.verifyEditProfileButton()
      .clickEditProfileButton()

    browser.end()
  },

  /** Function checks if user can login to xcoobee account and navigate to user profile
     * verify the profile map is displayed or not
     */

  'verify-user-profile-map': function (browser) {
    const user = browser.globals.login
    var login = browser.page.commandsLogin()
    var dashboard = browser.page.userDashboardHeader()
    var userProfile = browser.page.userPublicProfile()

    login.navigate()
    login.enterInputsAndSubmit(user.valid.email, user.valid.password)
    dashboard.clickOnMyAccount()
    dashboard.goToProfile()
    userProfile.userProfileMap()

    browser.end()
  }
}
