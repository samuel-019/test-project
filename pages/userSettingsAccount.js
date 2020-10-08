var userSettingsAccountCommands = {

  /** Function to check if accounts tab is present in settings */
  verifyAccountTab: function () {
    this.waitForElementVisible('@userSettings', 10000)
      .verify.elementPresent('@accountTab', 'Account tab is present')
    return this
  },

  /** Function to check account tab and title
   * @param {css selector = #user-settings-pane-account > div > div} css selector for account tab block
  */
  verifyAccountTabSettings: function () {
    this.waitForElementVisible('@userSettings', 10000)
      .api.elements('css selector', '#user-settings-pane-account > div > div', function (result) {
        var userSettingsCount = result.value.length
        for (var settings = 1; settings <= userSettingsCount; settings++) {
          var settingsTitles = '#user-settings-pane-account > div > div:nth-child(' + settings + ') h4'
          this.getText(settingsTitles, function (titleText) {
            var settingsTitleText = titleText.value
            this.verify.elementPresent(settingsTitles, settingsTitleText + ' settings is present')
          })
        }
      })
    return this
  },

  /** Function to check for edit profile button */
  clickEditProfile: function () {
    this.waitForElementVisible('@editProfileButton', 5000)
    this.verify.elementPresent('@editProfileButton')
      .click('@editProfileButton')
    return this
  },

  /** Function to check if edit address button is working */
  clickEditAddress: function () {
    this.waitForElementVisible('@editAddressButton', 5000)
    this.verify.elementPresent('@editAddressButton')
      .moveToElement('@editAddressButton', 10, 10)
      .click('@editAddressButton')
    return this
  },

  /** Function to check if edit email button is working */
  clickEditEmail: function () {
    this.waitForElementVisible('@editEmailButton', 5000)
    this.verify.elementPresent('@editEmailButton')
      .moveToElement('@editEmailButton', 10, 10)
      .click('@editEmailButton')
    return this
  },

  /** Function to check if edit phone button is working */
  clickEditPhone: function () {
    this.waitForElementVisible('@editPhoneButton', 5000)
    this.verify.elementPresent('@editPhoneButton')
      .moveToElement('@editPhoneButton', 10, 10)
      .click('@editPhoneButton')
    return this
  },

  /** Function to check if edit profile button is working and if pop up modal is displayed */
  editProfileModalTitle: function () {
    this.api.page.userSettingsAccount().clickEditProfile()
      .waitForElementVisible('@editModalTitle', 3000)
      .getText('@editModalTitle', function (title) {
        var modalTitleText = title.value
        this.verify.elementPresent('.modal-content .modal-title', '-----> ' + modalTitleText + ' modal opened successfully')
      })
    return this
  },

  /** Function to check if edit address button is working and if pop up modal is displayed */
  editAddressModalTitle: function () {
    this.api.page.userSettingsAccount().clickEditAddress()
      .waitForElementVisible('@editModalTitle', 3000)
      .getText('@editModalTitle', function (title) {
        var modalTitleText = title.value
        this.verify.elementPresent('.modal-content .modal-title', '-----> ' + modalTitleText + ' modal opened successfully')
      })
    return this
  },

  /** Function to check if edit email button is working and if pop up modal is displayed */
  editEmailModalTitle: function () {
    this.api.page.userSettingsAccount().clickEditEmail()
      .waitForElementVisible('@editModalTitle', 3000)
      .getText('@editModalTitle', function (title) {
        var modalTitleText = title.value
        this.verify.elementPresent('.modal-content .modal-title', '-----> ' + modalTitleText + ' modal opened successfully')
      })
    return this
  },

  /** Function to check if edit phone button is working and if pop up modal is displayed */
  editPhoneModalTitle: function () {
    this.api.page.userSettingsAccount().clickEditPhone()
      .waitForElementVisible('@editModalTitle', 3000)
      .getText('@editModalTitle', function (title) {
        var modalTitleText = title.value
        this.verify.elementPresent('.modal-content .modal-title', '-----> ' + modalTitleText + ' modal opened successfully')
      })
    return this
  },

  /** Function to check if close pop up modal is working by clicking on close button */
  closeEditSettingsModal: function () {
    this.waitForElementVisible('@closeModal', 2000)
      .click('@closeModal')
    return this
  },

  /** Function to verify if address block is empty or filled
   * @param {css selector = div.col-lg-4:nth-child(2) div.panel-body h5 } css selector for address block
   * @param {Css selector = div.col-lg-4:nth-child(2) div.panel-body > div + }css selector for when address block has address present in it
   */
  AddressDataStates: function () {
    this.api.element('css selector', 'div.col-lg-4:nth-child(2) div.panel-body h5', function (result) {
      if (result.status !== -1) {
        this.verify.containsText('div.col-lg-4:nth-child(2) div.panel-body h5', 'Please click "Edit" to enter', 'Empty State block is present')
      } else {
        this.verify.elementPresent('.row.xb-row > div:nth-child(2) .col-xs-12.wrap-word', 'Address is  present')
      }
      return this
    })
  },
  /** Function to check if phone number is present or not in phone block
   * @param {css selector = div.col-lg-4:nth-child(5) div.panel-body h5 } css selector when phone block is empty
   * @param {css selector = div.col-lg-4:nth-child(5) div.panel-body  p} css selector when phone number is present
  */

  phoneNumberStates: function () {
    this.api.element('css selector', 'div.col-lg-4:nth-child(5) div.panel-body h5', function (result) {
      if (result.status !== -1) {
        this.verify.containsText('div.col-lg-4:nth-child(5) div.panel-body h5', 'Please click "Edit" to enter', 'Empty State block is present')
      } else {
        this.verify.elementPresent('div.col-lg-4:nth-child(5) div.panel-body  p', 'Phone number is  present')
      }
      return this
    })
  },

  /** Function to check for account option block content
   * @param {css selector = div.col-lg-4:nth-child(5) div.panel-body  p} css selector for accounts option block
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body a button}css selector for upgrade your account
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body div > button}css selector for close your account button
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body div.col-xs-6:nth-child(1) button}css selector for cancel subscription button
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body div.col-xs-6:nth-child(2) button} css selector for close your account button
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body div.col-xs-12 button} css selector for change your subscription button
   */
  accountOptionsStates: function () {
    this.getText('css selector', 'div.col-lg-4:nth-child(6) div.panel-body .subscription-level > span > span', function (result) {
      if (result.value === 'Free') {
        this.verify.containsText('div.col-lg-4:nth-child(6) div.panel-body a button', 'Upgrade your account')
        this.verify.containsText('div.col-lg-4:nth-child(6) div.panel-body div > button', 'Close your account')
      } else {
        this.verify.elementPresent('div.col-lg-4:nth-child(6) div.panel-body div.col-xs-6:nth-child(1) button', 'Cancel Subscription')
        this.verify.containsText('div.col-lg-4:nth-child(6) div.panel-body div.col-xs-6:nth-child(2) button', 'Close your account')
        this.verify.containsText('div.col-lg-4:nth-child(6) div.panel-body div.col-xs-12 button', 'Change your subscription')
      }
      return this
    })
  },

  /** Function to verify account tab conent
   * @param {css selector = div.col-lg-4:nth-child(1) div.panel-body h4} css selector for profile
   * @param {css selector = div.col-lg-4:nth-child(1) div.panel-body button} css selector for edit link on profile block
   * @param {css selector = div.col-lg-4:nth-child(1) div.panel-body .file-upload} css selector for file upload block
   * @param {css selector = div.col-lg-4:nth-child(1) div.panel-body p} css selector for profile block
   * @param {css selector = span.date-column} css selector for join date
   * @param {css selector = div.col-lg-4:nth-child(2) div.panel-body h4} css selector for Adress title
   * @param {css selector = div.col-lg-4:nth-child(2) div.panel-body button} css selector for edit button in address block
   * @param {css selector = div.col-lg-4:nth-child(3) div.panel-body h4} css selector for email
   * @param {css selector = div.col-lg-4:nth-child(3) div.panel-body p} css selector for email address
   * @param {css selector = div.col-lg-4:nth-child(3) div.panel-body button} css selector for edit button in email block
   * @param {css selector = div.col-lg-4:nth-child(4) div.panel-body h4} css selector for internation block title
   * @param {css selector = div.col-lg-4:nth-child(5) div.panel-body h4} css selector for phone block title
   * @param {css selector = div.col-lg-4:nth-child(5) div.panel-body button} css selector for edit button in phone block
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body h4 } css selector for account options block title
   * @param {css selector = div.col-lg-4:nth-child(6) div.panel-body div.subscription-level} css selector for subscription
   */
  accountPanel: function (accountCard) {
    var expr = accountCard
    switch (expr) {
      case 'profile':
        this.verify.containsText('div.col-lg-4:nth-child(1) div.panel-body h4', 'Profile', expr + ' Card is present')
        this.verify.elementPresent('div.col-lg-4:nth-child(1) div.panel-body button', expr + ' Edit link is present')
        this.verify.elementPresent('div.col-lg-4:nth-child(1) div.panel-body .xb-dropzone__actions', ' Avatar block is present')
        this.verify.elementPresent('div.col-lg-4:nth-child(1) div.col-xs-8 h5', 'Profile name block is present')
        this.verify.elementPresent('span.date-column', 'Join date block is present')
        return
      case 'Address':
        this.verify.containsText('div.col-lg-4:nth-child(2) div.panel-body h4', 'Address', expr + ' Card is present')
        this.AddressDataStates()
        this.verify.elementPresent('div.col-lg-4:nth-child(2) div.panel-body button', expr + ' Edit link is present')
        return
      case 'Email':
        this.verify.containsText('div.col-lg-4:nth-child(3) div.panel-body h4', 'Email', expr + ' Card is present')
        this.verify.containsText('div.col-lg-4:nth-child(3) div.panel-body p', '', 'email address present')
        this.verify.elementPresent('div.col-lg-4:nth-child(3) div.panel-body button', expr + ' Edit link is present')
        return
      case 'International':
        this.verify.containsText('div.col-lg-4:nth-child(4) div.panel-body h4', 'International', expr + ' Card is present')
        return
      case 'Phone':
        this.verify.containsText('div.col-lg-4:nth-child(5) div.panel-body h4', 'Phone', expr + ' Card is present')
        this.phoneNumberStates()
        this.verify.elementPresent('div.col-lg-4:nth-child(5) div.panel-body button', expr + ' Edit link is present')
        return
      case 'Account Options':
        this.verify.containsText('div.col-lg-4:nth-child(6) div.panel-body h4', 'Account Options', expr + ' Card is present')
        this.verify.containsText('div.col-lg-4:nth-child(6) div.panel-body div.subscription-level', 'Subscription\n:\nFree', 'Subscription block is present')
        this.accountOptionsStates()
        return
      default:
        console.log('Sorry, we are out of ' + expr + '.')
    }
  }

}

module.exports = {
  commands: [userSettingsAccountCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/settings/account'
  },

  elements: {
    /** css selector for settings */
    userSettings: {
      selector: '.user-settings'
    },
    /** css selector for accounts tab */
    accountTab: {
      selector: '.nav-tabs li:nth-child(1)'
    },
    /** css selector for edit profile button */
    editProfileButton: {
      selector: '#user-settings-pane-account > div > div:nth-child(1) button'
    },
    /** css selector for edit address button */
    editAddressButton: {
      selector: '#user-settings-pane-account > div > div:nth-child(2) button'
    },
    /** css selector for edit email button */
    editEmailButton: {
      selector: '#user-settings-pane-account > div > div:nth-child(3) button'
    },
    /** css selector for edeit phone button */
    editPhoneButton: {
      selector: '#user-settings-pane-account > div > div:nth-child(5) button'
    },
    /** css selector for edit modal button */
    editModalTitle: {
      selector: '.modal-content .modal-title'
    },
    /** Css selector for close modal button */
    closeModal: {
      selector: '.modal-content .close'
    }
  }
}
