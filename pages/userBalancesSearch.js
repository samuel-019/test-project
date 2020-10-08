var userBalancesSearchCommands = {

  /** Function to verify if search balances tab is present */
  searchBalancesTab: function () {
    this.waitForElementVisible('@searchTab', 10000)
      .verify.elementPresent('@searchTab', 'Search balances tab is present')
    return this
  },

  /** function to verify if user can set and clear value in search field */
  searchUserInput: function (searchKeyword) {
    this.waitForElementVisible('@searchField', 60000)
      .verify.elementPresent('@searchField', 'Search field is present')
      .clearValue('@searchField')
      .setValue('@searchField', searchKeyword)
    return this
  },

  /** Function to press key */
  pressEnterKey: function () {
    this.api.keys('\uE007')
    return this.waitForElementNotPresent('div.spinner', 60000)
  },
  /** Function to click on search button */
  clickSearchButton: function () {
    this.waitForElementVisible('@searchButtonActive', 5000)
      .click('@searchButtonActive', function () {
        this.waitForElementNotPresent('div.spinner', 60000)
      })
    return this
  },

  hitEnterKey: function () {
    this.api.keys('\uE007')
    return this.waitForElementNotPresent('@searchSpinner', 180000)
  },

  /** Function to verify if result are displayed or not
   * @param {css selector = .tab-content > div:nth-child(3) > div.row > div > div > div.ReactVirtualized__Table } css selector for table
   * @param {css selector = .loadedContent>h3.text-center} css selector for text message
   */

  verifySearchResults: function () {
    this.waitForElementPresent('.tab-content > div:nth-child(3) > div.row > div > div > div.ReactVirtualized__Table', 30000)
    this.api.element('css selector', '.tab-content > div:nth-child(3) > div.row > div > div > div.ReactVirtualized__Table', function (result) { // @inboxListing
      if (result.status !== -1) { // if element exists
        console.log('results are available')
      } else { // if element doesn"t exist
        this.waitForElementVisible('.loadedContent>h3.text-center', 60000, 'no search results found')// @searchMessage
      }
    })
    return this
  }
}

module.exports = {
  commands: [userBalancesSearchCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/balances/search'
  },

  elements: {
    /** css selector for search tab */
    searchTab: {
      selector: '.nav-tabs li:nth-child(3)'
    },
    /** css selector for search field */
    searchField: {
      selector: 'input.form-control'
    },
    /** css selector for search button  */
    searchButtonActive: {
      selector: '.flex-filter-item button.btn-primary'
    },
    /** css selector for search message */
    searchMessage: {
      selector: '.loadedContent>h3.text-center'
    },
    /** css selector for search result */
    searchResults: {
      selector: '.tab-content > div:nth-child(3) > div.row > div > div > div.ReactVirtualized__Table'
    },
    /** css selector for spinner */
    searchSpinner: {
      selector: 'div.spinner'
    }
  }
}
