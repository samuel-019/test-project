var dashboardTourCommands = {
  /** verify if tout tooltip is visible or not */
  checkToolTipElements: function () {
    this.waitForElementVisible('@tourToolTip', 3000)
    this.api.pause(2000)
    return this.verify.visible('@tourToolTip')
  },
  /** verify first step of tour and check its content */
  checkTipWelcome: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'Welcome to XcooBee!')
    this.verify.containsText('@toolTipBodySpan1', 'This tour will introduce you to the dashboard. If you ever need to return to the dashboard, you can always click the bee logo in the corner to come back here from anywhere in the application.')
    this.verify.containsText('@toolTipBodySpan2', 'We also have video tutorials you can watch by clicking the button below.')
    this.verify.containsText('button.center-block.btn.btn-primary.btn.btn-default:nth-child(1)', 'Video Tutorial')
    this.verify.containsText('@toolTipBodySpan3', 'Security Recommendations')
    this.verify.containsText('@nextButton', '>> 1/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    return this.verify.visible('@toolTipcloseButton')
  },
  /** verify second step of tour and check its content */
  checkTipActivity: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'Activity')
    this.verify.containsText('@toolTipBody', 'Here you can track your recent activity, download files, and get more info about a transaction by clicking one of the activity cards.')
    this.verify.containsText('@nextButton', '>> 2/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },
  /** verify third step of tour and check its content */
  checkTipConsentCenter: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'My Consents')
    this.verify.containsText('@toolTipBody', 'My Consents area is your central access point for all consent management tasks. You can adjust your consent, change already shared data, expire data, or manage updates to your contact information, and more.')
    this.verify.containsText('@nextButton', '>> 3/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify fourth step of tour and check its content */
  checkTipMenuBar: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'Menu Bar')
    this.verify.containsText('@toolTipBody', 'The perfect place to view your balance, check for messages, manage projects or campaigns, and change your settings. The gear icon,if visible, allows you to manage company affairs, while the menu under your username will allow you to manage personal settings.')
    this.verify.containsText('@nextButton', '>> 4/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify fifth step of tour and check its content */
  checkTipConnectAccounts: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'Tools')
    this.verify.containsText('@toolTipBodySpan1', 'Email Guard and Contact share are some of the personal tools available to more quickly safely, and conveniently share information even with your friends.')
    this.verify.containsText('@nextButton', '>> 5/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify sixth step of tour and check its content */
  checkTipTour: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'Tour')
    this.verify.containsText('@toolTipBody', 'Need to watch this tour again? Click here! If you see this icon on other pages you can click it to watch a tour of that page.')
    this.verify.containsText('@nextButton', '>> 6/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify seventh step of tour and check its content */
  checkTipGetStarted: function () {
    this.checkToolTipElements()
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.verify.containsText('@toolTipHeader', 'Get Started')
    this.verify.containsText('@toolTipBodySpan1', "When you're ready to hire your first bee, click here to get started. Have a nice flight!")
    this.verify.containsText('@toolTipBodySpan2', 'You can also click below to view our video tutorials. They are the best way to get up and running with XcooBee!')
    this.verify.containsText('@toolTipBodySpan3', 'Video Tutorials')
    this.verify.containsText('@nextButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** Function to check if back button is visible and click on it */
  tipBack: function () {
    return this.waitForElementVisible('@backLink', 4000)
      .click('@backLink')
  },

  /** Function to check if next button is visible and click on it */
  nextTipStep: function () {
    return this.waitForElementVisible('@nextButton', 4000)
      .click('@nextButton')
  },
  /** Function to check if tour button is visible and click on it */
  tipSearch: function () {
    return this.waitForElementVisible('@takeTour', 7000)
      .click('@takeTour')
  },

  tipCategory: function () {
    return this.waitForElementVisible('@uploadIcon', 7000)
      .click('@uploadIcon')
  },
  //* *Function to verify if wait for close wizard icon to be displayed and click on it */
  tipExtensions: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  },

  //* *Function to verify if wait for select a bee icon to be displayed and click on it */
  tipSelectaBee: function () {
    return this.waitForElementVisible('@uploadIcon', 7000)
      .click('@uploadIcon')
  },
  //* *Function to verify if wait for more info icon to be displayed and click on it */
  tipMoreInfo: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  },

  //* *Function to verify if wait for close wizard icon to be displayed and click on it */
  tipGetStarted: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  }

}

module.exports = {
  commands: [dashboardTourCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {
    //* *css selector for tourtooltip */
    tourToolTip: {
      selector: 'div.joyride-tooltip'
    },
    /** css selector for end tour */
    endTourButton: {
      selector: 'button.joyride-tooltip__button--skip'
    },
    /** css selector for back button */
    backLink: {
      selector: 'button.joyride-tooltip__button--secondary'
    },
    /** css selector for next button */
    nextButton: {
      selector: 'button.joyride-tooltip__button--primary'

    },
    /** css selector for tour tooltip header */

    toolTipHeader: {
      selector: '.joyride-tooltip__header span'
    },
    /** csss selector for tooltip body */
    toolTipBody: {
      selector: 'div.joyride-tooltip__main'
    },
    /** csss selector for tooltip body */
    toolTipBodySpan1: {
      selector: '.joyride-tooltip__main span:nth-child(1)'
    },
    /** csss selector for tooltip body */
    toolTipBodySpan2: {
      selector: '.joyride-tooltip__main span:nth-child(4)'
    },
    /** csss selector for tooltip body */
    toolTipBodySpan3: {
      selector: '.joyride-tooltip__main button span:nth-child(1)'
    },
    /** csss selector for tooltip close button */
    toolTipcloseButton: {
      selector: 'button.joyride-tooltip__close'
    }

  }

}
