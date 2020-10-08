
var projectWizardSummary = {
	
 clickOnActivateButton: function(){
  this.waitForElementVisible('@clickOnActivate', 10000, 'Project was activated')
  return this.click('@clickOnActivate')
 }

};
module.exports = {
  commands: [projectWizardSummary],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/summary'
  },

  elements:{
  	clickOnActivate: {
      selector: '#vertical-wizard-pane-summary .btn-group button:nth-child(1)'
    }
  }
  };
