var campaignWizardLabelsCommand = {
  clickNext: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Labels Form Displayed')
    return this.click('@nextButton')
  }
}

module.exports = {
  commands: [campaignWizardLabelsCommand],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/campaignWizard/customLabels'
  },

  elements: {
    nextButton: {
      selector: '#vertical-wizard-pane-customLabels .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
