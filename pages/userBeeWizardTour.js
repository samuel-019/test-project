var beeWizardTour = {
  /** verify if bee wizard header tour element are visible */
  checkBeeWizardHeaderElements: function () {
    this.waitForElementVisible('@tourToolTip', 5000)
    this.api.pause(2000)
    return this.verify.visible('@tourToolTip')
  },
  /** verify first step on bee wizard tour and its content */
  checkTipStep1: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Welcome to XcooBee!')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'This tour will introduce you to the Bee Wizard. The Bee Wizard guides you through the process of hiring a bee, uploading a file, and sending it.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 1/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
    return this.verify.visible('@toolTipcloseButton')
  },
  /** verify third step on bee wizard tour and its content */
  checkTipStep3: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Search')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'You can search for a bee by its name or description.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 3/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify second step on bee wizard tour and its content */
  checkTipStep2: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Bees')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'Here are some of the bees you can hire to start doing tasks for you. Find more bees using the search bar, or by using the dropdown to select a category.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 2/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify fourth step on bee wizard tour and its content */
  checkTipStep4: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Category')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'Filter bees by selecting a category.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 4/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify fifth step on bee wizard tour and its content */
  checkTipStep5: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Extensions')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'Filter bees that can work on certain files.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 5/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify sixth step on bee wizard tour and its content */
  checkTipStep6: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Select a Bee')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'Click inside the honeycomb to select a bee.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 6/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify seventh step on bee wizard tour and its content */
  checkTipStep7: function () {
    this.waitForElementPresent('@toolTipHeader', 3000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'More Info')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'Get more information about a bee by clicking its title.')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, '>> 7/8')
      })
      .getText('@endTourButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })
      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** verify eight step on bee wizard tour and its content */
  checkTipStep8: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.api.pause(3000)
      .getText('@toolTipHeader', function (result) {
        this.verify.equal(result.value, 'Get Started')
      })
      .getText('@toolTipBody', function (result) {
        this.verify.equal(result.value, 'When youre ready to hire your first bee, select a bee and click next to get started. Have a nice flight!')
      })
      .getText('@nextButton', function (result) {
        this.verify.equal(result.value, 'End Tour')
      })

      .verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  // @buttonsOnHeader
  tipWelcomeToXcooBee: function () {
    return this.waitForElementVisible('.container-fluid', 5000)
      .api.elements('css selector', 'div.container-fluid button', function (result) {
        this.assert.equal(result.value.length, 3)
      })
      .verify.attributeEquals('.an-input-classname', 'disabled', true)
  },
  /** Function to verify if choose icon is visible and if user can click it */
  tipBees: function () {
    return this.waitForElementVisible('@chooseIcon', 5000)
      .click('@chooseIcon')
  },
  /** Function to verify if next icon is visible and if user can click it */

  nextTipStep: function () {
    return this.waitForElementVisible('@nextButton', 5000)
      .click('@nextButton')
  },
  /** Function to verify if take tour icon is visible and if user can click it */
  tipSearch: function () {
    return this.waitForElementVisible('@takeTour', 7000)
      .click('@takeTour')
  },
  /** Function to verify if upload icon is visible and if user can click it */
  tipCategory: function () {
    return this.waitForElementVisible('@uploadIcon', 7000)
      .click('@uploadIcon')
  },
  /** Function to verify if close wizard is visible and if user can click it */
  tipExtensions: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  },
  /** Function to verify if close wizard is visible and if user can click it */
  tipSelectaBee: function () {
    return this.waitForElementVisible('@uploadIcon', 7000)
      .click('@uploadIcon')
  },
  /** Function to verify if close wizard is visible and if user can click it */
  tipMoreInfo: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  },

  /** Function to verify if close wizard is visible and if user can click it */
  tipGetStarted: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  }
}

module.exports = {

  commands: [beeWizardTour],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/beeWizard'
  },

  elements: {
    /** css selector for tour tooltip */
    tourToolTip: {
      selector: '.navbar-close-container.hidden-xs div:nth-child(1)'
    },
    /** css selector for end tour button */
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

    toolTipHeader: {
      selector: 'div.joyride-tooltip__header span'
    },
    /** css selector for tour body */
    toolTipBody: {
      selector: 'div.joyride-tooltip__main'
    },
    /** css selector for tour close button */
    toolTipcloseButton: {
      selector: 'button.joyride-tooltip__close'
    }

  }
}
