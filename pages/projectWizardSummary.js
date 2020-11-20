
var projectWizardSummary = {
	
 clickOnActivateButton: function(){
  this.waitForElementVisible('@clickOnActivate', 10000)
  return this.click('@clickOnActivate')
 },
 clickOnSaveAndExitButton: function(){
  this.waitForElementVisible('@clickOnSaveAndExit', 10000)
  return this.click('@clickOnSaveAndExit')
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
    },
    clickOnSaveAndExit:{
      selector: '#vertical-wizard-pane-summary .pull-right'
    },

  }
  };
