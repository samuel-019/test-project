var userConsentCenterOptions = {

  /** Function to verify if page title is displayed */
  optionsPageTitle: function () {
    this.waitForElementVisible('@pageTitle', 5000)
      .getText('@pageTitle', function (titleText) {
        var pageTitleText = titleText.value
        this.verify.elementPresent('h2', 'Page title is ' + pageTitleText)
      })
    return this
  },

  /** Function to verify optiosn tab is visible */
  optionsTab: function () {
    this.waitForElementVisible('@optionsTabTitle', 300000)
    return this.verify.containsText('@optionsTabTitle', 'Options')
  },
  /** Function to verify if active tab is present
   * @param {css selector = #consent-center-tab-options} css selector for options tab
   */
  activeTab: function () {
    this.waitForElementVisible('#consent-center-tab-options', 5000)
      .getAttribute('#consent-center-tab-options', 'aria-selected', function (titleText) {
        this.verify.equal(titleText.value, 'true')
      })
    return this
  },

  /** Function to verify general block content in optiosn tab */
  generalBlockContent: function () {
    this.waitForElementVisible('@generalBlock', 30000)
    this.verify.containsText('@generalTextHeader', 'General')
    this.verify.containsText('@allow', 'Allow Offers')
    this.verify.containsText('@inject', 'Inject Address Tracker')
    this.verify.containsText('@allowMedical', 'Allow medical emergency request')
    this.verify.containsText('@useDigital', 'Use digital text signatures when possible')
    return this.verify.containsText('@dataExpiration', 'Default User Data Expiration')
  },

  /** Function to verify cookie block content in option tab */
  cookieBlockContent: function () {
    this.waitForElementVisible('@cookieBlock', 30000)
    this.verify.containsText('@cookieTextHeader', 'Cookies')
    this.verify.containsText('@crowdAi', 'Accept Cookies via Crowd AI')
    this.verify.containsText('@defaultAccept', 'By Default Accept')
    this.verify.containsText('@application', 'Application cookie')
    this.verify.containsText('@usage', 'Usage cookie')
    this.verify.containsText('@statistics', 'Statistics cookie')
    return this.verify.containsText('@advertising', 'Advertising cookie')
  },
  /** Function to verify tooltip content on options tab */
  optionTooltip: function () {
    this.allowOfferTooltip()
    this.injectTooltip()
    this.allowMedicalTooltip()
    this.useDigitalTextTooltip()
    this.defaultUserTooltip()
    this.crowdAiTooltip()
    this.byDefaultTooltip()
    this.applicationTooltip()
    this.usageTooltip()
    this.statisticsTooltip()
    this.advertisingTooltip()

    return this
  },
  /** Function to verify allow offer tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  allowOfferTooltip: function () {
    this.waitForElementVisible('@generalBlock', 30000)
    this.waitForElementVisible('@allow', 30000)
    this.moveToElement('body', 0, 0)
    return this.moveToElement('@allow', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Check to allow offers')
    })
  },

  /** Function to verify inject tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  injectTooltip: function () {
    return this.moveToElement('@inject', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Check to inject address tracker')
    })
  },

  /** Function to verify allow medical tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  allowMedicalTooltip: function () {
    return this.moveToElement('@allowMedical', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Click to allow medical emergency request')
    })
  },

  /** Function to verify use digital tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  useDigitalTextTooltip: function () {
    return this.moveToElement('@useDigital', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Click to use digital text signatures when possible')
    })
  },

  /** Function to verify default user tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  defaultUserTooltip: function () {
    return this.moveToElement('@dataExpiration', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Expiration Description')
    })
  },

  /** Function to verify crowd AI tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  crowdAiTooltip: function () {
    return this.moveToElement('@crowdAi', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Accept Cookies via Crowd AI')
    })
  },

  /** Function to verify by default tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
*/
  byDefaultTooltip: function () {
    return this.moveToElement('@defaultAccept', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'By Default Accept')
    })
  },
  /** Function to verify application cookie tooltip is displayed when move is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  applicationTooltip: function () {
    return this.moveToElement('@application', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Application cookie')
    })
  },

  /** Function to verify usage cookie tooltip is displayed when mouse is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  usageTooltip: function () {
    return this.moveToElement('@usage', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Usage cookie')
    })
  },

  /** Function to verify statistics cookie tooltip is displayed when mouse is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  statisticsTooltip: function () {
    return this.moveToElement('@statistics', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Statistics cookie')
    })
  },

  /** Function to verify advertising cookie tooltip is displayed when mouse is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  advertisingTooltip: function () {
    return this.moveToElement('@advertising', 0, 0, function () {
      this.waitForElementPresent('[role=\'tooltip\']', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Advertising cookie')
    })
  },

  /** Function to verify if user can click on the deault expiration dropdown adn select value from the dropdown
   * @param {css selector = #react-select-3--list} css selector for dropdown list
   * @param {css selector = #react-select-3--option-0} css selector for first option from dropdown
   * @param {css selector = #react-select-3--option-1} css selector for second option from dropdown
   * @param {css selector = #react-select-3--option-2} css selector for third option from dropdown
   * @param {css selector = #react-select-3--option-30} css selector for last option from dropdown
  */
  defaultExpirationDropdown: function () {
    this.waitForElementVisible('@expirationDropdown', 30000)
      .click('@expirationDropdown')
    this.api.pause(3000)
    this.waitForElementVisible('.xb-select__menu-list', 40000)
    this.waitForElementVisible('#react-select-3-option-0', 40000)
    this.verify.containsText('#react-select-3-option-0', '6 month')
    this.verify.containsText('#react-select-3-option-1', '7 month')
    this.verify.containsText('#react-select-3-option-2', '8 month')
    return this.verify.containsText('#react-select-3-option-30', '36 month')
  },
  /** Function to verify if tooltip is displayed on checkbox and verify the content */
  checkboxVerification: function () {
    this.allowOfferCheckboxVerification()
    this.injectCheckboxVerification()
    this.allowMedicalCheckboxVerification()
    this.useDigitalCheckboxVerification()
    this.useCrowdAICheckboxVerification()
    this.applicationCookieCheckboxVerification()
    this.usageCookieCheckboxVerification()
    this.statisticsCookieCheckboxVerification()
    this.advertisingCookieCheckboxVerification()

    return this
  },
  /** Function to verify if tooltip is displayed when mouse is hover over text and content is verified
   * @param {css selector = [role=\'tooltip\'] css selector
   * @param {css selector = div.tooltip-inner } css selector for tooltip
  */
  tooltips: function (toolTipText) {
    this.waitForElementPresent('@tooltip', 60000, 'Tooltip has appeared')
    this.waitForElementVisible('div.tooltip-inner', 60000)
    this.verify.containsText('div.tooltip-inner', toolTipText)
  },

  /** Function to verify if tooltip is displayed when hovered over allow offer checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(1) .checkbox} css selector for cehckbox
  */
  allowOfferCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('Check to allow offers')
  },

  /** Function to verify if tooltip is displayed when hovered over inject checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(2) .checkbox} css selector for cehckbox
  */
  injectCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(2) .checkbox', 10, 10)
    this.tooltips('Check to inject address tracker')
  },

  /** Function to verify if tooltip is displayed when hovered over allow medical checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(3) .checkbox} css selector for cehckbox
  */
  allowMedicalCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(3) .checkbox', 10, 10)
    this.tooltips('Click to allow medical emergency request')
  },

  /** Function to verify if tooltip is displayed when hovered over use digital checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(4) .checkbox} css selector for cehckbox
  */
  useDigitalCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(1) .panel-body table > tbody > tr:nth-child(4) .checkbox', 10, 10)
    this.tooltips('Click to use digital text signatures when possible')
  },
  /** Function to verify if tooltip is displayed when hovered over use AI checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(1) .checkbox} css selector for cehckbox
  */
  useCrowdAICheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('Accept Cookies via Crowd AI')
  },

  /** Function to verify if tooltip is displayed when hovered over Application cookie checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(3) .checkbox} css selector for cehckbox
  */
  applicationCookieCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(3) .checkbox', 10, 10)
    this.tooltips('Application cookie')
  },
  /** Function to verify if tooltip is displayed when hovered over usage cookie checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(4) .checkbox} css selector for cehckbox
  */
  usageCookieCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(4) .checkbox', 10, 10)
    this.tooltips('Usage cookie')
  },
  /** Function to verify if tooltip is displayed when hovered over statistics cookie checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(5) .checkbox} css selector for cehckbox
  */
  statisticsCookieCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(5) .checkbox', 10, 10)
    this.tooltips('Statistics cookie')
  },

  /** Function to verify if tooltip is displayed when hovered over advertising cookie checkbox and verify the content
   * @param {css selector = .col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(6) .checkbox} css selector for cehckbox
  */
  advertisingCookieCheckboxVerification: function () {
    this.moveToElement('.col-lg-4:nth-child(2) .panel-body table > tbody > tr:nth-child(6) .checkbox', 10, 10)
    this.tooltips('Advertising cookie')
  }

}

