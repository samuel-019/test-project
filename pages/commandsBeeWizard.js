
var beeWizard = {

  pageURL: function () {
    return this.verify.urlContains('/user/beeWizard')
  },

  verifyCopyDeck: function (beenames) {
    this.pageURL()
    this.waitForElementVisible('@beeWizardTitle', 20000)
    this.waitForElementVisible('@beeList', 60000)
    this.verify.containsText('@beeWizardTitle', 'Choose your bee')
    this.verify.containsText('@sideBarTitle', 'Selected Bees & Flight-path')
    this.verify.containsText('@beeWizardTitleDescription', "Bees can do many tasks safely. Please click on a bee icon to select it.")
    return this.verifyBeeList(beenames)
  },

  verifySearch: function () {
    this.waitForElementVisible('@beeList', 60000)
    this.waitForElementVisible('@beeWizardSearch', 1000)
    this.verify.visible('@WizardSearchPlaceholder', 'Search Placeholder is visible')
    this.setValue('@beeWizardSearch', 'Send File')
    this.waitForElementVisible('@firstBee', 20000)
    this.verify.containsText('@firstBee', 'Send File')
    this.clearSearch()
    return this.verifyNoResultSearch()
  },

  verifyNoResultSearch: function () {
    this.waitForElementVisible('@beeList', 60000)
    this.setValue('@beeWizardSearch', 'No result search')
    this.waitForElementVisible('@noResultText', 20000)
    this.verify.containsText('@noResultText', 'Sorry, we seem to have no bees matching your search criteria')
    return this.clearSearch()
  },

  clearSearch: function () {
    return this.waitForElementVisible('@clearSearchKeyword', 1000, function () {
      this.click('img.search-bees-cancel')
      this.verify.containsText('input.search-box', '')
      this.verify.visible('.bee-list-tour > div')
    })
  },

  verifySelected: function () {
    this.waitForElementVisible('@beeList', 60000)
    this.click('@firstBee')
    this.waitForElementVisible('@NextButtonEnabled', 20000)
    return this.verify.visible('@selectedBee')
  },

  sendMesssageSelected: function () {
    this.waitForElementVisible('@beeList', 60000)
    this.click('@messageBee')
    this.api.pause(4000)
    return this
  },

  clickNextbutton: function () {
    this.waitForElementVisible('@NextButtonEnabled', 20000)
    this.click('@NextButtonEnabled')
    this.waitForElementPresent('.loadedContent', 20000)
    return this.verify.visible('body')
  },

  editfilename: function () {
    const inputValue = Math.random().toString(36).substring(3)
    this.waitForElementVisible('.bee-wizard-sidebar__file >span', 20000)
    this.click('.bee-wizard-sidebar__file >span')
    this.waitForElementVisible('.modal-body input')
    this.clearValue('.modal-body input')
    this.setValue('.modal-body input', inputValue)
    this.waitForElementVisible('.modal-footer button.btn-primary', 60000)
    this.click('.modal-footer button.btn-primary')
    this.click('.modal-footer button.btn-primary')
    this.waitForElementNotPresent('.modal-footer', 6000)
    return this.verify.containsText('.bee-wizard-sidebar__file-label', inputValue)
  },

  verifyUploadCopyDeck: function () {
    this.waitForElementNotPresent('@loader', 5000)
    this.waitForElementVisible('@beeWizardTitle', 20000)
    this.verify.containsText('@beeWizardTitle', 'Upload Your File')
    this.getText('css selector', '.bee-wizard-sidebar__balance-amount > span  > span', function (result) {
      console.log('getText result', result.value)
    })
    return this.verify.containsText('@sideBarTitle', 'Points Used')
  },

  uploadFile: function () {
    const path = require('path')
    var randomFileName = Math.floor((Math.random() * 4) + 1)
    const imagePath = path.join(__dirname, 'testdata', randomFileName + '.jpg')
    this.waitForElementPresent('@uploadField', 2000)
    this.setValue('@uploadField', imagePath)
    return this.waitForElementVisible('@preview', 20000)
  },

  selectSender: function () {
    this.waitForElementPresent('@recipientInput', 1000)
      .setValue('@recipientInput', '~tester')
    //this.verify.visible('@recipientList')
    this.waitForElementVisible('@chooseRecepientWithXid', 20000)
   // this.verify.visible('@choseRecipient')
    this.click('@chooseRecepientWithXid')
    return this.waitForElementVisible('@selectedRecipient', 20000)
  },

  selectSenderViaEmail: function () {
    this.waitForElementPresent('@recipientInput', 1000)
      .setValue('@recipientInput', 'babaraja1@yahoo.com')
   //this.verify.visible('@recipientList')
    this.waitForElementVisible('@choseRecipientWithEmail', 20000)
    //this.verify.visible('@choseRecipient')
    this.click('@choseRecipientWithEmail')
    return this.waitForElementVisible('@selectedRecipient', 20000)
  },


  enterMessage: function () {
    const time = new Date()
    this.waitForElementVisible('@messageTextarea', 20000)
    return this.setValue('@messageTextarea', time + '\n Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, ')
  },

  displayMesssageBox: function () {
    this.waitForElementVisible('@showMessageTextarea', 20000)
    this.click('@showMessageTextarea')
    return this.enterMessage()
  },

  beeSuccessState2: function () {
    return this.waitForElementPresent('.bee-wizard__step-container--success', 20000)
  },

  beeSuccess: function () {
    return this.waitForElementVisible('@successMessage', 40000, 'Bee Action Successful')
  },

  verifyBeeList: function (beeNames) {
    let beeCount = 1
		for (const bee of beeNames) { 	// eslint-disable-line
      this.getText('.bee-list-tour > div:nth-child(' + beeCount + ') h4', function (result) {
        return this.verify.equal(beeNames.includes(result.value), true, result.value + ' is present')
      })
      beeCount += 1
    }
    return this
  },

  selectSendFileBee: function () {
    this.waitForElementVisible('@sendFileBee', 20000)
    return this.click('@sendFileBee')
  }

}

