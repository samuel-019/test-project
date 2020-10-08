var twitterBee = {

  pageURL: function () {
    this.verify.urlContains('/bee/xcoobee_twitter_free')
  },

  costDetails: function () {
    this.verify.containsText('@beeCost', 'Bee Cost:  2')
    this.verify.containsText('@beeCostType', 'Cost Type: Per file')
    this.verify.containsText('@beeFileAllowed', 'png, jpeg, jpg, gif')
    this.clickAddlInfo()
    this.verify.containsText('@addlInfo1', 'xcoobee_twitter_free')
    this.verify.containsText('@addlInfo2', 'Owner: ~XcooBee')
    this.verify.containsText('@addlInfo3', 'Category: social')
    this.verify.containsText('@addlInfo4', 'Requires Authorization:\n twitter ')
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
    const beeInfo = 'The Twitter bee will help you post messages to your Twitter feed. Additionally, with paid subscriptions, you can determine watermarks and schedule for this bee.'
    this.moveToElement('@beeTitle2', 0, 0, function () {
      this.pause(1000)
      return this.getAttribute('.panel-body >.row >div:nth-child(1) a', 'aria-describedby', function (result) {
        this.verify.equal(result.value, beeInfo)
      })
    })
  },

  beeContent: function () {
    const beeInfo = 'The Twitter bee will help you post messages to your Twitter feed. Additionally, with paid subscriptions, you can determine watermarks and schedule for this bee.'
    this.pageURL()
    this.waitForElementVisible('@advancedInformation', 20000, 'advanced Information has been loaded')
    // this.waitForElementVisible("@spinner",20000, "Loader was visible")
    this.waitForElementVisible('@beeTitle', 20000, 'Bee Title is displayed')
    return this.verify.containsText('@beeDescription', beeInfo)
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
  commands: [twitterBee],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'bee/xcoobee_twitter_free'
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
