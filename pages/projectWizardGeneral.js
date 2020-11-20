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
    this.waitForElementVisible('@nextButton', 10000)
    return this.click('@nextButton')
  },
  enterLocation: function () {
    this.waitForElementVisible('@location',10000)
    return this.setValue('@location','New York')
  },
  enterDateAndTime: function () {
    var date = new Date()
    this.waitForElementVisible('@dateAndTime',10000)
    return this.setValue('@dateAndTime',date)
  },
  enterPrice: function () {
    this.waitForElementVisible('@eventPrice',10000)
    this.click('@eventPrice')
    return this.setValue('@eventPrice','20.00')
  },
  enterMonthlyMembershipPrice: function(){
    this.waitForElementVisible('@monthlyMembershipPrice',10000)
    return this.setValue('@monthlyMembershipPrice','50')
  },
  enterQuarterlyMembershipPrice: function(){
    this.waitForElementVisible('@quarterlyMenmbershipPrice',10000)
    return this.setValue('@quarterlyMenmbershipPrice','100')
  },
  enterYearlyMembershipPrice: function(){
    this.waitForElementVisible('@yearlyMembershipPrice',10000)
    return this.setValue('@yearlyMembershipPrice','400')
  },

  fillFormAndSubmit: function () {
    this.enterProjectName()
    this.enterDescription()
    this.click('#project-min-payment-amount')
    this.clickNext()
  },
  fillFormAndSubmit2: function () {
    this.enterProjectName()
    this.enterDescription()
    this.click('.col-sm-6 .btn')
    this.click('#project-thank-you')
    this.clickNext()
  },
  fillFormAndSubmitForEvents: function () {
    this.enterProjectName()
    this.enterDescription()
    this.enterLocation()
    this.enterDateAndTime()
    this.click('.col-sm-6 .btn')
    this.click('#project-thank-you')
    this.clickNext()
  },
  fillFormAndSubmitForEventsWithPayment: function () {
    this.enterProjectName()
    this.enterDescription()
    this.enterLocation()
    this.enterDateAndTime()
    this.enterPrice()
    this.click('.col-sm-6 .btn')
    this.click('#project-thank-you')
    this.clickNext()
  },
  fillFormAndSubmitForMembershipProject: function () {
    this.enterProjectName()
    this.enterDescription()
    this.enterMonthlyMembershipPrice()
    this.enterQuarterlyMembershipPrice()
    this.enterYearlyMembershipPrice()
    this.click('.col-sm-6 .btn')
    this.click('#project-thank-you')
    this.clickNext()
  },
  fillFormAndSubmitForVoucherProject: function () {
    this.enterProjectName()
    this.enterDescription()
    this.enterPrice()
    this.click('.col-sm-6 .btn')
    this.click('#project-thank-you')
    this.clickNext()
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
    },
    bodyClick:{
    	selector: '#project-min-payment-amount'
    },
    location:{
      selector: '#project-location'
    },
    dateAndTime:{
      selector: '.col-sm-8 #project-name'
    },
    eventPrice:{
      selector: '#project-payment-amount'
    },
    monthlyMembershipPrice: {
      selector: '#project-monthly-membership-price'
    },
    quarterlyMenmbershipPrice:{
      selector: '#project-quarterly-membership-price'
    },
    yearlyMembershipPrice: {
      selector: '#project-yearly-membership-price'
    }

   }
};
