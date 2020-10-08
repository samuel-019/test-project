var campaignWizardSummaryCommands = {
  clickActivateCampaign: function () {
    this.waitForElementVisible('@activateCampaignButton', 5000, 'Activate Campaign button is displayed')
    return this.click('@activateCampaignButton')
  },

  clickCancelCampaignButton: function () {
    this.waitForElementVisible('@cancelCampaignButton', 5000)
    return this.click('@cancelCampaignButton')
  },

  clickFinishButton: function () {
    this.waitForElementVisible('@finishButton', 5000)
    return this.click('@finishButton')
  }

}

module.exports = {
  commands: [campaignWizardSummaryCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/campaignWizard/summary'
  },

  elements: {
    activateCampaignButton: {
      selector: '#vertical-wizard-pane-summary .btn-group button:nth-child(1)'
    },

    cancelCampaignButton: {
      selector: '#vertical-wizard-pane-summary .btn-group button:nth-child(2)'
    },

    finishButton: {
      selector: '#vertical-wizard-pane-summary .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
