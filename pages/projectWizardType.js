
var projectWizardType = {
	clickOnAddNewProject: function(){
		this.waitForElementVisible('@addNewProject',10000)
		return this.click('@addNewProject')
	},

 selectProjectType: function(){
 	this.waitForElementVisible('@typeDonationCollection', 10000)
    return this.click('@typeDonationCollection')
 },
 clickOnNextCta: function(){
  this.waitForElementVisible('@clickOnNextButton', 10000, 'Project step 2 Form Displayed')
  return this.click('@clickOnNextButton')
 }

};
module.exports = {
  commands: [projectWizardType],
  url: function () {
    return this.api.launchUrl + 'user/projects'
  },

  elements: {
  	addNewProject:{
  		selector: 'div.projects-container__filters-container > a'
  	},

  	typeDonationCollection: {
  		selector: 'div.project-wizard__types  > div:nth-child(3)'
  	},

    clickOnNextButton: {
      selector: '#vertical-wizard-pane-type button:nth-child(2)'
    }

  }
};
 