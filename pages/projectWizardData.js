var projectWizardData = {
	
 clickOnNextCtaData: function(){
  this.waitForElementVisible('@clickOnNextButtonData', 10000, 'Project step 4 Form Displayed')
  return this.click('@clickOnNextButtonData')
 }

};
module.exports = {
  commands: [projectWizardData],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/data'
  },

  elements:{
  	clickOnNextButtonData: {
      selector: '#vertical-wizard-pane-data button:nth-child(2)'
    }
  }
  };
