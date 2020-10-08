var userInbox = {

  /** Function to verify inbox page title */
  pageHeading: function () {
    this.waitForElementPresent('@pageTitle', 30000)
    return this.verify.containsText('@pageTitle', 'Inbox')
  },
  /** Function to naviagte to inbox page */
  pageURL: function () {
    return this.verify.urlContains('/user/inbox')
  },

  /** Function to verify inbox page content
   * @param {css selector = .col-xs-12 > .ReactVirtualized__Table} css selector for title
   * @param {css selector = .inbox-search-tour input.form-control} css selector for search field
   * @param {css selector = input[placeholder="From"]} css selector for from date picker
   * @param {css selector = input[placeholder="To"]} css selector for to date picker
   * @param {css selector = button#dropdown-basic-0 } css selector for filter dropdown butoon
   * @param {css selector = .action-buttons .btn-default} css selector for clear button
   * @param {css selector = .action-buttons .btn-primary} css selector for search button
   * @param {css selector = .action-buttons button:nth-child(1).btn-gray } css selector for delete button
   * @param {css selector = .action-buttons button:nth-child(2).btn-gray} css selector for hire a bee button
   * @param {css selector = .col-xs-12 > .ReactVirtualized__Table} css selector for inbox lisitng
   */
  inboxPageContent: function () {
    this.waitForElementVisible('.col-xs-12 > .ReactVirtualized__Table', 20000)
    this.verify.elementPresent('@searchField', 'Search box is present') // @searchField
    this.verify.elementPresent("@datepickerFromField", 'From datepicker is present')// @datepickerFromField
    this.verify.elementPresent("@datepickerToField", 'To datepicker is present')// @datepickerToField
    this.verify.elementPresent('@filterDropdownButton', 'Filter dropdown button is present')// @filterDropdownButton
    this.verify.elementPresent('@clearButton', 'Clear button is present')// @clearButton
    this.verify.elementPresent('@searchButton', 'Search button is present')// @searchButton
    this.verify.elementPresent('@disabledDeleteButton', 'Delete button is in disabled state by default')// @disabledDeleteButton
    this.verify.elementPresent('@disabledHireAbeeButton', 'Hire a Bee button is in disabled state by default')// @disabledHireAbeeButton
    return this.verify.elementPresent('@inboxListing', 'Inbox listings are present')// @inboxListing
  },

  /** Function to enter keyword in search field
   * @param {css selector = .inbox-search-tour input.form-control} css selector for search field
  */
  enterKeyword: function (searchKeyword) {
    this.waitForElementVisible('.inbox-search-tour input.form-control', 20000)
    return this.setValue('.inbox-search-tour input.form-control', searchKeyword) // @searchField
  },
  /** Function to click on seach and wait for loader to be displayed
   * @param {css selector = .loader } css selector for loader
   */
  clickSearchButton: function () {
    this.click('@searchButton') // @searchField
    return this.waitForElementNotPresent('.loader', 20000)
  },

  /** Function to verify search result
   * @param {css selector = .ReactVirtualized__Table__row:first-child .file-column-name} css selecor of the result by title
   */
  searchResultForTitle: function () {
    this.getAttribute('@searchField', 'value', function(result) {
      this.verify.containsText('.ReactVirtualized__Table__row:first-child .file-column-name', result.value)
    })
    return this
  },

  /** Function to verify search result
   * @param {css selector = .ReactVirtualized__Table__row:first-child .table__click-wrapper > div > div:first-child} css selecor of the result by xcoobee id
   */
  searchResultForXBid: function (resultKeyword) {
    return this.verify.containsText('.ReactVirtualized__Table__row:first-child .table__click-wrapper > div > div:first-child ', resultKeyword)
  },

  /** Function to pick to and from date from the date picker
   */
  pickFromAndToDate: function () {
    this.click('@datepickerToField')
    this.waitForElementVisible('.react-datepicker__day--today', 20000)
    this.click('.react-datepicker__day--today')
    this.click('@datepickerFromField')
    this.waitForElementVisible('.react-datepicker__month-container')
    return this.getAttribute('.react-datepicker__day--today', 'aria-label', function (result) {
      this.waitForElementVisible('.react-datepicker__navigation--previous', 20000)
      this.click('.react-datepicker__navigation--previous')
      this.waitForElementVisible('.react-datepicker__navigation--previous', 20000)
      this.click('.react-datepicker__navigation--previous')
      this.click('div[aria-label=' + result.value + ']')
    })
  },

  getXcoobeeId: function() {
    this.waitForElementVisible('@firstXcoobeeIdPresent', 20000)
    this.getText('@firstXcoobeeIdPresent', function(result) {
      this.globals.testdata.inboxXcoobeeId = result.value
    })
    return this
  },

  enterLastFileName: function() {
    this.api.pause(10000)
    this.getText('@lastInboxItem', function(result) {
      this.waitForElementVisible('.inbox-search-tour input.form-control', 20000)
      this.setValue('.inbox-search-tour input.form-control', result.value) // @searchField
    })
    return this
  }

  /* inboxPageContent: function() {
    this.waitForElementVisible("@pageTitle", 20000)
    return this.api.element("css selector", ".col-xs-12 > .ReactVirtualized__Table", function(result) { //@inboxListing
      if(result.status != -1){ //if element exists
        this.verify.elementPresent(".inbox-search-tour input.form-control", "Search box is present") //@searchField
        .verify.elementPresent("input[placeholder="From"]", "From datepicker is present")//@datepickerFromField
        .verify.elementPresent("input[placeholder="To"]", "To datepicker is present")//@datepickerToField
        .verify.elementPresent("button#dropdown-basic-0", "Filter dropdown button is present")//@filterDropdownButton
        .verify.elementPresent(".action-buttons .btn-default", "Clear button is present")//@clearButton
        .verify.elementPresent(".action-buttons .btn-primary", "Search button is present")//@searchButton
        .verify.elementPresent(".action-buttons button:nth-child(1).btn-gray", "Delete button is in disabled state by default")//@disabledDeleteButton
        .verify.elementPresent(".action-buttons button:nth-child(2).btn-gray", "Hire a Bee button is in disabled state by default")//@disabledHireAbeeButton
        .verify.elementPresent(".col-xs-12 > .ReactVirtualized__Table", "Inbox listings are present")//@inboxListing
      }
      else{//if element doesn"t exist
        this.waitForElementVisible(".text-center>h3>span", 7000) //@emptyInboxMessageContainer
        this.verify.elementPresent(".text-center>h3>span","empty Inbox message container is present") //@emptyInboxMessageContainer
        this.verify.containsText(".text-center>h3>span","You have no items in your inbox.")
        this.verify.containsText(".text-center>button","Dashboard")
        this.verify.elementPresent(".text-center>button", "Dashboard Button is present") //@dashboardButton

      }
    });

  } */
}

