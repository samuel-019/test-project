var beeWizardHeader = {
  /** Function to verify bee wizard header element are visible or not */
  checkBeeWizardHeaderElements: function () {
    return this.waitForElementVisible('@closeWizard', 10000)
      .verify.visible('@chooseIcon')
      .verify.visible('@takeTour')
      .verify.visible('@uploadIcon')
      .verify.visible('@takeoffIcon')
  },
  /** Function to verify the button on bee wizard header section are present or not */
  ButtonsNumber: function () {
    return this.waitForElementVisible('.container-fluid', 4000)
      .api.elements('css selector', 'div.container-fluid button', function (result) {
        this.assert.equal(result.value.length, 3)
      })
  },
  /** verify if choose icon is visble and if user can click on it */
  clickOnChooseIcon: function () {
    return this.waitForElementVisible('@chooseIcon', 4000)
      .click('@chooseIcon')
  },
  /** verify if take tour is visible and user can click on it */
  clickOnTakeTour: function () {
    return this.waitForElementVisible('@takeTour', 7000)
      .click('@takeTour')
  },
  /** cverify if upload icon is visible and user can click on it */
  clickOnUploadIcon: function () {
    return this.waitForElementVisible('@uploadIcon', 7000)
      .click('@uploadIcon')
  },
  /** verify if close wizard icon is visible and user can click on it */
  clickOnCloseWizard: function () {
    return this.waitForElementVisible('@closeWizard', 7000)
      .click('@closeWizard')
  }
}

module.exports = {

  commands: [beeWizardHeader],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/beeWizard'
  },

  elements: {
    /** css selector for header logo */
    headerLogo: {
      selector: 'div.navbar-header'
    },
    /** css selector for buttons on header section */
    buttonsOnHeader: {
      selector: 'div.container-fluid button'
    },
    /** css selector for choose icon */
    chooseIcon: {
      selector: '.navbar-wizard-steps button:nth-child(1)'
    },
    /** css selector for upload icon */
    uploadIcon: {
      selector: '.navbar-wizard-steps button:nth-child(3)'
    },
    /** css selector for takeoff */
    takeoffIcon: {
      selector: '.navbar-wizard-steps button:nth-child(5)'
    },
    /** css selector take tour */
    takeTour: {
      selector: '.navbar-close-container.hidden-xs div:nth-child(1)'
    },
    /** css selector for close wizard  */
    closeWizard: {
      selector: '.navbar-close-container.hidden-xs div:nth-child(2)'
    }

  }
}
