var campaignWizardUsersCommands = {
  enterXcoobeeId: function (id) {
    this.waitForElementVisible('@xcoobeeIdField', 5000, 'Xcoobee Id Field Displayed')
    this.click('@xcoobeeIdField')
    return this.setValue('@xcoobeeIdField', id)
  },

  clickAddUserButton: function () {
    this.waitForElementVisible('@addUserButton', 3000, 'Add user button is visible')
    return this.click('@addUserButton')
  },

  clickSaveButtonOnPopUp: function() {
    this.waitForElementVisible('@saveButton', 2000, 'Save button is displayed on popup')
    this.click('@saveButton')
    return this.waitForElementNotPresent('@loader')
  },

  clickNextButton: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Users Form Displayed')
    return this.click('@nextButton')
  },

  selectRestrictUsersCheckbox: function () {
    return this.click('@restrictUsersCheckbox')
  }
}

module.exports = {
  commands: [campaignWizardUsersCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/campaignWizard/users'
  },

  elements: {
    xcoobeeIdField: {
      selector: '[name*=\'users\']'
    },

    addUserButton: {
      selector: '.btn-group.my-1 > button:nth-child(1)'
    },

    nextButton: {
      selector: '#vertical-wizard-pane-users .pull-right.btn.btn-lg.btn-primary'
    },

    restrictUsersCheckbox: {
      selector: '.pull-right.checkbox input'
    },

    saveButton: {
      selector: '.modal-footer .btn.btn-lg.btn-primary'
    },

    loader: {
      selector: '.loader'
    }

  }
}
