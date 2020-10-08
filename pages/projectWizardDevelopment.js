
var projectWizardDevelopment = {
	
 clickOnNextCtaDevelopment: function(){
  this.waitForElementVisible('@clickOnNextButtonDevelopment', 10000, 'Project step 4 Form Displayed')
  return this.click('@clickOnNextButtonDevelopment')
 }

};

module.exports = {
  commands: [projectWizardDevelopment],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/development'
  },

  elements:{
  	clickOnNextButtonDevelopment: {
      selector: '#vertical-wizard-pane-development button:nth-child(2)'
    }
  }
  };
