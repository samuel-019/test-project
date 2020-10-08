
var headerCommands = {

  checkHeaderElements: function () {
    return this.waitForElementVisible('@pointBalance', 60000, 'Page has been loaded')
      .verify.visible('@headerLogo', 'Website logo is visible')
      .verify.visible('@pointBalance', 'Balance point is visible')
      .verify.visible('@takeTour', 'Take a tour is visible')
      .verify.visible('@myAccount', 'My Account is visible')
      .verify.visible('@viewInbox', 'Inbox is visible')
      .verify.visible('@inviteOthers', 'Invite is visible')
      .verify.visible('@searchBar', 'Search Bar is visible')
      .verify.visible('@upgrade', 'upgrade button is visible')
      .verify.visible('@communicationCenter', 'Communication center is visible')
      .verify.visible('@managesettings', 'Manage settings is visible')
  },

  balanceElementHeader: function () {
    this.waitForElementVisible('@pointBalanceCount', 60000, 'Point balance')
    this.assert.urlContains('/user')
  },

  checkupgradedHeaderElements: function () {
    return this.waitForElementVisible('@pointBalance', 60000, 'Page has been loaded')
      .verify.visible('@pointBalance', 'Balance point is visible')
      .verify.visible('@takeTour', 'Take a tour is visible')
      .verify.visible('@myAccount', 'My Account is visible')
      .verify.visible('@viewInbox', 'Inbox is visible')
      .verify.visible('@searchBar', 'Search Bar is visible')
      .verify.visible('@communicationCenter', 'Communication center is visible')
  },

  webHeader: function () {
    this.waitForElementVisible('@headerLogo', 50000, 'Logo is visible on the page')
  },

  upgradeButtonNotVisible: function () {
    this.waitForElementNotPresent('@upgrade', 1000, 'upgrade button is not visible')
  },

  checkHeaderSubElements: function () {
    return this.waitForElementVisible('@settingsDropdown', 60000)
    // .click("@settingsDropdown")
    // .verify.visible("@userProfile")
  },

  clickOnMyAccount: function () {
    this.waitForElementVisible('@myAccount', 60000)
      .click('@myAccount')
  },

  goToProfile: function () {
    return this.waitForElementVisible('@userProfile', 10000)
      .click('@userProfile')
  },

  clickOnInviteOthers: function () {
    this.waitForElementVisible('@inviteOthers', 60000)
    this.click('@inviteOthers')
    return this.waitForElementVisible('@inviteModal', 60000)
  },

  clickOnPointBalance: function () {
    this.waitForElementVisible('@inviteOthers', 60000)
    this.click('@inviteOthers')
    return this.waitForElementVisible('@inviteModal', 60000)
  },

  clickOnTakeTour: function () {
    this.waitForElementVisible('@takeTour', 9000)
    return this.click('@takeTour')
  },

  searchAutoSuggestion: function (searchError) {
    this.api.pause(5000)
    this.waitForElementVisible('@searchAutoSuggest', 4000)
    return this.verify.containsText('@searchAutoSuggest', searchError)
  },
  enterSearchKeyword: function (searchKey) {
    this.waitForElementVisible('@searchBar', 600000)
      .clearValue('@searchInput')
    return this.setValue('@searchInput', searchKey)
  },
  UserXcoobeeId: function (xbId) {
    this.waitForElementVisible('body', 600000)
    this.waitForElementVisible('@myAccount', 600000)
      .getText('@myAccount', function (result) {
        return this.verify.equal(result.value, xbId)
      })
  },

  beeRowLoading: function () {
    return this.waitForElementVisible('body', 60000)
  },

  upgradeButton: function () {
    return this.waitForElementVisible('@upgrade', 60000)
  },

  Tooltip: function () {
    this.waitForElementVisible('@pointBalanceCount', 3000)
    this.moveToElement('body', 0, 0)
    this.headerLogoTooltip()
    this.upgradeTooltip()
    this.balanceTooltip()
    this.takeTourTooltip()
    this.viewInboxTooltip()
    this.manageSettingsTooltip()
    this.communicationCenterTooltip()
    this.inviteOthersTooltip()
    this.myAccountTooltip()
  },

  upgradeTooltip: function () {
    this.moveToElement('@upgrade', 1, 1, function () {
      this.waitForElementPresent('a.button-upgrade[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'For expanded payment, fundraising, consent controls, document sending, and privacy features explore our upgrades. No charge for your first 14-days on all subscriptions.')
    })
  },

  balanceTooltip: function () {
    this.moveToElement('@pointBalance', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Check on your current balance')
    })
  },

  takeTourTooltip: function () {
    this.moveToElement('@takeTour', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Take a tour')
    })
  },

  myAccountTooltip: function () {
    this.moveToElement('@myAccount', 0, 0, function () {
      this.waitForElementPresent('ul.nav>li:last-child span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Open menu for more options & logout.')
    })
  },

  viewInboxTooltip: function () {
    this.moveToElement('@viewInbox', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'View your Inbox.')
    })
  },

  inviteOthersTooltip: function () {
    this.moveToElement('@inviteOthers', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Invite others to XcooBee, get a bonus and manage Fundraiser Panel')
    })
  },

  communicationCenterTooltip: function () {
    this.moveToElement('@communicationCenter', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Communication Center')
    })
  },

  manageSettingsTooltip: function () {
    this.moveToElement('@managesettings', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Manage your settings')
    })
  },

  headerLogoTooltip: function () {
    this.moveToElement('a.home div', 0, 0, function () {
      this.waitForElementPresent('a.home div img[aria-describedby]', 60000, 'Tooltip has appeared')
      return this.verify.attributeContains('a.home div img', 'aria-describedby', 'Return home')
    })
  },

  advanceSettingTooltip: function () {
    this.moveToElement('ul.nav >li:nth-child(4) a img', 0, 0, function () {
      this.waitForElementPresent('a[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Manage your settings')
    })
  }
}

