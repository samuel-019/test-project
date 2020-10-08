var userSettingsNotificationsCommands = {

  /** Function to check if notification tab is present */
  notificationsTab: function () {
    this.waitForElementVisible('@userSettings', 20000)
      .verify.elementPresent('@notificationsTab', 'Notifications tab is present')
  },
  /** function checks if notification tab title is present
     * @param {css selector = #user-settings-pane-privacy > div > div } css selector for settings page
     * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(" + settings + ") h4} css selector check if notification tab is present
     */
  notificationsTabSettings: function () {
    this.waitForElementVisible('@userSettings', 10000)
      .api.elements('css selector', '#user-settings-pane-notifications .row.xb-row > div', function (result) {
        var userSettingsCount = result.value.length
        for (var settings = 1; settings <= userSettingsCount; settings++) {
          var settingsTitles = '#user-settings-pane-notifications .row.xb-row > div:nth-child(' + settings + ') h4'
          this.getText(settingsTitles, function (titleText) {
            var settingsTitleText = titleText.value
            this.verify.elementPresent(settingsTitles, settingsTitleText + ' opt-in notifications are present')
          })
        }
      })
    return this
  },
  /** Function to check if message is displayed on notification page
   * @param {css selector = div#user-settings-pane-notifications div.alert.alert-info>span } css selector for message
   * @param {css selector = div#user-settings-pane-notifications .col-xs-12 >img} css selector for image
   * @param {css selector = div#user-settings-pane-notifications div:nth-child(2) > div > span} css selector for email id
   */
  notificationMessage: function () {
    this.waitForElementVisible('@notificationsTab', 10000)
    this.verify.containsText('div#user-settings-pane-notifications div.alert.alert-info>span', 'XcooBee is currently in Beta and not all notifications are enabled. Feel free to use the checkmarks as you see fit so you are ready when they are enabled.')
    this.verify.elementPresent('div#user-settings-pane-notifications .col-xs-12 >img', 'Image is visible')
    return this.verify.containsText('div#user-settings-pane-notifications div:nth-child(2) > div > span', 'devdtester18@gmail.com')
  },

  /** Function to check payment block content */
  paymentBlockContent: function () {
    this.verify.containsText('@paymentText', 'Payments')
    this.verify.containsText('@automaticReloadsText', 'Automatic Reloads')
    this.verify.containsText('@requestPointsText', 'Request Points')
    this.verify.containsText('@receivePointsText', 'Receive Points')
    return this.verify.containsText('@newPurchasesText', 'New Purchases')
  },

  /** Function to check bee hiring block content */
  BeeHiringBlockContent: function () {
    this.verify.containsText('@beeHiringText', 'Bee Hiring')
    this.verify.containsText('@onErrorText', 'On Error')
    this.verify.containsText('@onDeliveryText', 'On Delivery')
    this.verify.containsText('@onReceiptText', 'On Receipt')
    this.verify.containsText('@onViewedText', 'On Viewed')
    return this.verify.containsText('@hideConfirmationText', 'Hide Confirmation')
  },

  /** Function to check Bee hiring block content */
  systemBlockContent: function () {
    this.verify.containsText('@systemText', 'System')
    return this.verify.containsText('@platformUpdateText', 'Platform Update')
  },

  /** Function to check interaction block content */
  interactionBlockContent: function () {
    this.verify.containsText('@interactionsText', 'Interactions')
    this.verify.containsText('@offersText', 'Offers')
    this.verify.containsText('@surveysText', 'Surveys')
    return this.verify.containsText('@filesText', 'Files in Inbox')
  },

  /** Function to check balance block content */
  balancesBlockContent: function () {
    this.verify.containsText('@balancesText', 'Balances')
    this.verify.containsText('@expiringBalancesText', 'Expiring Balances')
    return this.verify.containsText('@creditText', 'Credits')
  },

  /** Function to check content for all blocks notification page  */
  blockContentVerification: function () {
    this.paymentBlockContent()
    this.BeeHiringBlockContent()
    this.systemBlockContent()
    this.interactionBlockContent()
    this.balancesBlockContent()

    return this
  },

  /** Function to check tooltip text on notification page
   * @param {css selector = div.tooltip-inner } css selector for tooltip
   */
  tooltips: function (toolTipText) {
    this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
    this.waitForElementVisible('div.tooltip-inner', 60000)
    this.verify.containsText('div.tooltip-inner', toolTipText)
  },

  /** Function to check Tooltip text on automatic reload checkbox
   * Move to automatic reload checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(1) .checkbox } css selector for checkbox
   */
  automaticReloadCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('When you reload your account because your balance was low we will notify you')
  },

  /** Function to check Tooltip text on request point checkbox
   * Move to request point checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(2) .checkbox } css selector for checkbox
   */
  requestPointsCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(2) .checkbox', 10, 10)
    this.tooltips('When you hire a bee to request points we will notify you')
  },

  /** Function to check Tooltip text on receive points checkbox
   * Move to receive points checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(3) .checkbox } css selector for checkbox
   */
  receivePointsCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(3) .checkbox', 10, 10)
    this.tooltips('When you receive points from others we will notify you')
  },

  /** Function to check Tooltip text on new purchase checkbox
   * Move to new purchase checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(4) .checkbox } css selector for checkbox
   */
  newPurchaseCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(4) .checkbox', 10, 10)
    this.tooltips('When you make purchases we will send you a confirmation')
  },

  /** Function to check Tooltip text on error checkbox
   * Move to on error checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(1) .checkbox } css selector for checkbox
   */
  onErrorCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('When there is an error during the work that bees do for you we will notify you')
  },

  /** Function to check Tooltip text on delivery checkbox
   * Move to on delivery checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(2) .checkbox } css selector for checkbox
   */
  onDeliveryCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(2) .checkbox', 10, 10)
    this.tooltips('When files you send are placed into inbox of recipients')
  },

  /** Function to check Tooltip text on recepint checkbox
   * Move to on receipt checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(3) .checkbox } css selector for checkbox
   */
  onReceiptCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(3) .checkbox', 10, 10)
    this.tooltips('When recipients are presented with files in their inbox')
  },

  /** Function to check Tooltip text on error checkbox
   * Move to on viewed checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(4) .checkbox } css selector for checkbox
   */
  onViewedCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(4) .checkbox', 10, 10)
    this.tooltips('When files are downloaded by recipients')
  },

  /** Function to check Tooltip text hide confirmation checkbox
   * Move to hide confirmation checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(5) .checkbox } css selector for checkbox
   */
  hideConfirmationCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(5) .checkbox', 10, 10)
    this.tooltips('We will hide the confirmation message we display when you finish hiring a bee')
  },

  /** Function to check Tooltip text offer checkbox
   * Move to offer checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(1) .checkbox } css selector for checkbox
   */
  offersCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('Offers by others on the XcooBee platform to you')
  },

  /** Function to check Tooltip text survey checkbox
   * Move to survey checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(2) .checkbox } css selector for checkbox
   */
  surveyCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(2) .checkbox', 10, 10)
    this.tooltips('XcooBee surveys to help us make our service better')
  },

  /** Function to check Tooltip text on file in inbox checkbox
   * Move to file in inbox checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(3) .checkbox } css selector for checkbox
   */
  fileInInboxCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(3) .checkbox', 10, 10)
    this.tooltips('Receive email notifcation when files arrive in your XcooBee inbox.')
  },

  /** Function to check Tooltip text platform update checkbox
   * Move to platofrm update checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(4) .panel-body table > tbody > tr:nth-child(1) .checkbox } css selector for checkbox
   */
  platformUpdateCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(4) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('We will notify you about upcoming updates and current changes')
  },

  /** Function to check Tooltip text expiring balance checkbox
   * Move to expirig balance checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(1) .checkbox } css selector for checkbox
   */
  expiringBalanceCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(1) .checkbox', 10, 10)
    this.tooltips('When points are about to expire we will notify you')
  },

  /** Function to check Tooltip text on credit checkbox
   * Move to on error checkbox and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(2) .checkbox } css selector for checkbox
   */
  creditsCheckboxVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(2) .checkbox', 10, 10)
    this.tooltips('When you receive credits to your point balance')
  },

  /** Function to check Tooltip text on automatic reload
   * Move to automatic reload and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span } css selector for text
   */
  automaticReloadTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When you reload your account because your balance was low we will notify you')
  },

  /** Function to check Tooltip text on request point text
   * Move to request point text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span } css selector for text
   */
  requestPointsTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When you hire a bee to request points we will notify you')
  },

  /** Function to check Tooltip text on receive points text
   * Move to recive points text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span } css selector for text
   */
  receivePointsTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When you receive points from others we will notify you')
  },

  /** Function to check Tooltip text on new purchase text
   * Move to new purchase text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(4) > td:nth-child(1) > span > span } css selector for text
   */
  newPurchaseTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(1) .panel-body table > tbody > tr:nth-child(4) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When you make purchases we will send you a confirmation')
  },

  /** Function to check Tooltip text on error text
   * Move to on error text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span } css selector for text
   */
  onErrorTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When there is an error during the work that bees do for you we will notify you')
  },

  /** Function to check Tooltip text on delivery text
   * Move to on delivery text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span } css selector for text
   */
  onDeliveryTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When files you send are placed into inbox of recipients')
  },

  /** Function to check Tooltip text on receipt text
   * Move to on receipt text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span } css selector for text
   */
  onReceiptTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When recipients are presented with files in their inbox')
  },

  /** Function to check Tooltip text on view text
   * Move to on view text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(4) > td:nth-child(1) > span > span } css selector for text
   */
  onViewedTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(4) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When files are downloaded by recipients')
  },

  /** Function to check Tooltip text hide confirmation text
   * Move to hide confirmation text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(5) > td:nth-child(1) > span > span } css selector for text
   */
  hideConfirmationTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(2) .panel-body table > tbody > tr:nth-child(5) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('We will hide the confirmation message we display when you finish hiring a bee')
  },

  /** Function to check Tooltip text on offer text
   * Move to on offer text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span } css selector for text
   */
  offersTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('Offers by others on the XcooBee platform to you')
  },

  /** Function to check Tooltip text on survey text
   * Move to on survey text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span } css selector for text
   */
  surveyTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('XcooBee surveys to help us make our service better')
  },

  /** Function to check Tooltip text on file in inbox text
   * Move to file in inbox text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span } css selector for text
   */
  fileInInboxTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(3) .panel-body table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('Receive email notifcation when files arrive in your XcooBee inbox.')
  },

  /** Function to check Tooltip text on platform update text
   * Move to platform update text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(4) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span } css selector for text
   */
  platformUpdateTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(4) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('We will notify you about upcoming updates and current changes')
  },
  /** Function to check Tooltip text expiring balance text
   * Move to balance expiry text and tooltip text is verified
   * @param {css selector = .col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span } css selector for text
   */
  expiringBalanceTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When points are about to expire we will notify you')
  },

  /** Function to check Tooltip text on credit text
  * Move to credit text and tooltip text is verified
  * @param {css selector = .col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span } css selector for text
  */
  creditsTooltipVerification: function () {
    this.moveToElement('.col-lg-6:nth-child(5) .panel-body table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span', 10, 10)
    this.tooltips('When you receive credits to your point balance')
  },

  /** Function to check tooltip text on checkbox */
  checkboxVerification: function () {
    this.moveToElement('body', 0, 0)
    this.automaticReloadCheckboxVerification()
    this.requestPointsCheckboxVerification()
    this.receivePointsCheckboxVerification()
    this.newPurchaseCheckboxVerification()
    this.onErrorCheckboxVerification()
    this.onDeliveryCheckboxVerification()
    this.onReceiptCheckboxVerification()
    this.onViewedCheckboxVerification()
    this.hideConfirmationCheckboxVerification()
    this.offersCheckboxVerification()
    this.surveyCheckboxVerification()
    this.fileInInboxCheckboxVerification()
    this.platformUpdateCheckboxVerification()
    this.expiringBalanceCheckboxVerification()
    this.creditsCheckboxVerification()

    return this
  },
  /** function to check tooltip text on text */
  textTooltipVerification: function () {
    this.automaticReloadTooltipVerification()
    this.requestPointsTooltipVerification()
    this.receivePointsTooltipVerification()
    this.newPurchaseTooltipVerification()
    this.onErrorTooltipVerification()
    this.onDeliveryTooltipVerification()
    this.onReceiptTooltipVerification()
    this.onViewedTooltipVerification()
    this.hideConfirmationTooltipVerification()
    this.offersTooltipVerification()
    this.surveyTooltipVerification()
    this.fileInInboxTooltipVerification()
    this.platformUpdateTooltipVerification()
    this.expiringBalanceTooltipVerification()
    this.creditsTooltipVerification()

    return this
  }

}

