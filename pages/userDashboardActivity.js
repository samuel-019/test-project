
var dashboardActivity = {

  moveToActivity: function () {
    this.waitForElementVisible('@activitySection', 5000)
    return this.moveToElement('@activitySection', 10, 10)
  },

  verifyActivtySection: function () {
    return this.waitForElementVisible('@activitySection', 5000)

      .verify.visible('@activitySection')
      .verify.visible('@more')
      .verify.visible('@activityHistory')
      .getText('@activitySubheading', function (result) {
        this.verify.equal(result.value, 'Activity')
      })
  },

  clickMoreButton: function () {
    this.moveToElement('@activitySection', 10, 10)
    return this.waitForElementVisible('@more', 4000)
      .getText('@more', function (result) {
        this.verify.equal(result.value, 'More')
      })
      .click('@more')
  },

  cardList: function () {
    this.waitForElementVisible('@activityCard', 4000)
      .api.elements('css selector', 'div.activity-tour div.slick-slide.slick-active', function (result) {
        this.assert.equal(result.value.length, 5)
      })
  },

  clickOnNextButton: function () {
    this.waitForElementVisible('@activitySection', 4000)
    var nextButtonClick = 0
    for (nextButtonClick = 0; nextButtonClick < 5; nextButtonClick++) {
      this.waitForElementVisible('@activitySliderPrev', 4000)
      this.click('@activitySliderNext')
      // this.waitForElementVisible("@activityCardLoader", 10000) spinner that appears on card , Ronald has commented since there is an issue when cards are less need to investigate
      this.api.pause(10000)
      this.verify.visible('@activitySliderPrev')
    }
    return this
  },

  clickOnPrevButton: function () {
    return this.waitForElementVisible('@activitySliderPrev', 4000)
      .click('@activitySliderPrev')
  },

  clickOnCard: function () {
    return this.waitForElementVisible('@activityCard', 4000)
      .click('@activityCard')
  },

  cardModal: function () {
    return this.waitForElementVisible('@activitySliderNext', 4000)
      .verify.visible('@activityCardModal')
  },

  verifyFirstActivityCampaignTitle: function (title) {
    this.pause(40000)
    this.waitForElementVisible('@firstActivityTitle', 20000)
    this.getText('@firstActivityTitle', function (result) {
      const activityTitle = (result.value).replace(/["']/g, '')
      this.assert.equal(activityTitle, title)
    })
    return this
  },

  clickFirstCampaignCard: function () {
    this.waitForElementVisible('@firstActivityTitle', 20000)
    return this.click('@firstActivityTitle')
  },

  enableSaveForReuseToggle: function () {
    this.waitForElementVisible('@saveForReuseToggle', 10000, 'Save for reuse toggle is displayed')
    return this.click('@saveForReuseToggle')
  },

  clickAcceptButton: function () {
    this.waitForElementVisible('@acceptButton', 10000, 'Accept button is present on modal')
    return this.click('@acceptButton')
  },

  clickFinishOnConsentModal: function() {
    this.waitForElementVisible('@finishConsentModal', 10000, 'Consent Step 2 Modal is displayed')
    return this.click('@finishConsentModal')
  },

  clickDeclineButton: function () {
    this.waitForElementVisible('@declineButton', 5000, 'Decline button is present on modal')
    return this.click('@declineButton')
  },

  verifySuccessText: function () {
    this.waitForElementVisible('@successMessageWithoutReuse', 5000, 'Success message is displayed')
    return this.getText('@successMessageWithoutReuse', function (result) {
      this.assert.equal(result.value, 'Thank You !')
    })
  },

  verifyNotificationCount: function () {
    this.waitForElementVisible('@notificationTrayElements', 7000, 'Notification tray displayed')
    return this.expect.elements('@notificationTrayElements').count.to.equal(2)
  },

  verifyNotificationSuccessMessageDisplayed: function () {
    this.waitForElementVisible('@notificationSuccessMessage', 15000)
    return this.getText('@notificationSuccessMessage', function (result) {
      this.assert.equal(result.value, 'Consent successfully Accepted.')
    })
  }

}

module.exports = {
  commands: [dashboardActivity],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl
  },

  elements: {
    activitySection: {
      selector: 'div.activity-tour'
    },
    more: {
      selector: 'div.activity-tour div.flex-filter button.btn'
    },
    activityHistory: {
      selector: '.container'
    },
    activitySliderNext: {
      selector: '.slider-arrow.slider-arrow--right.hidden-xs.hidden-sm'
    },
    activitySliderPrev: {
      selector: 'button.slider-arrow.slider-arrow--left'
    },
    overlayChat: {
      selector: '.modal-content'
    },
    activityCards: {
      selector: 'div.activity-tour div.slick-slide.slick-active'
    },
    activityCardModal: {
      selector: 'div.modal-body'
    },
    activityCard: {
      selector:  '.slick-track>div:nth-child(2) .activity-card.center-block .activity-flex-container'                                                                             //'.slick-track>div:nth-child(1) .activity-card.center-block'
    },
    failedActivityCard: {
      selector: '.slick-track>div:nth-child(3) .col-xs-6.text-gray.vertical-align-bottom'
    },
    activityCardTitle: {
      selector: '.slick-track>div:nth-child(3) .card-title'
    },
    activityCardDateTime: {
      selector: '.slick-track>div:nth-child(3) .col-xs-6.text-gray.vertical-align-bottom'
    },
    activityCardDivider: {
      selector: '.slick-track>div:nth-child(3) .activity-cell-divider'
    },
    activitySvgImage: {
      selector: '.slick-track>div:nth-child(3) .icon-svg'
    },
    leftSliderImage: {
      selector: '.activity-tour .slider-arrow__img.slider-arrow__img--left'
    },
    activityCardLoader: {
      selector: 'div.loader'
    },
    activitySubheading: {
      selector: 'div.activity-tour h4.flex-filter-item span:nth-child(1)'
    },

    // Activity Block Locators

    firstActivityTitle: {
      selector: '.dashboard-slider--activity .slick-track > div:nth-child(1) h5'
    },

    declineButton: {
      selector: '.btn.btn-lg.btn-danger'
    },

    acceptButton: {
      selector: '.btn.btn-lg.btn-success'
    },

    successMessageWithoutReuse: {
      selector: '.text-muted.text-center.margin-bottom-20 span'
    },

    saveForReuseToggle: {
      selector: '.react-toggle.data-toggle--right .react-toggle-thumb'
    },

    notificationSuccessMessage: {
      selector: '.notifications-tr > div:nth-child(2) .notification-message span'
    },

    notificationTrayElements: {
      selector: '.notifications-tr > div'
    },

    finishConsentModal: {
      selector: '.consent-modal__second-step--actions button'
    }

  }
}