module.exports = {

  commands: [headerCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {

    headerLogo: {
      selector: 'div.navbar-header'
    },
    headerLogoImage: {
      selector: 'div.navbar-header img'
    },
    searchBar: {
      selector: 'div.global-search'
    },
    searchInput: {
      selector: 'input#react-select-2-input'
    },
    searchAutoSuggest: {
      selector: 'div.global-search__menu-list'
    },
    pointBalance: {
      selector: 'ul.nav > li:nth-child(1)'
    },
    pointBalanceCount: {
      selector: 'ul.nav >li:nth-child(1) span:nth-child(2) '
    },
    takeTour: {
      selector: 'ul.navbar-right > li:nth-child(2)'
    },
    takeTourTooltip: {
      selector: 'img.question-tour'
    },
    viewInbox: {
      selector: 'ul.nav >li:nth-child(3)'
    },

    advanceSettings: {
      selector: 'ul.nav >li:nth-child(4) img'
    },
    advanceSettingsConsentAdmin: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(1)'
    },
    advanceSettingsClandingPadManager: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(2)'
    },
    advanceSettingsBeeTrainer: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(3)'
    },
    advanceSettingsChargeControl: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(4)'
    },
    advanceSettingsInviations: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(5)'
    },
    advanceSettingsGroupManager: {
      selector: 'li.dropdown.open ul.dropdown-menu li:nth-child(6)'
    },
    inviteOthers: {
      selector: 'ul.nav >li:nth-child(6)'
    },
    inviteModal: {
      selector: 'div.modal-content'
    },
    myAccount: {
      selector: 'ul.nav>li:last-child span'
    },
    userProfile: {
      selector: '.navbar-default ul.dropdown-menu li:nth-child(1)'
    },
    userSettings: {
      selector: 'ul.dropdown-menu li:nth-child(2)'
    },
    trends: {
      selector: 'ul.dropdown-menu li:nth-child(3)'
    },
    logout: {
      selector: 'ul.dropdown-menu li:nth-child(4)'
    },
    settingsDropdown: {
      selector: '#navbarUserDropdown'
    },
    upgrade: {
      selector: 'a.button-upgrade'
    },
    paidupgrade: {
      selector: 'a.button-upgrade'
    },
    communicationCenter: {
      selector: 'li.navbar__communication-center a'
    },

    managesettings: {
      selector: 'ul.nav >li:nth-child(5) a'
    }
  }

}
