var userBeePageCommands = {

  /** Function to verify bee page title */
  beePageTitle: function () {
    this.waitForElementVisible('@pageTitle', 5000)
      .verify.elementPresent('@pageTitle', 'Page title is present')
    return this
  },
  /** function to verify if bee image is displayed */
  beeImage: function () {
    this.waitForElementVisible('@beeImage', 7000)
      .verify.elementPresent('@beeImage', 'Bee image is present')
    return this
  },

  /** Function to verify if bee name is displayed */
  beeName: function () {
    this.waitForElementVisible('@beeName', 5000)
      .verify.elementPresent('@beeName', 'Bee name is present')
    return this
  },

  /** Function to verify hire bee button is displayed */
  hireBeeButton: function () {
    this.waitForElementVisible('@hireBeeButton', 5000)
      .verify.elementPresent('@hireBeeButton', 'Hire this bee button is present')
    return this
  },

  /** Function to verify bee ratings  */
  beeRatingStars: function () {
    this.waitForElementVisible('@beeRatings', 5000)
      .verify.elementPresent('@beeRatings', 'Bee rating stars are present')
    return this
  },

  /** Function to verify bee description */
  beeDescription: function () {
    this.waitForElementVisible('@beeDescription', 5000)
      .verify.elementPresent('@beeDescription', 'Bee description is present')
    return this
  },

  /** Function to verify bee information table */
  beeInfoTable: function () {
    this.waitForElementVisible('@beeInfo', 5000)
      .verify.elementPresent('@beeInfo', 'Bee info is present')
    return this
  },

  /** Function to verify advanced information */
  advancedInformationDropdown: function () {
    this.waitForElementVisible('@advancedInformation', 5000)
      .verify.elementPresent('@advancedInformation', 'Advanced Information dropdown is present')
    return this
  }
}

module.exports = {
  commands: [userBeePageCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'bee/transfer'
  },

  elements: {
    /** css selector for page title */
    pageTitle: {
      selector: '.user-profile h2 > span'
    },
    /** css selector for bee image */
    beeImage: {
      selector: '.bee-component > div'
    },
    /** css selector for bee name */
    beeName: {
      selector: '.xb-honeycomb-footer'
    },
    /** css selector for hire bee button */
    hireBeeButton: {
      selector: 'button.btn-primary'
    },
    /** css selector for bee ratings */
    beeRatings: {
      selector: '.col-xs-12.col-md-9 .rating div'
    },
    /** css selector for bee description */
    beeDescription: {
      selector: '.col-xs-12.col-md-9 .row p'
    },
    /** css selector for bee information */
    beeInfo: {
      selector: '.row div:nth-child(1) > table'
    },
    /** css selector for advanced information  */
    advancedInformation: {
      selector: '.col-xs-12 h4.pointer'
    }
  }
}
