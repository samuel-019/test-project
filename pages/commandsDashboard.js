
var dashboardCommands = {

  verifyGetStartedContent: function () {
    this.waitForElementPresent('@getStarted', 30000, 'Get started block is visible')
    this.verify.containsText('@getStartedTitle', 'Hire Bees', 'Hire Bees Title is present')
    this.verify.containsText('@getStartedDescription', "Let's get you buzzing. Our bees can work with documents and files securely. Get started by dropping off a file here or clicking the blue button.")
    return this.waitForElementVisible('@getStartedButton', 2000, function () {
      this.verify.containsText('.get-started:nth-child(1) a.btn.btn-primary', 'Get Started', 'Button Text present')
    })
  },

  verifySendFilesContent: function () {
    this.waitForElementVisible('@userSendFiles', 30000, 'Send file block is visible')
    this.verify.containsText('@userSendFilesTitle', 'Send Files', 'Send Files Title is present')
    this.verify.containsText('@userSendFilesDescription', 'Just drop a file or document here to securely send it to someone.', 'description present')
    return this.waitForElementVisible('@sendFilesButton', 2000, function () {
      this.verify.containsText('.get-started:nth-child(2)  button>span', 'Send files', 'Button Text present')
    })
  },

  // Getting used on email guard pages
  clickOnEmailGuardbutton: function () {
    this.waitForElementVisible('@emailGuard', 30000, 'Email Guardblock is visible')
    this.waitForElementVisible('@emailGuardButtonEnabled', 30000, 'Button is visible')
    this.verify.containsText('@emailGuardButtonEnabled', 'Email Guard')
    this.click('@emailGuardButtonEnabled')
    return this.verify.urlContains('/user/emailGuard')
  },

  verifyEmailGuardContent: function () {
    this.waitForElementVisible('@emailGuard', 30000, 'Email Guardblock is visible')
    this.verify.containsText('@emailGuardTitle', 'Email Guard', 'Email Guard Title is present')
    this.verify.containsText('@emailGuardDescription', 'Protect your personal email address. Easily create and manage temporary/alternate email addresses to give away to anyone.', 'description present')
    return this.waitForElementVisible('@emailGuardButtonDisabled', 20000, function () {
      this.verify.containsText('div.user-dashboard__row:nth-child(2) > div:last-child  button', 'Email Guard', 'Button Text present')
    })
  },

  verifyMyDataContent: function () {
    this.waitForElementVisible('@myData', 30000, 'My Data block is visible')
    this.verify.containsText('@myDataTitle', 'My Data', 'My Data Title is present')
    this.verify.containsText('@myDtaDescription', 'For data that you have saved with XcooBee for quick access, view who has your data or make changes to it, and, then, update recipients.', 'description present')
    return this.waitForElementVisible('@myDataButton', 2000, function () {
      this.verify.containsText('div.user-dashboard__row:nth-child(4) > div:nth-child(1)  .btn-primary:nth-child(1)', 'View Saved Data', 'Button Text present')
      this.verify.containsText('div.user-dashboard__row:nth-child(4) > div:nth-child(1) .btn-browse-right', 'View Requests', 'Button Text present')
      this.verify.containsText('div.user-dashboard__row:nth-child(4) > div:nth-child(1) .margin-top-10', 'Request Your Data From A Company', 'Button Text present')
    })
  },

  verifyConsentCenterContent: function () {
    this.waitForElementVisible('@consentCenter', 30000, 'My Data block is visible')
    this.verify.containsText('@consentCenterTitle', 'My Consents', 'My Data Title is present')
    this.verify.containsText('@consentCenterDescription', 'In the My Consents area you can manage who has your information and how they can use it.', 'description present')
    return this.waitForElementVisible('@consentCenterButton', 2000, function () {
      this.verify.containsText('div.user-dashboard__row:nth-child(4) > div:nth-child(2)  button', 'Manage Consent', 'Button Text present')
    })
  },

  verifyContactSharesContent: function () {
    this.waitForElementVisible('@contactShares', 30000, 'My Data block is visible')
    this.verify.containsText('@contactSharesTitle', 'Contact Shares', 'My Data Title is present')
    this.verify.containsText('@contactSharesDescription', 'Track who has received your contact data, make changes to your contact card, and update recipients with new information.', 'description present')
    return this.waitForElementVisible('@contactSharesButton', 2000, function () {
      this.verify.containsText('div.user-dashboard__row:nth-child(4) > div:nth-child(3)  button', 'Manage Sharing', 'Button Text present')
    })
  },

  sendFileDropzone: function () {
    this.waitForElementVisible('@userSendFiles', 50000)
      .moveToElement('@userSendFiles', 10, 10)
    return this.waitForElementVisible('.xb-dropzone__transparent', 1000)
  },

  hireBeesdragDrop: function () {
    this.waitForElementVisible('@getStarted', 50000)
      .moveToElement('@getStarted', 10, 10)
    return this.waitForElementVisible('.xb-dropzone__transparent', 1000)
  },

  hireBeesUploadFile: function () {
    this.waitForElementPresent('@getStarted', 1000)
      .setValue('@hireBeeUploader', require('path').join(__dirname, 'testdata', 'TestUploadSupportedFile.jpg'))
    return this.verify.urlContains('/user/beeWizard')
  },

  sendFileUploadFile: function () {
    this.waitForElementPresent('@userSendFiles', 1000)
      .setValue('@sendBeeUploader', require('path').join(__dirname, 'testdata', 'TestUploadSupportedFile.jpg'))
    return this.verify.urlContains('/user/beeWizard')
  }

}

