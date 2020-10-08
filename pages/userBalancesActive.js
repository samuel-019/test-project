var userBalancesActiveCommands = {

  /** Function to verify if active tab is present in balances */
  activeBalancesTab: function () {
    this.waitForElementVisible('@activeTab', 10000)
      .verify.elementPresent('@activeTab', 'Active balances tab is present')
    return this
  },

  /** Function to verify balances present in active tab
   *@param {css selector = .tab-content > div:nth-child(1) .ReactVirtualized__Table__headerRow > div } css selector for table header
   */

  balancesColumnNames: function () {
    this.waitForElementVisible('@balancesTableColumns', 5000)
      .api.elements('css selector', '.tab-content > div:nth-child(1) .ReactVirtualized__Table__headerRow > div', function (result) {
        var tabCount = result.value.length
        for (var count = 1; count <= tabCount; count++) {
          var columnNames = '.tab-content > div:nth-child(1) .ReactVirtualized__Table__headerRow > div:nth-child(' + count + ') .text'
          this.getText(columnNames, function (title) {
            var columnTitleText = title.value
            this.verify.elementPresent(columnNames, columnTitleText + ' column is present')
          })
        }
      })
    return this
  },

  /** Function verifies if balance is present in active balance */
  activeBalances: function () {
    this.waitForElementVisible('@balancesTableColumns', 5000)
      .verify.elementPresent('@userBalances', 'User has Active Balances')
  }
}

module.exports = {
  commands: [userBalancesActiveCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/balances/active'
  },

  elements: {
    /** css selector for active tab */
    activeTab: {
      selector: '.nav-tabs li:nth-child(1)'
    },
    /** css selector for balance table */
    balancesTableColumns: {
      selector: '.tab-content > div:nth-child(1) > div > div.ReactVirtualized__Table'
    },
    /** css selector for balcne table header */
    userBalances: {
      selector: '.tab-content > div:nth-child(1) div.ReactVirtualized__Table__Grid'
    }
  }
}
