
var ActivityHistory = {
  verifyElementsPresent: function () {
    /** Function to verify activity history title is visible */
    return this.waitForElementVisible('@activityRecordTable', 7000)
      .verify.visible('@activityRecordTable')
      .getText('@h2Title', function (result) {
        this.verify.equal(result.value, 'Activity History')
      })
  }

}

module.exports = {
  commands: [ActivityHistory],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {
    activityRecordTable: {
      selector: 'div.row .col-xs-12'
    },

    h2Title: {
      selector: 'h2'
    }

  }

}
