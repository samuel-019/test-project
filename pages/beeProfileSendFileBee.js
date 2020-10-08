var SendBee = {

  pageURL: function () {
    this.verify.urlContains('/bee/transfer')
  },

  costDetails: function () {
    this.verify.containsText('@beeCostText', 'Bee Cost:')
    this.verify.containsText('@beeCost', '2')
    this.verify.containsText('@beeCostType', 'Cost Type: Per file')
    this.verify.containsText('@beeFileAllowed', '*')
    this.clickAddlInfo()
    this.verify.containsText('@addlInfo1', 'System Name: transfer')
    this.verify.containsText('@addlInfo2', 'Owner: ~XcooBee')
    this.verify.containsText('@addlInfo3', 'Category: system')
    this.verify.containsText('@addlInfo4', 'Requires Authorization: No')
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
    this.moveToElement('@beeTitle2', 0, 0)
    this.pause(6000)
    return this.getAttribute('.panel-body >.row >div:nth-child(1) a', 'aria-describedby', function (result) {
      this.verify.equal(result.value, 'With the share file (transfer) bee you can send documents securely to any user in the world. Everyone will get a full copy of your document not just a link. If they are not part of XcooBee simply provide their email and we will invite them for you and you get extra points when they sign up.')
    })
  },

  beeContent: function () {
    this.pageURL()
    this.waitForElementVisible('@advancedInformation', 20000, 'advanced Information has been loaded')
    // this.waitForElementVisible("@spinner",20000, "Loader was visible")
    this.verify.containsText('@beeTitle', 'Send File')
    return this.verify.containsText('@beeDescription', 'With the share file (transfer) bee you can send documents securely to any user in the world. Everyone will get a full copy of your document not just a link. If they are not part of XcooBee simply provide their email and we will invite them for you and you get extra points when they sign up.')
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
  commands: [SendBee],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'bee/transfer'
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

    beeCostText: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(1) table tr:nth-child(1)'
    },

    beeCost: {
      selector: '.panel-body >.row >div:nth-child(2) .row div:nth-child(1) table tr:nth-child(1) span:nth-child(2)'
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
