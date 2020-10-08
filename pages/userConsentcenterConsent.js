var userConsentCenterCommands = {

  /** Function to verify consent page title */
  consentPageTitle: function () {
    this.waitForElementVisible('@pageTitle', 5000)
      .getText('@pageTitle', function (titleText) {
        var pageTitleText = titleText.value
        this.verify.elementPresent('h2', 'Page title is ' + pageTitleText)
      })
    return this
  },

  /** Function to verify consent tab is displayed */
  consentTab: function () {
    this.waitForElementVisible('@consentTabTitle', 5000)
      .getText('@consentTabTitle', function (tabText) {
        var tabTitleText = tabText.value
        this.verify.elementPresent('#consent-center-tab-consent', 'Tab title is ' + tabTitleText)
      })
    return this
  },

  /** Function to verify if consent tab is acitve */
  activeTab: function () {
    this.waitForElementVisible('@activeConsentTab', 5000)
      .verify.elementPresent('@activeConsentTab', 'Consent tab is active')
    return this
  }
}

module.exports = {
  commands: [userConsentCenterCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/consentCenter/consent'
  },

  elements: {
    /** css selector for consent page title */
    pageTitle: {
      selector: 'h2'
    },
    /** css selector for consent tab title */
    consentTabTitle: {
      selector: '#consent-center-tab-consent'
    },
    /** css selector for acitve consent tab */
    activeConsentTab: {
      selector: '.nav-tabs li:nth-child(1) a[aria-selected=true]'
    }
  }
}
