var userSettingsSecurityCommands = {

  /** This function is checking if security tab is present */
  verifySecurityTab: function () {
    this.waitForElementVisible('@userSettings', 10000)
      .verify.elementPresent('@securityTab', 'Security tab is present')
  },
  /** This function is checking if all the block titles are displayed to user
 * @param {css selector = #user-settings-pane-security > div > div > div} Password block css selector
 * @param {css selector = #user-settings-pane-security > div > div > div:nth-child(" +settings +") h4} css selector to check for all the title from security tba block.
 */
  verifySecurityTabSettings: function () {
    this.waitForElementVisible('@userSettings', 10000)
      .api.elements('css selector', '#user-settings-pane-security > div > div > div', function (result) {
        var userSettingsCount = result.value.length
        for (var settings = 1; settings <= userSettingsCount; settings++) {
          var settingsTitles = '#user-settings-pane-security > div > div > div:nth-child(' + settings + ') h4'
          this.getText(settingsTitles, function (titleText) {
            var settingsTitleText = titleText.value
            this.verify.elementPresent(settingsTitles, settingsTitleText + ' settings is present')
          })
        }
      })
    return this
  },

  /** This function is checking if click edit password works by clicking on edit password link */
  clickEditPassword: function () {
    this.waitForElementVisible('@editPasswordButton', 5000)
      .verify.elementPresent('@editPasswordButton')
      .click('@editPasswordButton')
    return this
  },

  /** This function is checking for edit password pop up modal and checking for pop up modal title */
  editPasswordModalTitle: function () {
    this.api.page.userSettingsSecurity().clickEditPassword()
      .waitForElementVisible('@editModalTitle', 3000)
      .getText('@editModalTitle', function (title) {
        var modalTitleText = title.value
        this.verify.elementPresent('.modal-content .modal-title', '-----> ' + modalTitleText + ' modal opened successfully')
      })
    return this
  },

  /** This function is checking if edit password pop up modal is closed   */
  closeEditPasswordModal: function () {
    this.waitForElementVisible('@closeModal', 2000)
      .click('@closeModal')
      .api.pause(1000)
      .verify.elementNotPresent('.modal-content', '-----> Modal closed successfully')
    return this
  },

  /** This function is checking if stay logged in toogle is present  */
  stayLoggedInToggle: function () {
    this.waitForElementVisible('@stayLoggedInToggleButton', 2000)
      .verify.elementPresent('@stayLoggedInToggleButton', '-----> Stay Logged In toggle button is present')
  },

  generatePGPKey: function() {
    this.waitForElementVisible('@generatePGPKeyLink', 5000, 'Generate PGP key link present')
    this.click('@generatePGPKeyLink')
    this.waitForElementVisible('@generatePGPKeyButton', 5000, 'Generate PGP key button present on overlay')
    this.click('@generatePGPKeyButton')
    this.api.pause(2000)
    this.click('@generatePGPKeyButton')
    this.api.pause(2000)
    this.click('@generatePGPKeyButton')
  }
}

module.exports = {
  commands: [userSettingsSecurityCommands],
  /** Thiis function maximize window and navifate user to security tab */
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/settings/security'
  },

  elements: {
  /** css selector for settings page */
    userSettings: {
      selector: '.user-settings'
    },
    /** css selector for security tab on setting page */
    securityTab: {
      selector: '.nav-tabs li:nth-child(2)'
    },
    /** css selector for edit password button */
    editPasswordButton: {
      selector: '#user-settings-pane-security .col-xs-6 button'
    },
    /** css selector for edit pop up modal title */
    editModalTitle: {
      selector: '.modal-content .modal-title'
    },
    /** css selector for close pop up modal */
    closeModal: {
      selector: '.modal-content .close'
    },
    /** css selector for stay loggedin toggle */
    stayLoggedInToggleButton: {
      selector: '.react-toggle'
    },

    // selector for generate PGP key link
    generatePGPKeyLink: {
      selector: '.col-xs-6.pull-right.btn.btn-link'
    },

    // selector for generate PGP key button on overlay
    generatePGPKeyButton: {
      selector: '.btn.btn-lg.btn-primary'
    },

    // selector to close pgp key overlay
    closePGPOverlay: {
      selector: '.space-between .btn.btn-lg.btn-default'
    }
  }
}
