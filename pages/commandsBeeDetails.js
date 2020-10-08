var beeDetailsCommands = {

  verifyUserIntro: function () {
    this.api.pause(8000)
    return this.waitForElementVisible('@userGetStarted', 1000)
      .verify.visible('@userSendFiles')
      .verify.visible('@userTrends')
      .getText('@getStartedButton', function (result) {
        this.verify.equal(result.value, 'Get Started')
        console.log(result.value + ' button is present')
      })
      .getText('@userSendFilesButton', function (result) {
        this.verify.equal(result.value, 'Send files')
        console.log(result.value + ' button is present')
      })
  },

  clickGetStarted: function () {
    this.api.pause(8000)
    return this.waitForElementVisible('@userGetStarted', 1000)
      .getAttribute('@getStartedButton', 'href', function (result) {
        var getUrl = result.value
        console.log(getUrl)
      })
      .click('@getStartedButton')
  },

  beeIcon: function () {
    this.api.pause(8000)
    return this.waitForElementVisible('@beeIcon', 2000)
  },

  clickSendFiles: function () {
    return this.waitForElementVisible('@userSendFiles', 1000)
      .click('@userSendFilesButton')
  },

  beeWizardPage: function () {
    this.api.pause(2000)
    return this.waitForElementVisible('@beeWizardPageTitle', 5000)
  },

  trendsSlider1: function () {
    this.api.pause(10000)
    return this.waitForElementVisible('@userTrends', 2000)
      .getText('.user-dashboard__trends .slick-track > div:nth-child(2) h4', function (text) {
        var slideTitle = text.value
        console.log('<-----' + slideTitle + '----->')
      })
      .getAttribute('@trendsSlide1', 'class', function (result) {
        var slide1 = result.value
        console.log('<-----' + slide1 + ' -' + ' 1st slide is active' + '----->')
      })
      .click('@sliderArrowButton')
  },

  trendsSlider2: function () {
    this.api.pause(3000)
    return this.waitForElementVisible('@userTrends', 2000)
      .getText('.user-dashboard__trends .slick-track > div:nth-child(3) h4', function (text) {
        var slideTitle = text.value
        console.log('<-----' + slideTitle + '----->')
      })
      .getAttribute('@trendsSlide2', 'class', function (result) {
        var slide2 = result.value
        console.log('<-----' + slide2 + ' -' + ' 2nd slide is active' + '----->')
      })
      .click('@sliderArrowButton')
  },

  trendsSlider3: function () {
    this.api.pause(3000)
    return this.waitForElementVisible('@userTrends', 2000)
      .getText('.user-dashboard__trends .slick-track > div:nth-child(4) h4', function (text) {
        var slideTitle = text.value
        console.log('<-----' + slideTitle + '----->')
      })
      .getAttribute('@trendsSlide3', 'class', function (result) {
        var slide3 = result.value
        console.log('<-----' + slide3 + ' -' + ' 3rd slide is active' + '----->')
      })
  }
}

module.exports = {
  commands: [beeDetailsCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + '/user/beesDetail'
  },

  elements: {
    userGetStarted: {
      selector: '.user-dashboard__first-row div:nth-child(1).get-started'
    },

    userSendFiles: {
      selector: '.user-dashboard__first-row div:nth-child(2).get-started'
    },

    userTrends: {
      selector: '.trends-tour'
    },

    getStartedButton: {
      selector: '.user-dashboard__first-row div:nth-child(1).get-started a'
    },

    userSendFilesButton: {
      selector: '.user-dashboard__first-row div:nth-child(2).get-started button'
    },

    beeIcon: {
      selector: '.get-started__bee-icon'
    },

    beeWizardPageTitle: {
      selector: '.bee-wizard__title-container'
    },

    trendsSlide1: {
      selector: '.user-dashboard__trends .slick-track > div:nth-child(2)'
    },

    trendsSlide2: {
      selector: '.user-dashboard__trends .slick-track > div:nth-child(3)'
    },

    trendsSlide3: {
      selector: '.user-dashboard__trends .slick-track > div:nth-child(4)'
    },

    sliderArrowButton: {
      selector: '.user-dashboard__trends button.slider-arrow--right'
    }
  }
}
