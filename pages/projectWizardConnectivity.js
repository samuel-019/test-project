var projectWizardConnectivity = {
	
 clickOnNextCtaConnectivity: function(){
  this.waitForElementVisible('@clickOnNextButtonConnectivity', 10000, 'Project step 4 Form Displayed')
  return this.click('@clickOnNextButtonConnectivity')
 }

};

module.exports = {
  commands: [projectWizardConnectivity],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/options'
  },

  elements:{
  	clickOnNextButtonConnectivity: {
      selector: '#vertical-wizard-pane-options button:nth-child(2)'
    }
  }
  };