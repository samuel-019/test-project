/* var campaignWizardOffersCommands = {
  selectConsentCheckbox: function () {
    return this.click('@consentPontsCheckbox').click()
  },

  clickNext: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Offers Form Displayed')
    return this.click('@nextButton')
  }
}

module.exports = {
  commands: [campaignWizardOffersCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + '/user/campaignWizard/offer'
  },

  elements: {
    consentPontsCheckbox: {
      selector: '#consent-offer'
    },

    nextButton: {
      selector: '#vertical-wizard-pane-offer .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
*/