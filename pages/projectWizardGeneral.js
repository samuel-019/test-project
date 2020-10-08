var projectWizardGeneral = {
	enterProjectName:  function () {
    // date to set in project name
    var date = new Date()
    var projectName = 'Test Project ' + date;
    this.waitForElementVisible('@projectNameField', 10000)
    this.setValue('@projectNameField',projectName)
    return projectName
  },

  enterDescription: function () {
    this.waitForElementVisible('@projectDescriptionField',10000)
    return this.setValue('@projectDescriptionField','Sample Project Please Ignore it')
  },

  clickNext: function () {
    this.waitForElementVisible('@nextButton', 10000,'project step 3 Form Displayed')
    return this.click('@nextButton')
  },

};

module.exports = {
  commands: [projectWizardGeneral],
  
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/description'
  },

  elements:{
  	projectNameField:{
  		selector: '#project-name'
  	},
  	projectDescriptionField:{
  		selector: '#project-description'
  	},
  	projectMinAmmountField:{
  		selector: '#project-min-payment-amount'
  	},
  	nextButton: {
      selector: '#vertical-wizard-pane-description  .pull-right'
    }

   }
};