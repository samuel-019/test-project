var projectWizardConnectivity = {
	
 clickOnNextCtaConnectivity: function(){
  this.waitForElementVisible('@clickOnNextButtonConnectivity', 10000)
  return this.click('@clickOnNextButtonConnectivity')
 },
 enterUniqueId:  function () {
    // date to set in project name
    var date = new Date()
    var MailchimpId = 'TestId ' + date;
    this.waitForElementVisible('@UniqueAudienceIdField', 10000)
    this.setValue('@UniqueAudienceIdField',MailchimpId)
    return MailchimpId
  },

};

module.exports = {
  commands: [projectWizardConnectivity],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/project/connectivity'
  },

  elements:{
  	clickOnNextButtonConnectivity: {
      selector: '#vertical-wizard-pane-connectivity button:nth-child(2)'
    },
    UniqueAudienceIdField: {
      selector: '#stripe-tokenizer-key'
    },

  }
  };
