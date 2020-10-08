var invite = {
  /** verify invite block pop up for free user and verify if its content are displayed to user */
  checkInvitePopUpForFreeUser: function () {
    this.waitForElementVisible('@inviteOthers', 10000)
      .click('@inviteOthers')
    this.api.pause(5000)
    this.waitForElementVisible('@inviteModal', 2000)
    this.verify.containsText('@inviteTitle', 'Invitations & Fundraiser Panels')
    this.waitForElementVisible('@close', 3000)
  },

  /** verify invite block pop up for paid user and verify if its content are displayed to user */
  checkInvitePopUpForPaidUser: function () {
    this.waitForElementVisible('ul.nav >li:nth-child(5)', 20000)
      .click('ul.nav >li:nth-child(5)')
    this.api.pause(5000)
    this.moveToElement('li.dropdown.open ul.dropdown-menu li:nth-child(4)', 10, 10)
      .click('li.dropdown.open ul.dropdown-menu li:nth-child(4)')
    this.waitForElementVisible('.col-xs-12 .col-md-6.dashboard-button-small-font.btn.btn-primary', 20000)
      .click('ul.nav >li:nth-child(5)')
    this.api.pause(5000)
    this.waitForElementVisible('@advanceSettingsInviations', 5000)
      .click('@advanceSettingsInviations')
    this.api.pause(5000)
    this.waitForElementVisible('@inviteModal', 2000)
    this.verify.containsText('@inviteTitle', 'Invitations & Fundraiser Panels')
    this.waitForElementVisible('@close', 3000)
  },

  /** verify invite block pop up and verify if its content are displayed to user */
  checkInviteTab: function () {
    this.waitForElementVisible('@inviteModal', 2000)
    this.verify.containsText('@inviteTab', 'New Invite')
    this.verify.containsText('@textMessage', 'Earn  100 for inviting friends to XcooBee!')
    this.verify.containsText('@emailText', 'Email *')
    this.waitForElementVisible('@emailInput', 3000)
    this.verify.containsText('@recipientText', 'Name of Recipient *')
    this.waitForElementVisible('@recipientInput', 3000)
    this.verify.containsText('@messageText', 'Message (optional)')
    this.verify.containsText('@textLimit', '0 of 2500 characters')
    this.waitForElementVisible('@messageInput', 3000)
    this.waitForElementVisible('@cancelButton', 3000)
    this.waitForElementVisible('@submitButton', 3000)
  }

}

module.exports = {

  commands: [invite],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {
    // css selector for invite other text
    inviteOthers: {
      selector: 'ul.nav >li:nth-child(6)'
    },
    /** css selector for advanced setting invitation */
    advanceSettingsInviations: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(7)'
    },
    /** css selector for invite modal */
    inviteModal: {
      selector: 'div.modal-content'
    },
    /** css selector for invite modal title */
    inviteTitle: {
      selector: '.modal-title>span'
    },
    /** css selector for invite tab */
    inviteTab: {
      selector: '#user-settings-tab-new_invite>h4>span'
    },
    /** css selector for text message */
    textMessage: {
      selector: '.text-center>span'
    },
    /** css selector for email field */
    emailText: {
      selector: '.field-container:nth-child(1) .control-label'
    },
    /** css selector for recipient text */
    recipientText: {
      selector: '.field-container:nth-child(2) .control-label'
    },
    /** css selector for message text */
    messageText: {
      selector: '.field-container:nth-child(3) .control-label'
    },
    /** css selector for email input field */
    emailInput: {
      selector: 'input[name=email]'
    },
    /** css selector for recipient input */
    recipientInput: {
      selector: 'input[name=name]'
    },
    /** css selector for message input field */
    messageInput: {
      selector: 'textarea[name=message]'
    },
    /** css selector for text message limit */
    textLimit: {
      selector: 'form > div:nth-child(3) div.row div:nth-child(2) span'
    },
    /** css selector for submit button */
    submitButton: {
      selector: 'button[type=submit]'
    },
    /** css selector for cancel button */
    cancelButton: {
      selector: 'button.btn.btn-default.pull-left.btn-lg'
    },
    /** css selector for close button */
    close: {
      selector: '.close'
    }

  }
}