module.exports = {
  commands: [userConsentCenterOptions],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/consentCenter/options'
  },

  elements: {
    /** css selector for page title */
    pageTitle: {
      selector: 'h2'
    },
    /** css selector for option tab */
    optionsTabTitle: {
      selector: '#consent-center-tab-options'
    },
    /** css selector for active option tab */
    activeOptionsTab: {
      selector: '.nav-tabs li:nth-child(5) a[aria-selected=true]'
    },
    /** css selector for user option page */
    userOptionsPageContent: {
      selector: '#consent-center-pane-options .loadedContent'
    },
    /** css selector for available option list */
    availableOptionsList: {
      selector: '#consent-center-pane-options .col-xs-12 .table-condensed'
    },
    /** css selector for general block */
    generalBlock: {
      selector: '.col-lg-4:nth-child(1) .panel-body'
    },
    /** css selector for general textheader */
    generalTextHeader: {
      selector: '.col-lg-4:nth-child(1) h4 > span'
    },
    /** css selector for allow offers */
    allow: {
      selector: '.col-lg-4:nth-child(1) tr:nth-child(1) span:nth-child(1) > span:nth-child(1)'
    },
    /** css selector for inject address tracker */
    inject: {
      selector: '.col-lg-4:nth-child(1) tr:nth-child(2) > td:nth-child(1)> span'
    },
    /** css selector for allow medical emergency request */
    allowMedical: {
      selector: '.col-lg-4:nth-child(1) tr:nth-child(3) span:nth-child(1)'
    },
    /** css selector for Use digital text signatures when possible */
    useDigital: {
      selector: '.col-lg-4:nth-child(1) tr:nth-child(4) span:nth-child(1)'
    },
    /** css selector for Default User Data Expiration */
    dataExpiration: {
      selector: '.col-lg-4:nth-child(1) tr:nth-child(5) span:nth-child(1)'
    },
    /** css selector for cookie block */
    cookieBlock: {
      selector: '.col-lg-4:nth-child(2) .panel-body'
    },
    /** css selector for Cookies */
    cookieTextHeader: {
      selector: '.col-lg-4:nth-child(2) h4 > span'
    },
    /** css selector for Accept Cookies via Crowd AI */
    crowdAi: {
      selector: '.col-lg-4:nth-child(2) tr:nth-child(1) span:nth-child(1) > span:nth-child(1)'
    },
    /** css selector for By Default Accept */
    defaultAccept: {
      selector: '.col-lg-4:nth-child(2) td > h5 > span'
    },
    /** css selector for application Cookies */
    application: {
      selector: '.col-lg-4:nth-child(2) tr:nth-child(3) span:nth-child(1) > span:nth-child(1)'
    },
    /** css selector for usage Cookies */
    usage: {
      selector: '.col-lg-4:nth-child(2) tr:nth-child(4) span:nth-child(1) > span:nth-child(1)'
    },
    /** css selector for statistics Cookies */
    statistics: {
      selector: '.col-lg-4:nth-child(2) tr:nth-child(5) span:nth-child(1) > span:nth-child(1)'
    },
    /** css selector for advertsingCookies */
    advertising: {
      selector: '.col-lg-4:nth-child(2) tr:nth-child(6) span:nth-child(1) > span:nth-child(1)'
    },
    /** css selector for Default User Data Expiration dropown */
    expirationDropdown: {
      selector: '.consent-options__expiration-select'
    },

    // Tooltip selector
    tooltip: {
      selector: '[role=\'tooltip\']'
    }

  }
}