module.exports = {
  commands: [beeWizard],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/beeWizard'
  },

  elements: {
    beeWizardTitle: {
      selector: '.bee-wizard__title'
    },

    beeList: {
      selector: '.bee-list-tour > div'
    },

    beeWizardTitleDescription: {
      selector: 'div.bee-wizard__step-container h4 span'
    },

    NextButtonDisabled: {
      selector: '.btn-primary:disabled'
    },

    NextButtonEnabled: {
      selector: '.btn-primary:enabled'
    },

    beeWizardSearch: {
      selector: 'input.search-box'
    },

    clearSearchKeyword: {
      selector: 'img.search-bees-cancel'
    },

    WizardSearchPlaceholder: {
      selector: 'input[placeholder="Search bees"]'
    },

    noResultText: {
      selector: '.bee-wizard__step-container > span'
    },

    firstBee: {
      selector: '.bee-list-tour > div:nth-child(1)'
    },

    messageBee: {
      selector: '.bee-list-tour > div:nth-child(7)'
    },

    selectedBee: {
      selector: '.chosen-bee'
    },

    uploadArea: {
      selector: '.file-upload'
    },

    uploadField: {
      selector: 'input[type=file]'
    },

    preview: {
      selector: '.file-preview'
    },

    beeWizardCategoryDropdown: {
      selector: 'button#dropdown-basic-0'
    },

    beeWizardExtensionDropdown: {
      selector: 'button#extension-types-select'
    },

    beeWizardNextButton: {
      selector: 'button.btn.btn-lg.btn-primary.btn-block'
    },

    sideBarTitle: {
      selector: '.sidebar h3'
    },

    recipientInput: {
      selector: 'input[id$=\'input\']'
    },

    choseRecipientWithEmail: {
      selector: '.Select-create-option-custom span'                                                 //'.Select-create-option-custom span'     //'.recipient-option'
    },

    chooseRecepientWithXid: {
    	selector: '#react-select-2-option-0 div:nth-child(1) .recipient-name'
    },

    recipientList: {
      selector: '[id*=\'option-0\']'                            //'[id*=\'option-0\']'
    },

    selectedRecipient: {
      selector: 'div[class$=\'alue\']'
    },

    showMessageTextarea: {
      selector: '.form-group__collapse-icon'
    },

    messageTextarea: {
      selector: '.limited-textarea'
    },

    successMessage: {
      selector: '.loadedContent h4'
    },

    sendFileBee: {
      selector: '.bee-list-tour > div:nth-child(12) .bee-image-tour'
    },

    loader: {
      selector: '.spinner'
    }
  }
}
