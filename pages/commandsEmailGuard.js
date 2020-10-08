
var emailGuard = {

  currentPageURL: function () {
    return this.verify.urlContains('/user/emailGuard')
  },

  verifyCopyDeck: function () {
    this.currentPageURL()
    this.waitForElementVisible('body', 20000)
    this.waitForElementPresent('.loadedContent', 20000)
    this.verify.visible('@emailGuardTitle')
    this.pageBody()
    return this.verify.containsText('@emailGuardTitle', 'Email Guard')
  },

  verifySearch: function () {
    this.waitForElementVisible('@beeList', 20000)
    this.waitForElementVisible('@beeWizardSearch', 1000)
    this.verify.visible('@WizardSearchPlaceholder', 'Search Placeholder is visible')
    this.setValue('@beeWizardSearch', 'Send File')
    this.waitForElementVisible('@firstBee', 20000)
    this.verify.containsText('@firstBee', 'Send File')
    this.clearSearch()
    return this.verifyNoResultSearch()
  },

  noDataState: function () {
    return this.verify.containsText('@emptyStateMessage', 'You have no guard-emails. Please add one to activate the service.')
  },

  pageBody: function () {
    return this.api.element('css selector', '.text-center h3', function (result) {
      if (result.status !== -1) {
        this.verify.containsText('.text-center h3', 'You have no guard-emails. Please add one to activate the service.')
      } else {
        this.waitForElementVisible('.ReactVirtualized__Table', 30000)
      }
    })
  },

  quickAddEmail: function () {
    this.waitForElementVisible('.spinner', 20000)
    this.waitForElementVisible('.ReactVirtualized__Table__row:last-child', 30000)
    this.waitForElementVisible('@quickAdd', 20000)
    return this.click('@quickAdd', function () {
      this.waitForElementVisible('.spinner', 20000)
      this.waitForElementVisible('.notification-success.notification-visible', 20000)
      this.verify.containsText('h4.notification-title', 'Success')
      this.waitForElementVisible('.ReactVirtualized__Table__row:last-child', 20000)
    })
  },

  addEmail: function () {
    this.waitForElementVisible('@add', 20000)
    return this.click('@add', function () {
      this.waitForElementVisible('.modal-content', 20000)
      this.verify.containsText('.modal-title', 'Create Email Address')
      this.click('.email-guard-button-container>button')
      this.waitForElementVisible('.modal-footer button.btn-primary', 20000)
      this.click('.modal-footer button.btn-primary')
      this.waitForElementVisible('.notification-message', 20000)
    })
  },

  deleteEmailGuard: function () {
    this.waitForElementVisible('.ReactVirtualized__Table__row:first-child ', 20000)
    return this.click('.ReactVirtualized__Table__row:nth-child(10) .email-guard-actions div:nth-child(2)', function () {
      this.waitForElementVisible('.modal-content', 20000)
      this.verify.containsText('.modal-title', 'Delete Email')

      this.waitForElementVisible('.modal-footer button.btn-primary', 20000)
      this.click('.modal-footer button.btn-primary')
      this.waitForElementVisible('.notification-message', 20000)
    })
  },

  updateEmailGuard: function () {
    const inputValue = Math.random().toString(36).substring(3)
    this.waitForElementVisible('.ReactVirtualized__Table__row:first-child ', 20000)
    return this.click('.ReactVirtualized__Table__row:first-child .email-guard-actions div:first-child ', function () {
      this.waitForElementVisible('.modal-content', 20000)
      this.verify.containsText('.modal-title', 'Edit Email Address')
      this.clearValue('.modal-body input')
      this.setValue('.modal-body input', inputValue + '~Tester')
      this.waitForElementVisible('.modal-footer button.btn-primary', 20000)
      this.click('.modal-footer button.btn-primary')
      this.waitForElementVisible('.notification-message', 20000)
    })
  },

  searchEmail: function () {
    const text = 'beepost.net'
    this.waitForElementVisible('@search', 20000)
    this.setValue('@search', 'beepost.net')
    this.waitForElementVisible('.ReactVirtualized__Table__row:last-child', 20000)
    this.verify.containsText('.ReactVirtualized__Table__row:last-child div[aria-colindex="3"]', text)
  }

}

module.exports = {
  commands: [emailGuard],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/emailGuard'
  },

  elements: {
    emailGuardTitle: {
      selector: '.navbar-email-guard-title h3'
    },

    emailGuardLogo: {
      selector: '.navbar-email-guard-header img'
    },

    emailGuardRefresh: {
      selector: '.navbar-email-guard-refresh'
    },

    emailGuardClose: {
      selector: '.navbar-close-container'
    },

    quickAdd: {
      selector: '.flex-end button:nth-child(1)'
    },

    add: {
      selector: '.flex-end button:nth-child(2)'
    },

    emptyStateMessage: {
      selector: '.text-center h3'
    },

    search: {
      selector: 'input[placeholder="Search"]'
    },

    noResultText: {
      selector: '.bee-wizard__step-container > span'
    },

    firstBee: {
      selector: '.bee-list-tour > div:nth-child(1)'
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

    beeWizardSearch: {
      selector: 'input.search-box'

    },

    recipientInput: {
      selector: '.Select-input >input'

    },

    choseRecipient: {
      selector: '.recipient-option'

    },

    recipientList: {
      selector: '.Select-menu'

    },

    selectedRecipient: {
      selector: '.identicon'

    },

    showMessageTextarea: {
      selector: '.form-group__collapse-icon'

    },

    messageTextarea: {
      selector: '.limited-textarea'

    }

  }
}