module.exports = {
  commands: [userSettingsNotificationsCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/settings/notifications'
  },

  elements: {
    /** css selecto for settings page */
    userSettings: {
      selector: '.user-settings'
    },
    /** css selector for notification tab */
    notificationsTab: {
      selector: '.nav-tabs li:nth-child(4)'
    },
    /** css selector for payment block */
    paymentBlock: {
      selector: '#user-settings-pane-notifications .row.xb-row > div:nth-child(1)'
    },
    /** css selector for payment text */
    paymentText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(1) > div > div > div > div > h4 > span'
    },
    /** css selector for automtic reload text */
    automaticReloadsText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(1) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span'
    },
    /** css selector for request points text */
    requestPointsText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(1) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span'
    },
    /** css selector for receive points text */
    receivePointsText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(1) > div > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span'
    },
    /** css selector for new purchase text */
    newPurchasesText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(1) > div > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > span > span'
    },
    /** css selector for bee hiring text */
    beeHiringText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(2) > div > div > div > div > h4 > span'
    },
    /** css selector for interaction text */
    interactionsText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(3) > div > div > div > div > h4 > span'
    },
    /** css selector for system text */
    systemText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(4) > div > div > div > div > h4 > span'
    },
    /** css selector for balance text */
    balancesText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(5) > div > div > div > div > h4 > span'
    },
    /** css selector for on error text */
    onErrorText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span'
    },
    /** css selector for on delivery text */
    onDeliveryText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span'
    },
    /** css selector for on receipt text */
    onReceiptText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span'
    },
    /** css selector for on viewed text */
    onViewedText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > span > span'
    },
    /** css selector for hide confirmation text */
    hideConfirmationText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(5) > td:nth-child(1) > span > span'
    },

    /** css selector for offer text */
    offersText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(3) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span'
    },
    /** css selector for survay text */
    surveysText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(3) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span'
    },
    /** css selector for files text */
    filesText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(3) > div > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(1) > span > span'
    },
    /** css selector for platform update text */
    platformUpdateText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(4) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span'
    },
    /** css selector for expiring balance text */
    expiringBalancesText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(5) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > span'
    },
    /** css selector for credit text */
    creditText: {
      selector: 'div#user-settings-pane-notifications div:nth-child(5) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > span > span'
    }

  }
}
