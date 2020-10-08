var userConsentCenterData = {
  /** Function to verify mydata page title
   * @param {css selector = div#root h2 > span} css selector for mydata page title
   */
  userDataPageTitle: function () {
    this.waitForElementVisible('@pageTitle', 10000)
      .getText('@pageTitle', function (titleText) {
        var pageTitleText = titleText.value
        this.verify.elementPresent('div#root h2 > span', 'Page title is ' + pageTitleText)
      })
    return this
  },

  /** Function to verify my data page content when no data is present */
  userDataHeaderElement: function () {
    this.waitForElementVisible('@pageHeaderText', 5000)
    this.verify.containsText('@pageHeaderText', 'My Data')
    this.waitForElementPresent('@refresh', 5000)
    this.waitForElementPresent('@close', 5000)
  },

  /** Function to verify my data table when data is present
   *@param {css selector = div.ReactVirtualized__Table } css selector for my data table
   *@param {css selector = div.ReactVirtualized__Table__headerRow > div} css selector for table header
   */
  userDataTable: function () {
    this.waitForElementVisible('div.ReactVirtualized__Table', 10000)
    this.api.element('css selector', 'div.ReactVirtualized__Table', function (result) { // @myDataTableColumns
      if (result.value.ELEMENT) { // if element exists
        this.verify.elementPresent('div.ReactVirtualized__Table', 'Table is present')
          .elements('css selector', 'div.ReactVirtualized__Table__headerRow > div', function (result) {
            var tabCount = result.value.length
            for (var count = 1; count <= tabCount; count++) {
              var columnNames = 'div.ReactVirtualized__Table__headerRow > div:nth-child(' + count + ')'
              this.getText(columnNames, function (title) {
                var columnTitleText = title.value
                this.verify.elementPresent(columnNames, columnTitleText + ' column is present')
              })
            }
          })
      } else {
        this.waitForElementVisible('div.ReactVirtualized__Table__headerRow', 7000)
      }
    })
    return this
  },

  /** Function to verify my data table content is present or not
   * @param {css selector = div.ReactVirtualized__Table }css selector for table
   */
  userDataTableButtons: function () {
    this.waitForElementVisible('div.ReactVirtualized__Table', 10000)
    this.waitForElementVisible('@infoIcon', 2000, 'Info Icon is displayed')
    this.waitForElementVisible('@deleteIcon', 2000, 'Delete Icon is displayed')
    this.waitForElementVisible('@editIcon', 2000, 'Edit Icon is displayed')
    return this.waitForElementVisible('@extendIcon', 2000, 'Extend Icon is displayed')
  }
}

module.exports = {
  commands: [userConsentCenterData],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/data'
  },

  elements: {
    /** css selector for page title */
    pageTitle: {
      selector: 'div#root h2 > span'
    },
    /** css selector for pag header  */
    pageHeaderText: {
      selector: 'div#root h4 > span'
    },
    /** css selector for refresh button */
    refresh: {
      selector: 'div#root li:nth-child(1) > a > img'
    },
    /** CSS selector for close button */
    close: {
      selector: 'div#root li:nth-child(2)'
    },
    /** CSS selector for info icon */
    infoIcon: {
      selector: '.ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1) .active-consent-actions > div:nth-child(1) button'
    },
    /** CSS selector for delete icon */
    deleteIcon: {
      selector: '.ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1) .active-consent-actions > div:nth-child(2) button'
    },
    /** CSS selector for edit icon */
    editIcon: {
      selector: '.ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1) .active-consent-actions > div:nth-child(3) button'
    },
    /** css selector for extend icon */
    extendIcon: {
      selector: ".ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1) .active-consent-actions > div:nth-child(4) button"
    }

  }
}
