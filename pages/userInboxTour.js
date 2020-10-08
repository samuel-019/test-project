var inboxTour = {
  /** Function to check if inbox tour heade element are displayed */
  checkInboxHeaderElements: function () {
    this.waitForElementVisible('@tourToolTip', 5000)
    this.api.pause(2000)
    return this.verify.visible('@tourToolTip')
  },
  /** Function to verify the content of first step of inbox tour */
  checkTipStep1: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Welcome to XcooBee!')
    this.verify.containsText('@toolTipBody', 'This tour will introduce you to your Inbox. Here you can search for and download files that the bees have worked on for you.')
    this.verify.containsText('@nextButton', '>> 1/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    return this.verify.visible('@toolTipcloseButton')
  },
  /** Function to verify the content of second step of inbox tour */
  checkTipStep2: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Search')
    this.verify.containsText('@toolTipBody', 'Find a file by searching for its file name, file extension, or by the the XcooBee ID of the sender.')
    this.verify.containsText('@nextButton', '>> 2/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },
  /** Function to verify the content of third step of inbox tour */
  checkTipStep3: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Filter By Date')
    this.verify.containsText('@toolTipBody', 'Find files by choosing a range of dates to filter your search.')
    this.verify.containsText('@nextButton', '>> 3/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },

  /** Function to verify the content of fourth step of inbox tour */
  checkTipStep4: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Downloaded')
    this.verify.containsText('@toolTipBody', "Filter files to see files that you've downloaded or files you haven't downloaded.")
    this.verify.containsText('@nextButton', '>> 4/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },
  /** Function to verify the content of fifth step of inbox tour */
  checkTipStep5: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Download')
    this.verify.containsText('@toolTipBody', 'Click here to download a file.')
    this.verify.containsText('@nextButton', '>> 5/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },
  /** Function to verify the content of sixth step of inbox tour */
  checkTipStep6: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Hire')
    this.verify.containsText('@toolTipBody', 'Click here to hire a bee that can work on this file.')
    this.verify.containsText('@nextButton', '>> 6/7')
    this.verify.containsText('@endTourButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },
  /** Function to verify the content of seventh step of inbox tour */
  checkTipStep7: function () {
    this.waitForElementPresent('@toolTipHeader', 5000)
    this.verify.containsText('@toolTipHeader', 'Delete')
    this.verify.containsText('@toolTipBody', 'Click here to delete a file.')
    this.verify.containsText('@nextButton', 'End Tour')
    this.verify.visible('@toolTipcloseButton')
    return this.verify.visible('@backLink')
  },
  /** Function to verify if next button is displayed in inbox tour */
  nextTipStep: function () {
    return this.waitForElementVisible('@nextButton', 5000)
      .click('@nextButton')
  }
}

module.exports = {

  commands: [inboxTour],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/inbox'
  },

  elements: {
    /** css selector for inbox tour tooltip */
    tourToolTip: {
      selector: 'ul.nav >li:nth-child(2)'
    },
    /** css selector for end button tour */
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
    /** css selector for tour tip header */

    toolTipHeader: {
      selector: 'div.joyride-tooltip__header span'
    },
    /** css selector tour body */
    toolTipBody: {
      selector: 'div.joyride-tooltip__main'
    },
    /** css selector for close button */
    toolTipcloseButton: {
      selector: 'button.joyride-tooltip__close'
    }

  }
}
