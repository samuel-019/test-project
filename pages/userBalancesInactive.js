var userBalancesActiveCommands = {

  /** Function to verify past balance tab is present */
  pastBalancesTab: function () {
    this.waitForElementVisible('@pastTab', 10000)
      .verify.elementPresent('@pastTab', 'Past/Inactive balances tab is present')
    return this
  },
  /** Function to verify if balance is present and displayed to user in past balance tab
   * If no balance is present then message should be dispalyed
   * @param {css selector = .tab-content > div:nth-child(2) > div > div.ReactVirtualized__Table } css selector for balance tab
   * @param {css selector = .tab-content > div:nth-child(2) .ReactVirtualized__Table__headerRow > div} css selector for table header row
   * @param {css selector = .text-center>h3>span } css selector for text message
   */

  balancesColumnNames: function () {
    this.waitForElementVisible('.tab-content > div:nth-child(2) > div > div.ReactVirtualized__Table', 10000)
    this.api.element('css selector', '.tab-content > div:nth-child(2) > div > div.ReactVirtualized__Table', function (result) { // @balancesTableColumns
      if (result.value.ELEMENT) { // if element exists
        this.verify.elementPresent('.tab-content > div:nth-child(2) > div > div.ReactVirtualized__Table', 'Table is present')
          .elements('css selector', '.tab-content > div:nth-child(2) .ReactVirtualized__Table__headerRow > div', function (result) {
            var tabCount = result.value.length

            for (var count = 1; count <= tabCount; count++) {
              var columnNames = '.tab-content > div:nth-child(2) .ReactVirtualized__Table__headerRow > div:nth-child(' + count + ') .text'
              this.getText(columnNames, function (title) {
                var columnTitleText = title.value
                this.verify.elementPresent(columnNames, columnTitleText + ' column is present')
              })
            }
          })
      } else {
        this.waitForElementVisible('.text-center>h3>span', 7000) // empty text not verified since multi language @emptyBalancesContaine
          .verify.elementPresent('.text-center>h3>span', 'empty past balances message container is present')// @emptyBalancesContaine
      }
    })
    return this
  },

  /** Function to verify if balance is present in the past balance tab or not */
  inactiveStates: function () {
    this.waitForElementVisible('.tab-content > div:nth-child(2)  span', 7000)
    this.api.element('css selector', '.tab-content > div:nth-child(2)  span', function (result) {
      if (result.status !== -1) {
        this.verify.containsText('.tab-content > div:nth-child(2) span', 'You have no past balances.')
      } else {
        this.balancesColumnNames()
      }
      return this
    })
  }
}

module.exports = {
  commands: [userBalancesActiveCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/balances/inactive'
  },

  elements: {
    /** css selector for past tab */
    pastTab: {
      selector: '.nav-tabs li:nth-child(2)'
    },
    /** css selector for balance table */
    balancesTableColumns: {
      selector: '.tab-content > div:nth-child(2) > div > div.ReactVirtualized__Table'
    },
    /** css selector for table */
    userBalances: {
      selector: '.tab-content > div:nth-child(2) div.ReactVirtualized__Table__Grid'
    },
    /** css selector for txt message */
    emptyBalancesContainer: {
      selector: '.text-center>h3>span'
    }

  }
}