module.exports = {
  commands: [dashboardCommands],

  elements: {

    //  Get Started Locators

    getStarted: {
      selector: '.get-started:nth-child(1)'                        //'div.get-started:nth-child(1) .file-upload__placeholder'
    },

    getStartedTitle: {
      selector: 'div.user-dashboard__card-header h2>span'
    },

    getStartedDescription: {
      selector: '.get-started:nth-child(1) .get-started__description span'
    },

    getStartedButton: {
      selector: '.get-started:nth-child(1) a.btn.btn-primary'
    },

    hireBeeUploader: {
      selector: '.get-started:nth-child(1)   input[type=file]'
    },

    // Send Files Locators

    userSendFiles: {
      selector: 'div.get-started:nth-child(2)'
    },

    userSendFilesTitle: {
      selector: 'div.get-started:nth-child(2)  h2> span'
    },

    userSendFilesDescription: {
      selector: '.get-started:nth-child(2) .get-started__description span'
    },

    sendFilesButton: {
      selector: '.get-started:nth-child(2)  button'
    },

    sendBeeUploader: {
      selector: '.get-started:nth-child(2)   input[type=file]'
    },

    // Email Guard Locators

    emailGuard: {
      selector: 'div.user-dashboard__row:nth-child(2) > div:last-child'
    },

    emailGuardTitle: {
      selector: 'div.user-dashboard__row:nth-child(2) > div:last-child h2'
    },

    emailGuardDescription: {
      selector: 'div.user-dashboard__row:nth-child(2) > div:last-child  .user-dashboard__card-description'
    },
    emailGuardButtonDisabled: {
      selector: 'div.user-dashboard__row:nth-child(2) > div:last-child  button'
    },

    emailGuardButtonEnabled: {
      selector: 'div.user-dashboard__row:nth-child(2) > div:last-child  button' // only for upgraded users
    },

    // My Data Locators

    myData: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(1)'
    },

    myDataTitle: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(1) h3'
    },

    myDtaDescription: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(1) .user-dashboard__card-description'
    },
    myDataButton: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(1)  .btn-primary:nth-child(1)'
    },

    // Consent Center block Locators

    consentCenter: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(2) '
    },
    consentCenterTitle: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(2) h3'
    },

    consentCenterDescription: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(2) .user-dashboard__card-description'
    },
    consentCenterButton: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(2)  button'
    },

    // Contact Shares block Locators

    contactShares: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(3) '
    },

    contactSharesTitle: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(3) h3'
    },

    contactSharesDescription: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(3) .user-dashboard__card-description'
    },
    contactSharesButton: {
      selector: 'div.user-dashboard__row:nth-child(4) > div:nth-child(3)  button'
    }

  }
}
