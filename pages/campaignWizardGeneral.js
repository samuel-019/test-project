var campaignWizardGeneralCommands = {
  // enter Campaign Name
  enterCampaignName: function () {
    // date to set in campaign name
    var date = new Date()
    var campaignName = 'Test Campaign ' + date
    this.waitForElementVisible('@campaignNameField', 7000)
    this.setValue('@campaignNameField', campaignName)
    return campaignName
  },

  enterDescription: function () {
    this.click('@descriptionTextField')
    return this.setValue('@descriptionTextField', 'Sample Campaign Please Ignore')
  },

  clickNext: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign step 1 Form Displayed')
    return this.click('@nextButton')
  },

  // clicks the consent and data checkbox
  clickConsentDataCheckbox: function () {
    return this.click('@collectConsentDataRadioButton')
  }
}

module.exports = {
  commands: [campaignWizardGeneralCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/campaignWizard/general'
  },

  elements: {
    campaignNameField: {
      selector: 'input.form-control'                                   //'#campaign-name'
    },

    campaignUrl: {
      selector: '#campaign-url'
    },

    collectConsentRadioButton: {
      selector: '.radio #consent'
    },

    collectConsentDataRadioButton: {
      selector: '.radio:nth-child(3) span'
    },

    outboundCheckbox: {
      selector: '#isOutbound'
    },

    inboundCheckbox: {
      selector: '#isInbound'
    },

    descriptionTextField: {
      selector: '.description-input.form-control'
    },

    nextButton: {
      selector: '#vertical-wizard-pane-general button:nth-child(2)'
    }
  }
}
