var campaignWizardEmailCommand = {
  clickNext: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Email Form Displayed')
    return this.click('@nextButton')
  }
}

module.exports = {
  commands: [campaignWizardEmailCommand],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/campaignWizard/email'
  },

  elements: {
    nextButton: {
      selector: '#vertical-wizard-pane-email .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
