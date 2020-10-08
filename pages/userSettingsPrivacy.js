var userSettingsPrivacyCommands = {

  /** Function checks if privacy tab is present */
  privacyTab: function () {
    this.waitForElementVisible('@userSettings', 10000)
    this.waitForElementVisible('@privacyTab', 10000)
    return this.verify.elementPresent('@privacyTab', 'Privacy tab is present')
  },

  /** Function checks if privacy tab is present on the 5th child element or on 6th child element
  * @param {css selector = .nav-tabs li:nth-child(5) } css selector when checking for privacy tab for free subscription
  * @param {css selector = .nav-tabs li:nth-child(6) } css selector when checking for privacy tab for paid subscription
  */
  privacyTabStates: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.api.element('css selector', '.nav-tabs li:nth-child(5)', function (result) {
      if (result.status !== -1) {
        this.verify.containsText('.nav-tabs li:nth-child(5)', 'Privacy')
      } else {
        this.waitForElementVisible('.nav-tabs li:nth-child(6)', 10000)
        this.verify.containsText('.nav-tabs li:nth-child(6)', 'Privacy')
      }
      return this
    })
  },

  /** function checks if privacy tab title is present
  * @param {css selector = #user-settings-pane-privacy > div > div } css selector for settings page
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(" + settings + ") h4} css selector check if privacy tab is present
  */
  privacySettings: function () {
    this.waitForElementVisible('@userSettings', 10000)
    this.api.elements('css selector', '#user-settings-pane-privacy > div > div', function (result) {
      var settingsCount = result.value.length
      for (var settings = 1; settings <= settingsCount; settings++) {
        var settingsTitle = '#user-settings-pane-privacy > div > div:nth-child(' + settings + ') h4'
        this.getText(settingsTitle, function (titleText) {
          var settingsTitleText = titleText.value
          this.verify.elementPresent(settingsTitle, settingsTitleText + ' setting is present')
        })
      }
    })
    return this
  },

  /** Function checks export center content for free user subscription
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>h4 } Export center title css selector
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>span} export center block message css selector
  * @param {css selector = #user-settings-pane-privacy div:nth-child(1) > div:nth-child(1) > div.col-xs-10 > div >span} css selector for activities text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(1) > div:nth-child(2) > div.col-xs-10 > div >span} css selector for inbox text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(1) > div:nth-child(3) > div.col-xs-10 > div >span} css selector for balance text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(2) > div:nth-child(1) > div.col-xs-10 > div >span} css selector for consent text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(2) > div:nth-child(2) > div.col-xs-10 > div >span} css selector for user-data text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(2) > div:nth-child(3) > div.col-xs-10 > div >span} css selector for contact shares text
  */

  exportCenterFreeUser: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@exportCenterBlockFree', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>h4', 'Export Center')
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>span', 'You can get your data that XcooBee stores on your behalf. Simply toggle any of the toggles below and we will compile and export your data to your inbox. Please download it from there.')
    this.api.pause(5000)
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(1) > div:nth-child(1) > div.col-xs-10 > div >span', 'Activities')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(1) > div:nth-child(2) > div.col-xs-10 > div >span', 'Inbox')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(1) > div:nth-child(3) > div.col-xs-10 > div >span', 'Balances')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(2) > div:nth-child(1) > div.col-xs-10 > div >span', 'Consent')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(2) > div:nth-child(2) > div.col-xs-10 > div >span', 'User - Data')
    return this.verify.containsText('#user-settings-pane-privacy div:nth-child(2) > div:nth-child(3) > div.col-xs-10 > div >span', 'Contact Shares')
  },

  /** Function checks export center content for Paid user subscription
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(4)>div>div>div>h4 } Export center title css selector
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>span} export center block message css selector
  * @param {css selector = #user-settings-pane-privacy div:nth-child(1) > div:nth-child(1) > div.col-xs-10 > div >span} css selector for activities text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(1) > div:nth-child(2) > div.col-xs-10 > div >span} css selector for inbox text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(1) > div:nth-child(3) > div.col-xs-10 > div >span} css selector for balance text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(2) > div:nth-child(1) > div.col-xs-10 > div >span} css selector for consent text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(2) > div:nth-child(2) > div.col-xs-10 > div >span} css selector for user-data text
  * @param {css selector = #user-settings-pane-privacy div:nth-child(2) > div:nth-child(3) > div.col-xs-10 > div >span} css selector for contact shares text
  */
  exportCenterPaidUser: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@exportCenterBlockPaid', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(4)>div>div>div>h4', 'Export Center')
    this.waitForElementVisible('#user-settings-pane-privacy > div > div:nth-child(4)', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(4)>div>div>div>h4', 'Export Center')
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(4)>div>div>div>span', 'You can get your data that XcooBee stores on your behalf. Simply toggle any of the toggles below and we will compile and export your data to your inbox. Please download it from there.')
    this.api.pause(5000)
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(1) > div:nth-child(1) > div.col-xs-10 > div >span', 'Activities')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(1) > div:nth-child(2) > div.col-xs-10 > div >span', 'Inbox')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(1) > div:nth-child(3) > div.col-xs-10 > div >span', 'Balances')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(2) > div:nth-child(1) > div.col-xs-10 > div >span', 'Consent')
    this.verify.containsText('#user-settings-pane-privacy div:nth-child(2) > div:nth-child(2) > div.col-xs-10 > div >span', 'User - Data')
    return this.verify.containsText('#user-settings-pane-privacy div:nth-child(2) > div:nth-child(3) > div.col-xs-10 > div >span', 'Contact Shares')
  },

  /** Function checks blocked sender list block when no records are present
  * it waits for privacy tab to be displays and checks if add button, upload button, download button , content is present or not
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(2)>div>div>div>div>h4>span } css selector for blocked sender list text
  * @param {css selector = #user-settings-pane-privacy div > div:nth-child(2) > div > div > div.row > div > div >span} css selector for text
  */
  blockedSenderListWithoutRecords: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@blockedSenderBlock', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(2)>div>div>div>div>h4>span', 'Blocked Senders List')
    this.waitForElementPresent('@addButton', 'Add button is present')
    this.waitForElementPresent('@uploadButton', 'Upload Button is present')
    this.waitForElementPresent('@downloadButton', 'Download Button is present')
    this.api.pause(5000)
    return this.verify.containsText('#user-settings-pane-privacy div > div:nth-child(2) > div > div > div.row > div > div >span', 'You don\'t have any blocked users')
  },

  /** Function checks if records are present in blocked sender list
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(2)>div>div>div>div>h4>span}css selector for blocked sender list text
  * @param {css selector = #user-settings-pane-privacy div.ReactVirtualized__Table} css selector for table in blocked  sender list
  */
  blockedSenderListwithRecords: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@blockedSenderBlock', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(2)>div>div>div>div>h4>span', 'Blocked Senders List')
    this.api.pause(5000)
    return this.waitForElementPresent('#user-settings-pane-privacy div.ReactVirtualized__Table', 'Blocked sender List is Present')
  },

  /** Function checks if blocked sender list pop is displayed when clicked on add button
  * It checks if pop up modal is visible and checks for pop up modal title,close icon, labels , placeholder text, cancel and submit button are displayed
  * @param {css selector = div.modal-content } css selector for pop up modal
  * @param {css selector = div.modal-content button[type="button"]} css selector for close button
  * @param {css selector = div.modal-header>h4>span} css selector for block user text
  * @param {css selector = label.control-label} css selector for xcoobee id label text
  * @param {css selector = div.modal-content .Select-control}css selector for input field
  * @param {css selector = div.modal-content .Select-control .Select-placeholder} css selector for input field dropdown placeholder text
  * @param {css selector = div.modal-body .btn-default } css selector for cancel button text
  * @param {css selector = div.modal-body button[type="submit"]} css selector for Add button
  */

  blockedSenderListPopUp: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@blockedSenderBlock', 5000)
    this.waitForElementPresent('@addButton', 'Add button is present')
      .click('@addButton')
    this.api.pause(5000)
    this.waitForElementVisible('div.modal-content', 2000)
    this.waitForElementVisible("div.modal-content button[type='button']", 2000)
    this.verify.containsText('div.modal-header>h4>span', 'Block User')
    this.verify.containsText('label.control-label', 'XcooBee ID *')
    this.waitForElementVisible('div.modal-content input[ID*=\'input\']', 2000)
    this.verify.containsText('div.users-input div[class*=\'placeholder\']', "Enter the user's XcooBee ID you would like to block")
    this.verify.containsText('div.modal-body .btn-default', 'Cancel')
    return this.verify.containsText("div.modal-body button[type='submit']", 'Add')
  },

  /** Function checks discoverability block content
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>h4>span } css selector for discoverability text
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>h6>span } css selector for Set whether other users can find you in the directory text
  */
  discoverabilityBlock: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@discoverBlock', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>h4>span', 'Discoverability')
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(3)>div>div>div>h6>span', 'Set whether other users can find you in the directory')
    this.verify.containsText('@hiddenText', 'Hidden')
    this.verify.containsText('@regionText', 'Region')
    return this.verify.containsText('@everywhereText', 'Everywhere')
  },

  /** Function to check privacy block content for paid user
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(1)>div>div>div>div>h4>span } css selector for privacy text
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(1) > td:nth-child(1) > span > span} css selector for Display name text
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(2) > td:nth-child(1) > span > span} css selector for Display country text
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(3) > td:nth-child(1) > span > span} css selector for Display province or state text
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(4) > td:nth-child(1) > span > span} css selector for Display city text
  */
  privacyBlockPaidUser: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@privacyBlock', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(1)>div>div>div>div>h4>span', 'Privacy')
    this.verify.containsText('#user-settings-pane-privacy tr:nth-child(1) > td:nth-child(1) > span > span', 'Display Name')
    this.verify.containsText('#user-settings-pane-privacy tr:nth-child(2) > td:nth-child(1) > span > span', 'Display Country')
    this.verify.containsText('#user-settings-pane-privacy tr:nth-child(3) > td:nth-child(1) > span > span', 'Display Province or State')
    this.verify.containsText('#user-settings-pane-privacy tr:nth-child(4) > td:nth-child(1) > span > span', 'Display City')
  },

  /** Function to check privacy block content for free user
  * @param {css selector = #user-settings-pane-privacy > div > div:nth-child(1)>div>div>div>div>h4>span } css selector for privacy text
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(1) > td:nth-child(1) > span > span} css selector for Display province text
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(2) > td:nth-child(1) > span > span} css selector for Display city text
  */
  privacyBlockFreeUser: function () {
    this.waitForElementVisible('@privacyTab', 10000)
    this.waitForElementVisible('@privacyBlock', 5000)
    this.verify.containsText('#user-settings-pane-privacy > div > div:nth-child(1)>div>div>div>div>h4>span', 'Privacy')
    this.verify.containsText('#user-settings-pane-privacy tr:nth-child(1) > td:nth-child(1) > span > span', 'Display Province or State')
    this.verify.containsText('#user-settings-pane-privacy tr:nth-child(2) > td:nth-child(1) > span > span', 'Display City')
  },

  /** Function checks for tooltip on privacy tab */
  privacyTooltip: function () {
    this.nameTooltip()
    this.countryTooltip()
    this.provinceTooltip()
    this.cityTooltip()
    this.nameCheckboxTooltip()
    this.countryCheckboxTooltip()
    this.provinceCheckboxTooltip()
    this.cityCheckboxTooltip()
    /* this.uploadTooltip()                    //Issue encountered for commented tooltip
    this.downloadTooltip()
    this.hiddenTooltip()
    this.regionTooltip()
    this.everywhereTooltip() */

    return this
  },

  /** Function checks display name tooltip content
  * Move to mouse pointer on display name text and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(1) > td:nth-child(1) > span} css selector for display name
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  nameTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    return this.moveToElement('#user-settings-pane-privacy tr:nth-child(1) > td:nth-child(1) > span ', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Shows your name with your XcooBee Id to other users')
    })
  },

  /** Function checks display country tooltip content
  * Move to mouse pointer on display country text and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(2) > td:nth-child(1) > span} css selector for display country
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  countryTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('#user-settings-pane-privacy tr:nth-child(2) > td:nth-child(1) > span', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Shows your country to other users')
    })
  },

  /** Function checks display province tooltip content
  * Move to mouse pointer on display province text and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(3) > td:nth-child(1) > span} css selector for display province
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  provinceTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('#user-settings-pane-privacy tr:nth-child(3) > td:nth-child(1) > span', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Shows your province or state to other users')
    })
  },

  /** Function checks display city tooltip content
  * Move to mouse pointer on display city text and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(4) > td:nth-child(1) > span} css selector for display city
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  cityTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('#user-settings-pane-privacy tr:nth-child(4) > td:nth-child(1) > span', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Shows your city to other users')
    })
  },

  /** Function checks display name checkbox tooltip content
  * Move to mouse pointer on display name text and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(1) > td:nth-child(2) > span} css selector for display name
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  nameCheckboxTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    return this.moveToElement('#user-settings-pane-privacy tr:nth-child(1) > td:nth-child(2) > span ', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      this.verify.containsText('div.tooltip-inner', 'Shows your name with your XcooBee Id to other users')
    })
  },

  /** Function checks display country checkbox tooltip content
  * Move to mouse pointer on display country checkbox and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(2) > td:nth-child(2) > span} css selector for display country checkbox
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  countryCheckboxTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('#user-settings-pane-privacy tr:nth-child(2) > td:nth-child(2) > span', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Shows your country to other users')
    })
  },

  /** Function checks display province checkbox tooltip content
  * Move to mouse pointer on display province checkbox and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(3) > td:nth-child(2) > span} css selector for display province checkbox
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  provinceCheckboxTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('#user-settings-pane-privacy tr:nth-child(3) > td:nth-child(2) > span', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Shows your province or state to other users')
    })
  },

  /** Function checks display country checkbox tooltip content
  * Move to mouse pointer on display country checkbox and verify tooltip content
  * @param {css selector = #user-settings-pane-privacy tr:nth-child(4) > td:nth-child(2) > span} css selector for display country checkbox
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */

  cityCheckboxTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@privacyBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('#user-settings-pane-privacy tr:nth-child(4) > td:nth-child(2) > span', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Shows your city to other users')
    })
  },

  /** Function checks upload button tooltip content
  * Move to mouse pointer on upload button and verify tooltip content
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */
  uploadTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@blockedSenderBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('@uploadButton', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Upload CSV')
    })
  },

  /** Function checks download button tooltip content
  * Move to mouse pointer on download button and verify tooltip content
  * @param {css selector = div.tooltip-inner} css selector for tooltip
  */

  downloadTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@blockedSenderBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('@downloadButton', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Upload CSV')
    })
  },

  /** Function checks hidden button tooltip content
    * Move to mouse pointer on hiiden  button and verify tooltip content
    * @param {css selector = div.tooltip-inner} css selector for tooltip
  */

  hiddenTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@discoverBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'No one can find you in searches')
    })
  },

  /** Function checks region button tooltip content
   *Move to mouse pointer on region button and verify tooltip content
   *@param {css selector = div.tooltip-inner} css selector for tooltip
  */

  regionTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@discoverBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('@regionText', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'Only people in the same region can find you')
    })
  },

  /** Function checks everywhere button tooltip content
    * Move to mouse pointer on everywhere button and verify tooltip content
    * @param {css selector = div.tooltip-inner} css selector for tooltip
  */

  everywhereTooltip: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@discoverBlock', 30000)
    this.moveToElement('body', 0, 0)
    this.moveToElement('@everywhereText', 0, 0, function () {
      this.waitForElementPresent('span[aria-describedby]', 60000, 'Tooltip has appeared')
      this.waitForElementVisible('div.tooltip-inner', 60000)
      return this.verify.containsText('div.tooltip-inner', 'All XcooBee users can find you')
    })
  },

  /** Function checks export center block content when toggle is enabled
    * click and enable to export center toggle option to view the message and click again to disbale to toggle
    * @param {css selector = div.react-toggle-track} css selector for toggle
    * @param {css selector = .export-center__processing-message } css selector
    * @param {css selector = .export-center__processing-message>span","One or more items scheduled for export. } css selector for message
  */

  exportCenterMessage: function () {
    this.waitForElementVisible('@privacyTab', 30000)
    this.waitForElementVisible('@exportCenterBlockFree', 20000)
    this.api.pause(5000)
    this.waitForElementVisible('div.react-toggle-track', 5000)
      .click('div.react-toggle-track')
    this.waitForElementVisible('.export-center__processing-message', 5000)
    this.api.pause(5000)
    this.verify.containsText('.export-center__processing-message>span', 'One or more items scheduled for export. They will be in your inbox within 24 hours')
      .click('div.react-toggle-track')
    this.api.pause(3000)
  }

}

