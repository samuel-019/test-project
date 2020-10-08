var inbound = {

  currentPageURL: function () {
    return this.verify.urlContains('/user/landingPad/inbound')
  },

  verifyLandingPadManagerDeck: function () {
    this.currentPageURL()
    this.waitForElementVisible('@landingPadManagerTitle', 20000)
    this.verify.containsText('@landingPadManagerTitle', 'Landing Pad Manager')
    
  },

  verifyInboundDeck: function(){
    this.waitForElementVisible('body', 20000)
    this.waitForElementVisible('.spinner', 20000)
    this.waitForElementVisible('@inboundTitle', 5000)
    this.verify.containsText('@inboundTitle', 'Inbound')
    this.waitForElementVisible('@allowInboundText', 10000)
    this.verify.containsText('@allowInboundText', 'Allowed Inbound')
    this.verify.containsText('@nocurrentText','No current restrictions.')
    this.verify.containsText('@addSenderText','Adding senders from list below will limit who can send items to your inbox.')
    this.verify.containsText('@addSenderTitle','Add Senders')
    this.waitForElementVisible('div.users-input .xb-select__control', 2000)
    this.verify.containsText('@specialGroupTableHeader', 'Special Groups')
    this.verify.containsText('@allXcoobeeUserRow','All XcooBee Users')
    this.verify.containsText('@groupsRow','Groups')
    this.verify.containsText('@xcoobeeLevelsRow','XcooBee Levels')
    this.verify.containsText('@inboundKeyText','Inbound Key')
    this.verify.containsText('@blockText', 'People with this key can send you messages even if they are not on the allowed list.')
    this.verify.containsText('@resetButton','Reset')
    return this.verify.containsText('@disableButton','Disable')

  },

  verifyAddUserToAddSenderBlock : function(){

    this.waitForElementVisible('@allowInboundText', 20000)
    return this.click('@allXcoobeeUserRow', function () {
      this.waitForElementVisible('.spinner', 20000)
      this.waitForElementVisible('div.Toastify__toast-container', 20000)
      this.verify.containsText('h3.notification-title', 'Success')
      this.verify.containsText('p.notification-message span', 'Files sender was added')
    })
  },

  verifyAddSenderBlock : function(){
    this.waitForElementVisible('@searchInputField', 5000)
    this.verify.containsText('@accountAddedTableHeader', 'Accounts that can send you files')
    this.verify.containsText('@accountAddedTableContent', 'All XcooBee Users')
    this.waitForElementVisible('@cancelIcon', 1000)
    
  },

  removeUserFromAddSenderBlock : function() {
    this.waitForElementVisible('@cancelIcon', 1000)
    this.api.pause(5000)
    this.click('@cancelIcon', function () {
      this.waitForElementVisible('div.Toastify__toast-body div.success', 10000)
      this.verify.containsText('h3.notification-title', 'Success')
      this.verify.containsText('p.notification-message span', 'Files sender was removed')
    })
  },

  verifyAddingXcoobeeId : function(){
    this.waitForElementVisible('body', 20000)
    this.waitForElementVisible('.spinner', 20000)
    this.waitForElementVisible('@inboundTitle', 5000)
    this.waitForElementVisible('div.users-input', 1000)
    this.click('div.xb-select__control')
      this.setValue('div.col-xs-12 input[id$=\'input\']','~test_raja')
      this.waitForElementVisible('#react-select-3-option-0 .xcoobee-id', 20000)
      this.click('#react-select-3-option-0 .xcoobee-id')
      //this.waitForElementNotVisible('.spinner', 20000)
      this.waitForElementVisible('div.Toastify__toast-container', 20000)
      this.verify.containsText('h3.notification-title', 'Success')
      this.verify.containsText('p.notification-message span', 'Files sender was added') 
  }

 /* verifySpecialGroup : function(){
    this.waitForElementVisible('@specialGroupTableHeader', 1000)
    this.click('@groupsRow')
      this.waitForElementVisible('div.ReactVirtualized__Table__headerRow span.text', 'Select Group')
      this.waitForElementVisible('div.ReactVirtualized__Table__row:nth-child(1) div.pointer span', 'All Groups')
      this.click('span.glyphicon.glyphicon-arrow-left')
        this.waitForElementVisible('@specialGroupTableHeader', 1000)
        this.click('@xcoobeeLevelsRow')
        this.waitForElementVisible('div.ReactVirtualized__Table__headerRow span.text','Select Level')
        this.waitForElementVisible('div.ReactVirtualized__Table__row:nth-child(1) div.pointer span', 'Free')
        this.waitForElementVisible('div.ReactVirtualized__Table__row:nth-child(2) div.pointer span','Professional')
        this.waitForElementVisible('div.ReactVirtualized__Table__row:nth-child(3) div.pointer span','Business')
      //  this.waitForElementVisible('div.ReactVirtualized__Table__row:nth-child(4) div.pointer span','Enterprise')
        this.api.pause(2000)
        this.waitForElementVisible('span.glyphicon.glyphicon-arrow-left')
        this.click('span.glyphicon.glyphicon-arrow-left')
        this.waitForElementVisible('@specialGroupTableHeader', 1000)
    }*/


}



module.exports = {
  commands: [inbound],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/landingPad/inbound'
  },

  elements: {
    landingPadManagerTitle: {
      selector: 'div#root h2'
    },

    inboundTitle : {
      selector: '#landing-pad-tab-inbound h4 span'
    },

    allowInboundText : {
      selector: 'div.loadedContent h4 span'
    },

    nocurrentText : {
      selector: 'div.text-gray h3:nth-child(1) > span'
    },

    addSenderText : {
      selector : 'div.text-gray h3:nth-child(2) > span'
    },

    addSenderTitle : {
      selector: 'div.col-xs-12 h4>span'
    },

    specialGroupTableHeader :{
      selector: 'div.ReactVirtualized__Table__headerRow span.text span'
    },

    allXcoobeeUserRow: {
      selector: 'div.ReactVirtualized__Table__row:nth-child(1) div.pointer span'
    },

    groupsRow: {
      selector: 'div.ReactVirtualized__Table__row:nth-child(2) div.pointer span'
    },

    xcoobeeLevelsRow: {
      selector: 'div.ReactVirtualized__Table__row:nth-child(3) div.pointer span'
    },

    inboundKeyText : {
      selector : 'div.col-xs-12.col-sm-6 h4 span'
    },

    blockText : {
      selector: 'div.well.center-block span'
    },

    resetButton : {
      selector : 'button[type="button"]:nth-child(4) > span'
    },

    disableButton : {
      selector : 'button[type="button"]:nth-child(5) > span'
    },

    searchInputField : {
      selector : 'div.col-xs-12 input.form-control.search-box'
    },

    accountAddedTableHeader : {
      selector : 'div.ReactVirtualized__Table__headerRow span.text span'
    },

    accountAddedTableContent : {
      selector : 'div.ReactVirtualized__Grid div > span:nth-child(1)'
    },

    cancelIcon : {
      selector : 'div.ReactVirtualized__Grid div > span:nth-child(2)'
    },

    addXcoobeeId : {
      selector : 'div.xb-select__value-container'
    }



  }
}
