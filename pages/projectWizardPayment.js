var projectWizardPayment = {
	
 clickOnNextCtaPayment: function() {
  this.waitForElementVisible('@clickOnNextButtonPayment', 10000, 'Project step 4 Form Displayed')
  return this.click('@clickOnNextButtonPayment')
 },

};

module.exports = {
  commands: [projectWizardPayment],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/payment'
  },

  elements:{
  	clickOnNextButtonPayment:{
      selector: '#vertical-wizard-pane-payment button:nth-child(2)'
    }
  }
};