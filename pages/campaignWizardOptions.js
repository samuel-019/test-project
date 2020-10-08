var campaignWizardOptionCommands = {
  clickNext: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Options Form Displayed')
    return this.click('@nextButton')
  }
}

module.exports = {
  commands: [campaignWizardOptionCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/campaignWizard/options'
  },

  elements: {
    nextButton: {
      selector: '#vertical-wizard-pane-options .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
