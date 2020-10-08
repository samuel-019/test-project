var userSettingsAuthorizationCommands = {

  /** Function to Check if authorization tab is present and if message is displayed to user
 * @param {css selector = div.alert span} css selector for authorization message
 */
  authorizationsTab: function () {
    this.waitForElementVisible('@userSettings', 10000)
    this.assert.urlContains('/user/settings/authorizations')
    this.verify.containsText('@authorizationsTab', 'Authorizations')
    this.verify.containsText('div.alert span', 'Authorizations are not forever. They need to be refreshed from time to time. This differs with each provider. We will let you know when there is an issue and re-authorization is required.')
  },

  /** Function to check for Imgur authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(1) img} css selector for imgur image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(1) .auth-card__description h5}css selector for imgur text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(1) button} css selector for collect button
*/
  imgurAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(4) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(4) .auth-card__description h5', 'Imgur')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(4) button', 'Connect')
  },

  /** Function to check for google authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(2) img} css selector for google image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(2) .auth-card__description h5}css selector for google text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(2)) button} css selector for collect button
*/
  googleAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(2) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(2) .auth-card__description h5', 'Google')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(2) button', 'Connect')
  },

  /** Function to check for twitter authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(4) img} css selector for twitter image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(4) .auth-card__description h5}css selector for twitter text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(4) button} css selector for collect button
*/
  twitterAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(6) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(6) .auth-card__description h5', 'Twitter')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(6) button', 'Connect')
  },

  /** Function to check for onedrive authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(6) img} css selector for onedrive image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(6)) .auth-card__description h5}css selector for onedrive text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(6) button} css selector for collect button
*/
  onedriveAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(1) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(1) .auth-card__description h5', 'OneDrive')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(1) button', 'Connect')
  },

  /** Function to check for linkedin authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(3) img} css selector for linkedin image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(3)) .auth-card__description h5}css selector for linkedin text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(3) button} css selector for collect button
*/
  linkedinAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(3) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(3) .auth-card__description h5', 'Linkedin')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(3) button', 'Connect')
  },

  /** Function to check for tumblr authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(3) img} css selector for tumblr image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(3)) .auth-card__description h5}css selector for tumblr text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(3) button} css selector for collect button
*/
  tumblrAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(5) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(5) .auth-card__description h5', 'Tumblr')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(5) button', 'Connect')
  },

  /** Function to check for dropbox authorization
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(5) img} css selector for dropbox image
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(5)) .auth-card__description h5}css selector for dropbox text
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(5) button} css selector for collect button
  */
  dropboxAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations > div > div:nth-child(3) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(3) .auth-card__description h5', 'DropBox')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(3) button', 'Connect')
  },

  /** Duplicate Function to check for bloomerang authorization
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(7) img} css selector for tumblr image
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(7)) .auth-card__description h5}css selector for tumblr text
 * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(7) button} css selector for collect button
 */

  bloomerangAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations  > div > div:nth-child(9) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(9) .auth-card__description h5', 'Bloomerang')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(9) button', 'Connect')
  },

  /** Function to check for XcooBee Api authorization
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(8) img} css selector for dropbox image
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(8)) .auth-card__description h5}css selector for dropbox text
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(8) button} css selector for collect button
  */

  xcoobeeApiAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations > div > div:nth-child(10) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(10) .auth-card__description h5', 'XcooBee API')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(10) button', 'Connect')
  },

  /** Function to check for RSA Private authorization
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(9)) .auth-card__description h5}css selector for dropbox text
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(9) button} css selector for collect button
  */

  rsaPrivateAuthorization: function () {
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(11) .auth-card__description h5', 'RSA Private')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(11) button', 'Connect')
  },

  /** Function to check for Stripe authorization
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(10) img} css selector for dropbox image
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(10)) .auth-card__description h5}css selector for dropbox text
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(10) button} css selector for collect button
  */

  stripeAuthorization: function () {
    this.waitForElementVisible('#user-settings-pane-authorizations > div > div:nth-child(7) img', 10000)
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(7) .auth-card__description h5', 'Stripe')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(7) button', 'Connect')
  },

  /** Function to check for RSA Private authorization
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(11)) .auth-card__description h5}css selector for dropbox text
   * @param {css selector = #user-settings-pane-authorizations  > div > div:nth-child(11) button} css selector for collect button
  */

  pgpPrivateAuthorization: function () {
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(12) .auth-card__description h5', 'PGP Private')
    this.verify.containsText('#user-settings-pane-authorizations  > div > div:nth-child(12) button', 'Connect')
  },

  /** Function to check for authorization  */
  authorizationConnections: function () {
    this.imgurAuthorization()
    this.googleAuthorization()
    this.twitterAuthorization()
    this.onedriveAuthorization()
    // this.linkedinAuthorization()
    this.tumblrAuthorization()
    this.dropboxAuthorization()
    this.bloomerangAuthorization()
    this.xcoobeeApiAuthorization()
    this.rsaPrivateAuthorization()
    this.stripeAuthorization()
    this.pgpPrivateAuthorization()
  }

}

module.exports = {
  commands: [userSettingsAuthorizationCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/settings/authorizations'
  },

  elements: {
    /** css selector for settings page */
    userSettings: {
      selector: '.user-settings > div'
    },
    /** css selector for authorization tab */
    authorizationsTab: {
      selector: '.nav-tabs li:nth-child(4)'
    }
  }
}
