var projectWizardOptions = {
	
 clickOnNextCtaOption: function() {
  this.waitForElementVisible('@clickOnNextButtonOptions', 10000, 'Project step 4 Form Displayed')
  return this.click('@clickOnNextButtonOptions')
 }

};

module.exports = {
  commands: [projectWizardOptions],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/options'
  },

  elements:{
  	clickOnNextButtonOptions: {
      selector: '#vertical-wizard-pane-options button:nth-child(2)'
    }
  }
  };