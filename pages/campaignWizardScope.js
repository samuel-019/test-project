var camaignWizardScope = {
  // selects checkboxes as per the number specified as parameter
  addScopes: function (noOfScopes) {
    return this.perform(function () {
      for (let i = 1; i <= noOfScopes; i++) {
        this.waitForElementVisible('.consent-checkbox-tree .checkbox:nth-child(' + i + ') span > span', 60000, 'Scope displayed')
        this.click('.consent-checkbox-tree .checkbox:nth-child(' + i + ') span > span')
      }
    })
  },

  clickNextButton: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Scope Form Displayed')
    return this.click('@nextButton')
  }
}

module.exports = {
  commands: [camaignWizardScope],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + '/user/campaignWizard/scope'
  },

  elements: {
    firstScopeCheckbox: {
      selector: '.checkbox:nth-child(1)'
    },

    nextButton: {
      selector: '#vertical-wizard-pane-scope .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
