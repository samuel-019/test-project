var campaignWizardDataCommands = {

  addDataFields: function (noOfFieldsToAdd) {
    return this.perform(function () {
      for (var i = 0; i < noOfFieldsToAdd; i++) {
        this.waitForElementVisible('#campaign-data-sections-pane-fields .campaign-wizard__draggable:nth-child(1)', 'Data Field displayed')
        this.click('#campaign-data-sections-pane-fields .campaign-wizard__draggable:nth-child(1)')
        this.waitForElementVisible('.campaign-wizard__sections-actions.col-sm-2 button:nth-child(1)', 'Add field button displayed')
        this.click('.campaign-wizard__sections-actions.col-sm-2 button:nth-child(1)')
        this.pause(1000)
      }
    })
  },

  clickNext: function () {
    this.waitForElementVisible('@nextButton', 5000, 'Campaign Data Form Displayed')
    return this.click('@nextButton')
  }

}

module.exports = {
  commands: [campaignWizardDataCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + '/user/campaignWizard/data'
  },

  elements: {
    firstDataField: {
      selector: '#campaign-data-sections-pane-fields .campaign-wizard__draggable:nth-child(1)'
    },

    addFieldButton: {
      selector: '.campaign-wizard__sections-actions.col-sm-2 button:nth-child(1)'
    },

    nextButton: {
      selector: '#vertical-wizard-pane-data .pull-right.btn.btn-lg.btn-primary'
    }
  }
}
