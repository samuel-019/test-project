var userProfileCommands = {

  /** Function to check profile page title
   * @param {css selector = .user-profile > h2 span} css selector for  Profile title
  */
  pageTitle: function () {
    this.waitForElementVisible('@pageTitle', 20000)
      .getText('@pageTitle', function (pageTitleText) {
        var getPageTitle = pageTitleText.value
        this.verify.elementPresent('.user-profile > h2 span', 'Page title is ' + getPageTitle)
      })
    return this
  },

  /** Function to chekc if profile image is displayed
   * @param {css selector = .center-block.img-circle} css selector for user profile image
   */
  userProfileImage: function () {
    this.waitForElementVisible('@userProfileImage', 10000)
      .getAttribute('.center-block.img-circle', 'src', function (result) {
        var getDefaultImage = result.value
        this.verify.attributeContains('.center-block.img-circle', 'src', getDefaultImage)
      })
    return this
  },

  /** Function to verify if xcoobee id is correct */
  xcoobeeId: function (Id) {
    this.waitForElementVisible('@xcoobeeId', 10000)
      .getText('@xcoobeeId', function (text) {
        var getXcoobeeId = text.value
        this.verify.equal(getXcoobeeId, Id)
      })
    return this
  },

  /** Function to verify user ratings */
  usersRatings: function () {
    this.waitForElementVisible('@ratings', 10000)
    this.api.elements('css selector', ".star-list img[src='/static/media/star.23739007.svg']", function (result) {
      var starRatings = result.value.length
      if (starRatings <= 1 && starRatings !== 0) {
        this.verify.elementPresent(".star-list img[src='/static/media/star.23739007.svg']", 'User has ' + starRatings + ' rating')
      } else
      if (starRatings > 1 && starRatings !== 0) {
        this.verify.elementPresent(".star-list img[src='/static/media/star.23739007.svg']", 'User has ' + starRatings + ' ratings')
      } else {
        this.verify.elementNotPresent(".star-list img[src='/static/media/star.23739007.svg']", 'User has ' + starRatings + ' ratings')
      }
    })
    return this
  },

  /** Function to verify if user name is displayed on profile page
   * @param {css selector = .col-xs-10.word-wrap h4} css selector for username
  */
  userFirstLastName: function () {
    this.waitForElementVisible('@firstLastName', 10000)
      .getText('@firstLastName', function (name) {
        var firstLastName = name.value
        this.verify.elementPresent('.col-xs-10.word-wrap h4', "User's Name is " + firstLastName)
      })
    return this
  },

  /** Function to verify if user address is displayed on not
   * @param {css selector = .col-xs-7.text-gray p.text-gray} css selector for address block
   */
  userAddress: function () {
    this.waitForElementVisible('@ratings', 10000)
    this.api.element('css selector', '.col-xs-7.text-gray p.text-gray', function (result) { // @address
      if (result.status !== -1) { // if element exists
        this.getText('.col-xs-7.text-gray p.text-gray', function (address) {
          var userAddress = address.value
          if (userAddress === '') {
            console.log('address is empty')
          } else {
            console.log("User's address is " + userAddress)
          }
        })
      } else { // if element doesn"t exist
        console.log('Address element is not present')
      }
    })

    return this
  },

  /** Function to verify if edit button is present on profile page */
  verifyEditProfileButton: function () {
    return this.waitForElementVisible('@editProfileButton', 10000)
  },
  /** Function to verify if on click of edit button user is redirected to settings >accounts tab or not */
  clickEditProfileButton: function () {
    var editProfileButtonLink;
    this.getAttribute("@editProfileButton", "href", function(link) { // eslint-disable-line
      var editProfileButtonLink = link.value; // eslint-disable-line
    })
    this.click('@editProfileButton')
      .api.pause(2000)
      .url(function (urlAfterClick) {
        var userSettingsPageLink = urlAfterClick.value
        if (editProfileButtonLink == userSettingsPageLink) { // eslint-disable-line
          this.verify.urlEquals(editProfileButtonLink); // eslint-disable-line
        }
      })
    return this
  },

  /** Function to verify if map is displayed when address is present or not
   * @param {css selector = .col-xs-7.text-gray p.text-gray } css selector for address block

   */
  userProfileMap: function () {
    this.waitForElementVisible('@ratings', 10000)
    this.api.element('css selector', '.col-xs-7.text-gray p.text-gray', function (result) { // @address
      if (result.status !== -1) { // if element exists
        this.getText('.col-xs-7.text-gray p.text-gray', function (address) {
          var userAddress = address.value
          if (userAddress === '') {
            console.log('Address is not present')
          } else {
            this.verify.elementPresent('.leaflet-container', 'Map is present') // @userProfileAddressMap
          }
        })
      } else { // if element doesn"t exist
        console.log('Address locator not present')
      }
    })
  }
}

module.exports = {
  commands: [userProfileCommands],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'profile/~Simon_Correia'
  },

  elements: {
    /** css selector for profile page title */
    pageTitle: {
      selector: '.user-profile > h2 span'
    },
    /** css selector for user profile iamge */
    userProfileImage: {
      selector: '.center-block.img-circle'
    },
    /** css selector for profile xcoobee id */
    xcoobeeId: {
      selector: '.user-profile .xcoobee-id'
    },
    /** css selector for ratings */
    ratings: {
      selector: 'div.text-center'
    },
    /** css selector for first ame */
    firstLastName: {
      selector: '.col-xs-10.word-wrap h4'
    },
    /** css selector for address */
    address: {
      selector: '.col-xs-7.text-gray p.text-gray'
    },
    /** css selector for edit profile button */
    editProfileButton: {
      selector: '.col-xs-2 a'
    },
    /** css selector for user profile address */
    userProfileAddressMap: {
      selector: '.leaflet-container'
    }
  }
}
