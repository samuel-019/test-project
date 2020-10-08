var userConsentCenterContacts = {

  /** Functio to check if contact page title is cpresent */
  contactsPageTitle: function () {
    this.waitForElementVisible('@pageTitle', 5000)
      .getText('@pageTitle', function (titleText) {
        var pageTitleText = titleText.value
        this.verify.elementPresent('h2', 'Page title is ' + pageTitleText)
      })
    return this
  },

  /** Function to verify contact page title */
  contactsTab: function () {
    this.waitForElementVisible('@contactsTabTitle', 5000)
      .getText('@contactsTabTitle', function (tabText) {
        var tabTitleText = tabText.value
        this.verify.elementPresent('#consent-center-tab-contacts', 'Tab title is ' + tabTitleText)
      })
    return this
  },

  /** Function to verify if contact page is active */
  activeTab: function () {
    this.waitForElementVisible('@activeContactsTab', 5000)
      .verify.elementPresent('@activeContactsTab', 'Contacts tab is active')
    return this
  },

  /** Function to verify if content is present on contact page or not and message is displayed to user when contact page is empty */
  contactsPage: function () {
    this.waitForElementVisible('@contactsPageContent', 10000)
    this.api.pause(4000)// waiting to check contacts state
    this.api.element('css selector', '#consent-center-pane-contacts .ReactVirtualized__Grid', function (result) { // @contactsList
      if (result.status !== -1) { // contacts are present
        this.verify.visible('#consent-center-pane-contacts .ReactVirtualized__Grid', 'Contacts are present') // @contactsList
          .verify.visible('#consent-center-pane-contacts .xb-left-inner-addon', 'Search field is present') // @searchField
          .verify.visible('#consent-center-pane-contacts .btn-toolbar button:nth-child(1)', 'Clear search button is present') // @clearButton
          .verify.visible('#consent-center-pane-contacts .btn-toolbar button:nth-child(2)', 'Search button is present')// @searchButton
          .verify.visible('#consent-center-pane-contacts .dropdown.disabled.btn-group #bulk-actions-dropdown', 'Bulk Actions dropdown button is present and inactive by default')// @bulkActionsDropdownButtonInactive
          .verify.visible('#consent-center-pane-contacts button:nth-child(4).flex-filter-item.right.btn-default', 'View Contact button is present')// @viewContactButton
          .verify.visible('#consent-center-pane-contacts button:nth-child(6).flex-filter-item.right.btn-default', 'Download CSV button is present')// @downloadCsvButto
          .verify.visible('#consent-center-pane-contacts .ReactVirtualized__Table__headerRow > div', 'Search listing header sort columns are present')// @contactsListingHeaderColumns
      } else { // Empty contacts
        this.verify.visible('.margin-top-10>h3>span', 'Empty contacts text container is present')
          .getText('.margin-top-10>h3>span', function (text) {
            this.verify.equal(text.value, 'Please set your contact data. Once complete, you can manage sharing and track history.')
          })
      }
    })

    return this
  }
}

module.exports = {
  commands: [userConsentCenterContacts],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/consentCenter/contacts'
  },

  elements: {
    /** css selector for contact page title */
    pageTitle: {
      selector: 'h2'
    },
    /** css selector for contact tab title */
    contactsTabTitle: {
      selector: '#consent-center-tab-contacts'
    },
    /** css selector for active contact page */
    activeContactsTab: {
      selector: '.nav-tabs li:nth-child(3) a[aria-selected=true]'
    },
    /** css select forr contact page content block */
    contactsPageContent: {
      selector: '.tab-content'
    },
    /** css selector for search field */
    searchField: {
      selector: '#consent-center-pane-contacts .xb-left-inner-addon'
    },
    /** css selector for clear button */
    clearButton: {
      selector: '#consent-center-pane-contacts .btn-toolbar button:nth-child(1)'
    },
    /** css selector for search button */
    searchButton: {
      selector: '#consent-center-pane-contacts .btn-toolbar button:nth-child(2)'
    },
    /** css selector for contact list header columns */
    contactsListingHeaderColumns: {
      selector: '#consent-center-pane-contacts .ReactVirtualized__Table__headerRow > div'
    },
    /** css selector for contact list table */
    contactsList: {
      selector: '#consent-center-pane-contacts .ReactVirtualized__Grid'
    },
    /** css selector for bulk action dropdownwhen active */
    bulkActionsDropdownButtonActive: {
      selector: '#consent-center-pane-contacts .dropdown.btn-group #bulk-actions-dropdown'
    },
    /** css selector for bulk action dropdownwhen inactive */
    bulkActionsDropdownButtonInactive: {
      selector: '#consent-center-pane-contacts .dropdown.disabled.btn-group #bulk-actions-dropdown'
    },
    /** css selector for view contact button */
    viewContactButton: {
      selector: '#consent-center-pane-contacts button:nth-child(4).flex-filter-item.right.btn-default'
    },
    /** css selector for download button */
    downloadCsvButton: {
      selector: '#consent-center-pane-contacts button:nth-child(6).flex-filter-item.right.btn-default'
    },
    /** css selector for empty message */
    emptyContactTextContainer: {
      selector: '.margin-top-10>h3>span'
    }
  }
}
