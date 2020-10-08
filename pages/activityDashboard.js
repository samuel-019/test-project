var dashboardActivity = {
  verifyActivtySectionIsPresent: function () {
    this.api.pause(8000)
    this.getLocationInView('@activitySection')
    this.waitForElementVisible('@activitySection', 5000)
    return this.verify.visible('@activitySection')
  },

  verifyMoreButtonIsPresent: function () {
    this.api.pause(8000)
    this.waitForElementVisible('@moreButton', 2000)
    return this.verify.visible('@moreButton')
  },

  verifyMoreButtonClick: function () {
    this.click('@moreButton')
    this.api.pause(4000)
    this.waitForElementVisible('@activityHistory', 5000)
    return this.verify.visible('@activityHistory')
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
      selector: '.activity-tour .slick-track'
    },
    moreButton: {
      selector: '.activity-tour .flex-filter-item.right button'
    },
    activityHistory: {
      selector: '.container'
    },
    activitySlider: {
      selector: '.slider-arrow.slider-arrow--right.hidden-xs.hidden-sm '
    },
    overlayChat: {
      selector: '.modal-content'

    },
    activityCard: {
      selector: '.slick-track>div:nth-child(1) .activity-card.center-block'
    },

    activityCardDateTime: {
      selector: '.slick-track>div:nth-child(1) .col-xs-6.text-gray.vertical-align-bottom'
    },
    activityCardDivider: {
      selector: '.slick-track>div:nth-child(1) .activity-cell-divider'
    },

    activitySvgImage: {
      selector: '.slick-track>div:nth-child(1) .icon-svg'
    },

    leftSliderImage: {
      selector: '.activity-tour .slider-arrow__img.slider-arrow__img--left'
    },

    feedbackButton: {
      selector: '.SlackFeedback--trigger'
    },

    feedbackFormHeader: {
      selector: '.SlackFeedback--header'
    },
    feedbackFormTabs: {
      selector: '.SlackFeedback--tabs'
    },
    feedbackFormTextArea: {
      selector: '.SlackFeedback--textarea'
    },
    feedbackFormSubmitButton: {
      selector: 'button.submit'
    },
    feedbackFormTypeHeader: {
      selector: '.SlackFeedback--input+.SlackFeedback--label'
    },
    feedbackFormMessageHeader: {
      selector: '.SlackFeedback--tabs+label'
    },
    feedbackFormFeatureTab: {
      selector: '.SlackFeedback--tabs  li:nth-child(2)'
    },
    feedbackFormImprovementTab: {
      selector: '.SlackFeedback--tabs  li:nth-child(3)'
    }
  }
}