module.exports = {
  commands: [userInbox],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/inbox'
  },

  elements: {
    /** css selector for inbox page title */
    pageTitle: {
      selector: 'h2 span'
    },
    /** css selector for search field */
    searchField: {
      selector: '.inbox-search-tour input.form-control'
    },
    /** css selector for from date picker */
    datepickerFromField: {
      selector: "input[placeholder='From']"
    },
    /** css selector for to date picker */
    datepickerToField: {
      selector: "input[placeholder='To']"
    },
    /** css selector for filter dropdown  */
    filterDropdownButton: {
      selector: 'button#dropdown-basic-0'
    },
    /** css selector for clear button */
    clearButton: {
      selector: '.action-buttons .btn-default'
    },
    /** css selector for search button */
    searchButton: {
      selector: '.action-buttons .btn-primary'
    },
    /** css selector for disabled delete button */
    disabledDeleteButton: {
      selector: '.action-buttons button:nth-child(1).btn-gray'
    },
    /** css selector for disbaled hire bee button */
    disabledHireAbeeButton: {
      selector: '.action-buttons button:nth-child(2).btn-gray'
    },
    /** css selector for inbox table */
    inboxListing: {
      selector: '.col-xs-12 > .ReactVirtualized__Table'
    },
    /** css selector for dashboard button */
    dashboardButton: {
      selector: '.text-center>button>span'
    },
    /** css selector for empty inbox message */
    emptyInboxMessageContainer: {
      selector: '.text-center>h3>span'
    },

    // css selector for first xcoobee id in the inbox list
    firstXcoobeeIdPresent: {
      selector: '.ReactVirtualized__Grid__innerScrollContainer > div:nth-child(1) .table__click-wrapper > div > div:nth-child(1) '
    },

    // css selector for last item in inbox page
    lastInboxItem: {
      selector: '.ReactVirtualized__Table__row:last-child .file-column-name'
    }
  }
}