module.exports = {
  commands: [userSettingsPrivacyCommands],

  /** Function maximizes window and navigates to privacy tab */
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/settings/privacy'
  },

  elements: {
    /** Settings page css selector */
    userSettings: {
      selector: '.user-settings'
    },
    /** css selector for privacy tab */
    privacyTab: {
      selector: '.nav-tabs li:nth-child(5)'
    },
    /** css selector for export center block for free subscription */
    exportCenterBlockFree: {
      selector: '#user-settings-pane-privacy > div > div:nth-child(3)>div'
    },
    /** css selector for export center for paid subscription */
    exportCenterBlockPaid: {
      selector: '#user-settings-pane-privacy > div > div:nth-child(4)>div'
    },
    /** css selector for blocked sender list */
    blockedSenderBlock: {
      selector: '#user-settings-pane-privacy > div > div:nth-child(2)>div'
    },
    /** css selector for discoverability block */
    discoverBlock: {
      selector: '#user-settings-pane-privacy > div > div:nth-child(3)>div'
    },
    /** css selector for upload button */
    uploadButton: {
      selector: "#user-settings-pane-privacy div.flex-filter-item button[type='button']:nth-child(1)"
    },
    /** css selector for download button */
    downloadButton: {
      selector: "#user-settings-pane-privacy div.flex-filter-item button[type='button']:nth-child(2)"
    },
    /** css selector for add button */
    addButton: {
      selector: "div#user-settings-pane-privacy button[type='button'] span"
    },
    /** css selector for hidden text */
    hiddenText: {
      selector: 'div.btn-group .btn.btn-default:nth-child(1)'
    },
    /** css selector for region button text */
    regionText: {
      selector: 'div.btn-group .btn.btn-default:nth-child(2)'
    },
    /** css selector for everywhere button text */
    everywhereText: {
      selector: 'div.btn-group .btn.btn-default:nth-child(3)'
    },
    /** css selector for privacy block */
    privacyBlock: {
      selector: '#user-settings-pane-privacy > div > div:nth-child(1)>div'
    }
  }
}
