var messageBee = {

  pageURL: function () {
    this.verify.urlContains('/bee/xcoobee_message')
  },

  costDetails: function () {
    this.verify.containsText('@beeCost', 'Bee Cost:  3')
    this.verify.containsText('@beeCostType', 'Cost Type: Per file')
    // this.verify.containsText("@beeFileAllowed", "*")
    this.clickAddlInfo()
    this.verify.containsText('@addlInfo1', 'xcoobee_message')
    this.verify.containsText('@addlInfo2', 'Owner: ~XcooBee')
    this.verify.containsText('@addlInfo3', 'Category: professional')
    this.verify.containsText('@addlInfo4', 'Requires Authorization:\n transaction \n recipients ')
    this.titleToolTip()
    return this.beeEelements()
  },

  clickAddlInfo: function () {
    // this.waitForElementVisible("@advancedInformation",20000 , "advanced Information has been loaded")
    this.click('@advancedInformation')
    return this.waitForElementVisible('@addlInfo1', 20000, 'advanced Information table has been loaded')
  },

  clickHireButton: function () {
    return this.click('@hireButton')
  },

  titleToolTip: function () {
    return this.moveToElement('@beeTitle2', 0, 0, function () {
      this.pause(1000)
      this.getAttribute('.panel-body >.row >div:nth-child(1) a', 'aria-describedby', function (result) {
        this.verify.equal(result.value, 'You can hire the simple message bee to create a memo style message for you. Simply enter the message and the bee will generate a corresponding PDF document that can be send to anyone in the world. The recipient is ensured that there are no viruses or attacks inside your message.')
      })
    })
  },

  beeContent: function () {
    this.pageURL()
    this.waitForElementVisible('@advancedInformation', 20000, 'advanced Information has been loaded')
    // this.waitForElementVisible("@spinner",20000, "Loader was visible")
    this.verify.containsText('@beeTitle', 'Simple Message Bee')
    return this.verify.containsText('@beeDescription', 'You can hire the simple message bee to create a memo style message for you. Simply enter the message and the bee will generate a corresponding PDF document that can be send to anyone in the world. The recipient is ensured that there are no viruses or attacks inside your message.')
  },

  beeEelements: function () {
    this.isVisible('@hireButton', function (result) {
      this.assert.equal(result.value, true)
    })
    this.isVisible('@beeRating', function (result) {
      this.assert.equal(result.value, true)
    })
    this.isVisible('@beeRating', function (result) {
      this.assert.equal(result.value, true)
    })
    this.isVisible('.panel-body img:nth-child(1)', function (result) {
      this.assert.equal(result.value, true)
    })
    return this.isVisible('.panel-body img:nth-child(2)', function (result) {
      this.assert.equal(result.value, true)
    })
  }

}

module.exports = {
  commands: [messageBee],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'bee/xcoobee_message'
  },

  elements: {
    beeTitle: {
      selector: 'div div:nth-child(1) > h4'
    },

    advancedInformation: {
      selector: 'div div:nth-child(2) > h4'
    },

    beeDescription: {
      selector: '.panel-body >.row >div:nth-child(2) p'
    },

    beeCost: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(1) table tr:nth-child(1)'
    },

    beeCostType: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(1) table tr:nth-child(2)'
    },
    beeFileAllowed: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(1) table tr:nth-child(3)'
    },

    addlInfo1: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(2) table tr:nth-child(1)'
    },

    addlInfo2: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(2) table tr:nth-child(2)'
    },
    addlInfo3: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(2) table tr:nth-child(3)'
    },

    addlInfo4: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(2) table tr:nth-child(4)'
    },
    spinner: {
      selector: 'div.spinner'
    },

    hireButton: {
      selector: '.panel-body button'
    },

    beeTitle2: {
      selector: '.panel-body >.row >div:nth-child(1) a'
    },

    beeTitle2attr: {
      selector: 'a[aria-describedby]'
    },

    beeRating: {
      selector: 'div div:nth-child(1)  div.pull-right'
    }
  }
}
