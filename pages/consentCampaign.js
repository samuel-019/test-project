var consentCampaignCommands = {

  // select the campaign tab
  clickCampaignsTab: function () {
    this.waitForElementVisible('@campaignsTab', 20000, "Campign Tab is displayed")
    return this.click('@campaignsTab')
  },

  // click create campaign button
  clickCreateCampaignButton: function () {
    this.waitForElementVisible('@createCampaignButton', 7000, 'Create Campiagn button displayed')
    return this.click('@createCampaignButton')
  },

  // click advance campaign link
  clickAdvanceCampaignLink: function () {
    this.waitForElementVisible('@advanceCampaignLink', 5000, 'Advance Campaign link Displayed')
    return this.click('@advanceCampaignLink')
  },

  // verify campaign name in the first activity card
  verifyCampaignName: function (campaignName) {
    this.waitForElementVisible('@firstCampaignName', 10000)
    this.getText('@firstCampaignName', function (result) {
      this.verify.equal(result.value, campaignName)
    })
  },

  // function to check if user is a new user and navigate to create campaign
  verifyIfNewUser: function() {
    this.pause(5000)
    this.api.element('css selector','#create-campaign-button',function(result) {
      if (result.value && result.value.ELEMENT) {
        
        this.globals.testdata.campaign.newUser = false
      } else {
        this.globals.testdata.campaign.newUser = true
      }
    })
    return this
  },

  clickGoToSecuritySettingButton: function() {
    this.waitForElementVisible('@goToSecuritySettingButton', 2000, 'Go to Security Setting button is displayed')
    this.click('@goToSecuritySettingButton')
  },

  clickOnCreateAdvanceCampaign: function() {
    this.waitForElementVisible('@createAdvanceCampaignButton')
    this.click('@createAdvanceCampaignButton')
  } 
}

module.exports = {
  commands: [consentCampaignCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/consentAdministration/consent'
  },

  elements: {
    consentTab: {
      selector: '#consent-center-tab-consent'
    },

    campaignsTab: {
      selector: '#consent-center-tab-campaigns'
    },

    requestsTab: {
      selector: '#consent-center-tab-requests'
    },

    optionsTab: {
      selector: '#consent-center-tab-options'
    },

    createCampaignButton: {
      selector: '#create-campaign-button'
    },

    advanceCampaignLink: {
      selector: '#consent-center-pane-campaigns div.right li:nth-child(2) a'
    },

    campaignListTable: {
      selector: '#consent-center-pane-campaigns'
    },

    firstCampaignName: {
      selector: '.ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1) > div:nth-child(2) span'
    },

    goToSecuritySettingButton: {
      selector: '#consent-center-pane-campaigns .btn.btn-primary'
    },

    //selector for create campaign button
    createAdvanceCampaignButton: {
      selector: '#consent-center-pane-campaigns>div> button:nth-child(3)'
    }
  }
}
