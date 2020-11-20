
var projectWizardType = {
	clickOnAddNewProject: function(){
		this.waitForElementVisible('@addNewProject',10000)
		return this.click('@addNewProject')
	},

 selectProjectTypeDonationCollection: function(){
 	this.waitForElementVisible('@typeDonationCollection', 10000)
    return this.click('@typeDonationCollection')
 },
 clickOnNextCta: function(){
  this.waitForElementVisible('@clickOnNextButton', 10000)
  return this.click('@clickOnNextButton')
 },
 selectProjectTypeAttendanceList: function(){
  this.waitForElementVisible('@typeAttendanceList',10000)
  return this.click('@typeAttendanceList')
 },
 selectProjectTypeSimpleAgreementProject: function(){
  this.waitForElementVisible('@typeSimpleAgreementProject',10000)
  return this.click('@typeSimpleAgreementProject')
 },
 selectProjectTypeDonationWithSpreedsheet: function(){
  this.waitForElementVisible('@typeDonationWithSpreedsheet',10000)
  return this.click('@typeDonationWithSpreedsheet')
 },
 selectProjectTypeEvents: function(){
  this.waitForElementVisible('@typeEvents',10000)
  return this.click('@typeEvents')
 },
 selectProjectTypeEventsWithPayment: function(){
  this.waitForElementVisible('@typeEventsWithPayment',10000)
  return this.click('@typeEventsWithPayment')
 },
 selectProjectTypePaymentRequest: function(){
  this.waitForElementVisible('@typePaymentRequest',10000)
  return this.click('@typePaymentRequest')
 },
 selectProjectTypeMailchimpProject: function(){
  this.waitForElementVisible('@typeMailchimpProject',10000)
  return this.click('@typeMailchimpProject')
 },
 selectProjectTypeMembershipProject: function(){
  this.waitForElementVisible('@typeMembershipProject',10000)
  return this.click('@typeMembershipProject')
 },
 selectProjectTypeVoucherProject: function(){
  this.waitForElementVisible('@typeVoucherProject',10000)
  return this.click('@typeVoucherProject')
 },
 checkProjectStatus: function(){
  this.waitForElementVisible('@testStatus',10000)
  return this.verify.containsText("@testStatus", 'New')
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
  		selector: 'div.project-wizard__types  > div:nth-child(4)'
  	},

    clickOnNextButton: {
      selector: '#vertical-wizard-pane-type button:nth-child(2)'
    },
    typeAttendanceList: {
      selector: 'div.project-wizard__types  > div:nth-child(1)'
    },
    typeSimpleAgreementProject: {
      selector: 'div.project-wizard__types  > div:nth-child(2)'
    },
    typeDonationWithSpreedsheet: {
      selector: 'div.project-wizard__types  > div:nth-child(6)'
    },
    typeEvents: {
      selector: 'div.project-wizard__types  > div:nth-child(7)'
    },
    typeEventsWithPayment: {
      selector: 'div.project-wizard__types  > div:nth-child(8)'
    },
    typePaymentRequest: {
      selector: 'div.project-wizard__types  > div:nth-child(9)'
    },
    typeMailchimpProject: {
      selector: 'div.project-wizard__types  > div:nth-child(10)'
    },
    typeMembershipProject: {
      selector: 'div.project-wizard__types  > div:nth-child(11)'
    },
    typeVoucherProject: {
      selector: 'div.project-wizard__types  > div:nth-child(12)'
    },
    testStatus: {
      selector: '.ReactVirtualized__Table__row:nth-child(1) .ReactVirtualized__Table__rowColumn:nth-child(4)'
    }

  }
};
 
