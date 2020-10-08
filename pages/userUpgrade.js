var upgradeWizard = {

  /**
 *This function is checking for upgrade wizard header element
  * Wait for 10000 seconds for the header element to be displayed and check the progress
  */

  checkUpgradeWizardheaderElement: function () {
    this.waitForElementVisible('@headerLogo', 10000)
    this.verify.visible('@selectLevel')
    this.verify.visible('@paymentInformation')
    return this.verify.visible('@close')
  },

  /** This function is checking for general terms text on upgrade wizard
 * Wait for 10000 seconds for the header element to be displayed and check for first line content
 */

  generalTermsCopyDeck: function () {
    this.waitForElementVisible('@headerLogo', 10000)
    return this.verify.containsText('@content_one', 'Woohoo, we’re glad to see that you want to upgrade and get even more features and services.')
  },

  /** This function is checking upgrade wizard content
 * Wait for 10000 seconds for the upgrade wizard page content to load and check the content of upgrade wizard
 */

  checkUpgradeWizardContent: function () {
    this.waitForElementVisible('@content_one', 10000)
    this.verify.containsText('@content_one', 'Woohoo, we’re glad to see that you want to upgrade and get even more features and services.')
    this.verify.containsText('@generalTermsTitle', 'General Terms:')
    this.verify.containsText('@generalTermsOne', 'You can always revert back to the free account. If so, you will lose access to any data and features that are not part of the free-service.')
    this.verify.containsText('@generalTermsTwo', 'Your account automatically converts to the free account at the end of your subscription.')
    this.verify.containsText('@generalTermsThree', 'You can upgrade at any time to a higher level of subscription and get partial credit.')
    this.verify.containsText('@generalTermsFour', 'You have a 14-day free trial on all subscriptions. We will not charge you for your subscription during this time. This will exclude any other costs beyond your subscription that you may have incurred.')
    return this.verify.containsText('@generalTermsFive', 'This is subject to our privacy policy, terms of service, and data processing agreement')
  },

  /** This function is checking for subscription block element
 * Wait for 10000 seconds for the subscription block text to load
 * @param {css selector = div[class*="placeholder"] span } -> Select subscription dropdown placeholder text
 * @param {css selector = button.btn-primary:disabled } -> Css selector for disbaled next button
 */

  checkSubscriptionBlockElement: function () {
    this.waitForElementVisible('@subscriptionText', 10000)
    this.verify.containsText('@subscriptionText', 'Which subscription level would you like?')
    this.verify.containsText('div[class*="placeholder"] span', 'Select Subscription')
    return this.waitForElementVisible('button.btn-primary:disabled', 10000)
  },

  /** This function is checking for subscription dropdown block
 * Click on the dropdown and check if the last element is visible from the dropdown.
 * @param {css selector = .Select-menu-outer } -> Dropdown options selector
 * @param {css selector = .Select-option:last-child} css selector for last element from the dropdown
 */

  checkSubscriptionDropdown: function () {
    this.waitForElementVisible('@dropdownPlaceholder', 20000)
      .waitForElementVisible('@subscriptionDropdownBox', 10000)
      .click('@subscriptionDropdownBox')
    this.waitForElementVisible('@subscriptionValuesBlock', 7000)
    return this.waitForElementVisible('.xb-select__option#react-select-3-option-3', 10000)
  },

  /** This function is checking for perosnal subscription content
 * @param {css selector = .Select-option:nth-child(1) } -> Move to and click on first element from the dropdown.
 * Check the content displayed when perosnal subscription is selected from the dropdown
 * @param {css selector = span.Select-clear} Css selector for clear element present on the dropdown
 * Move to and click on clear element and wait for deault upgrade wizard page to displayed
 */

  checkPersonalSubscription: function () {
    //this.checkSubscriptionDropdown()
    this.waitForElementVisible('@dropdownPlaceholder', 20000)
      .waitForElementVisible('@subscriptionDropdownBox', 10000)
      .click('@subscriptionDropdownBox')
    this.waitForElementVisible('@subscriptionDropdownBox', 20000)
    this.api.pause(2000)
    this.click('@personalOptionfromDropdown')
    this.verify.containsText('@excitingFeatures', 'Exciting features')
    this.verify.containsText('@featureName', 'Monthly Points')
    this.verify.containsText('@featureValue1','150')
    this.verify.containsText('@featureName2', 'Monthly Invite Point Limit')
    this.verify.containsText('@featureValue2','unlimited')
    this.verify.containsText('@featureName3', 'Monthly Active Invite limit')
    this.verify.containsText('@featureValue3','unlimited')
    this.verify.containsText('@featureName4', 'Contact Sharing')
    this.verify.containsText('@featureValue4','unlimited')
    this.verify.containsText('@featureName5', 'Send Secure Download Links')
    this.verify.containsText('@featureValue5','x')
    this.verify.containsText('@fullListOfFeatureText', 'full list of features')
    this.click('@dropdownClose')
    return this.waitForElementVisible('@dropdownPlaceholder', 5000)
  },

  /** This function is checking for developer subscription content
 * @param {css selector = .Select-option:nth-child(2) } -> Move to and click on second element from the dropdown.
 * Check the content displayed when developer subscription is selected from the dropdown
 * @param {css selector = span.Select-clear} Css selector for clear element present on the dropdown
 * Move to and click on clear element and wait for deault upgrade wizard page to displayed
 */

  checkDeveloperSubscription: function () {
    //this.checkSubscriptionDropdown()
    this.waitForElementVisible('@dropdownPlaceholder', 20000)
      .waitForElementVisible('@subscriptionDropdownBox', 10000)
      .click('@subscriptionDropdownBox')
    this.waitForElementVisible('@subscriptionDropdownBox', 20000)
    this.api.pause(2000)
    this.click('@developerOptionfromDropdown')
    this.verify.containsText('@excitingFeatures', 'Exciting features')
    this.verify.containsText('@featureName', 'Monthly Points')
    this.verify.containsText('@featureValue1','100')
    this.verify.containsText('@featureName2', 'API Access Keys')
    this.verify.containsText('@featureValue2','x')
    this.verify.containsText('@featureName3', 'Personal Consent Management')
    this.verify.containsText('@featureValue3','x')
    this.verify.containsText('@featureName4', 'Programming SDK')
    this.verify.containsText('@featureValue4','x')
    this.verify.containsText('@featureName5', 'Dashboard')
    this.verify.containsText('@featureValue5','x')
    this.verify.containsText('@fullListOfFeatureText', 'full list of features')
    this.verify.containsText('@subscriptionDurationTerms', 'Subscription Duration')
    this.verify.containsText('@unlimited_text', 'Unlimited')
    this.click('@dropdownClose')
    return this.waitForElementVisible('@dropdownPlaceholder', 5000)
  },

  /** This function is checking for Professional subscription content
 * @param {css selector = .Select-option:nth-child(3) } -> Move to and click on first element from the dropdown.
 * Check the content displayed when professional subscription is selected from the dropdown
 * @param {css selector = span.Select-clear} Css selector for clear element present on the dropdown
 * Move to and click on clear element and wait for deault upgrade wizard page to displayed
 */

  checkProfessionalSubscription: function () {
    //this.checkSubscriptionDropdown()
    this.waitForElementVisible('@dropdownPlaceholder', 20000)
      .waitForElementVisible('@subscriptionDropdownBox', 10000)
      .click('@subscriptionDropdownBox')
    this.waitForElementVisible('@subscriptionDropdownBox', 20000)
    this.api.pause(2000)
    this.click('@professionalOptionfromDropdown')
    this.verify.containsText('@excitingFeatures', 'Exciting features')
    this.verify.containsText('@featureName', 'Monthly Points')
    this.verify.containsText('@featureValue1','500')
    this.verify.containsText('@featureName2', 'Included Active Consents')
    this.verify.containsText('@featureValue2','1000')
    this.verify.containsText('@featureName3', 'Consent Administration')
    this.verify.containsText('@featureValue3','x')
    this.verify.containsText('@featureName4', 'Document Workflow')
    this.verify.containsText('@featureValue4','x')
    this.verify.containsText('@featureName5', 'Wordpress Plugins')
    this.verify.containsText('@featureValue5','x')
    this.verify.containsText('@fullListOfFeatureText', 'full list of features')
    this.click('@dropdownClose')
    return this.waitForElementVisible('@dropdownPlaceholder', 5000)
  },

  /** This function is checking for Business subscription content
 * @param {css selector = .Select-option:nth-child(4) } -> Move to and click on first element from the dropdown.
 * Check the content displayed when Business subscription is selected from the dropdown
 * @param {css selector = span.Select-clear} Css selector for clear element present on the dropdown
 * Move to and click on clear element and wait for deault upgrade wizard page to displayed
 */
  checkBussinessSubscription: function () {
    //this.checkSubscriptionDropdown()
    this.waitForElementVisible('@dropdownPlaceholder', 20000)
      .waitForElementVisible('@subscriptionDropdownBox', 10000)
      .click('@subscriptionDropdownBox')
    this.waitForElementVisible('@subscriptionDropdownBox', 20000)
    this.api.pause(2000)
    this.click('@businessOptionfromDropdown')
    this.verify.containsText('@excitingFeatures', 'Exciting features')
    this.verify.containsText('@featureName', 'Monthly Points')
    this.verify.containsText('@featureValue1','2000')
    this.verify.containsText('@featureName2', 'Included Active Consents')
    this.verify.containsText('@featureValue2','10,000')
    this.verify.containsText('@featureName3', 'Consent Administration')
    this.verify.containsText('@featureValue3','x')
    this.verify.containsText('@featureName4', 'Charge Management')
    this.verify.containsText('@featureValue4','x')
    this.verify.containsText('@featureName5', 'Document Workflow')
    this.verify.containsText('@featureValue5','x')
    this.verify.containsText('@fullListOfFeatureText', 'full list of features')
    this.click('@dropdownClose')
    return this.waitForElementVisible('@dropdownPlaceholder', 5000)
  }

}

module.exports = {

  commands: [upgradeWizard],
  /** function to maximize window and naviagte to upgrade wizard */
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/upgradeWizard'
  },

  /** This block contains css selector from upgrade wizard */
  elements: {

    /** CSS selector for header logo */
    headerLogo: {
      selector: 'div.navbar-header'
    },

    /** CSS selector for selevel level element */
    selectLevel: {
      selector: '.navbar-inner  li:nth-child(1)'
    },

    /** CSS selector for payment information element */
    paymentInformation: {
      selector: '.navbar-inner  li:nth-child(3)'
    },

    /** CSS selector for close elment */
    close: {
      selector: '.navbar--blank li:nth-child(1)'
    },

    /** CSS selector for first line from upgrade wizard */
    content_one: {
      selector: 'div.col-md-9'
    },

    /** CSS selector for general terms title text */
    generalTermsTitle: {
      selector: 'div.row > h4'
    },

    /** CSS selector for first general terms  */
    generalTermsOne: {
      selector: 'div.row > ul >li:nth-child(1)'
    },

    /** CSS selector for second general terms  */
    generalTermsTwo: {
      selector: 'div.row > ul >li:nth-child(2)'
    },

    /** CSS selector for third general terms  */
    generalTermsThree: {
      selector: 'div.row > ul >li:nth-child(3)'
    },

    /** CSS selector for fourth general terms  */
    generalTermsFour: {
      selector: 'div.row > ul >li:nth-child(4)'
    },

    /** CSS selector for fifth general terms  */
    generalTermsFive: {
      selector: 'div.row > ul >li:nth-child(5)'
    },

    /** CSS selector for subscription block text   */
    subscriptionText: {
      selector: 'div.content-box >h4'
    },

    /** css selector for subscription dropdown */
    subscriptionDropdownBox: {
      selector: 'div.form-group > div'
    },

    // Css selector for dropdown values block
    subscriptionValuesBlock: {
      selector: 'div.xb-select__menu-list'                                                                                 //'[class*=\'menu\']'
    },

    // Selector of last item in the dubscription dropdown list
    lastItemInSubscriptionDropdown: {
      selector: 'div.xb-select__menu-list #react-select-3-option-3'                                                              //'[class*=\'menu\']>div>div:last-child'
    },

    // Selector of Personal option from Dropdown
    personalOptionfromDropdown: {
      selector:  'div.xb-select__menu-list #react-select-3-option-0'                                                      //'[class*=\'menu\']>div>div:nth-child(1)'
    },

    // Selector of Developer option from Dropdown
    developerOptionfromDropdown: {
      selector:   'div.xb-select__menu-list #react-select-3-option-1'                                                              //'[class*=\'menu\']>div>div:nth-child(2)'
    },

    // Selector of Professional option from Dropdown
    professionalOptionfromDropdown: {
      selector: 'div.xb-select__menu-list #react-select-3-option-2'                                                                //'[class*=\'menu\']>div>div:nth-child(3)'
    },

    // Selector of Business option from Dropdown
    businessOptionfromDropdown: {
      selector: 'div.xb-select__menu-list #react-select-3-option-3'                                                                                     //'[class*=\'menu\']>div>div:nth-child(4)'
    },

    /** css selector for subscription dropdown placeholder text */
    dropdownPlaceholder: {
      selector: '[class*=\'placeholder\'] > span'
    },

    /* css selector for subscrption dropdown close button */
    dropdownClose: {
      selector: '[class*=control] > div:nth-child(2) > div:nth-child(1) svg'

    },

    /** css selector for subscription dropdown values */
    dropdownValue: {
      selector: 'div.Select.has-value.is-clearable.Select--single >.Select-control .Select-value>span'
    },

    /** css selector for exciting features text */
    excitingFeatures: {
      selector: 'div.feature-container >h4>span'
    },

    /** css selector for first feature name text */
    featureName: {
      selector: 'div.feature-container > ul >li:nth-child(1)>div>div>div.feature-name'
    },

    /** css selector for second feature name text */
    featureName2: {
      selector: 'div.feature-container > ul >li:nth-child(2)>div>div>div.feature-name'
    },

    /** css selector for third feature name text */
    featureName3: {
      selector: 'div.feature-container > ul >li:nth-child(3)>div>div>div.feature-name'
    },

    /** css selector for fourth feature name text */
    featureName4: {
      selector: 'div.feature-container > ul >li:nth-child(4)>div>div>div.feature-name'
    },

    /** css selector for fifth feature name text */
    featureName5: {
      selector: 'div.feature-container > ul >li:nth-child(5)>div>div>div.feature-name'
    },

    /** css selector for full list of feature text */
    fullListOfFeatureText: {
      selector: 'div.content-box h3.text-center>a>span'
    },

    /** css selector for subscription duration text */
    subscriptionDurationTerms: {
      selector: 'div.content-box >h4.text-center'
    },

    /** css selector for unlimited text */

    unlimited_text: {
      selector: 'div.content-box >h5.text-center'
    },

    /** css selector for bottom next button */

    bottomNextButton: {
      selector: "div#root div:nth-child(3) > button[type='button']"
    },

    /** css selector for top next button */
    topNextButton: {
      selector: "div#root div:nth-child(2) > button[type='button']"
    },

    /** css selector for first terms text */
    terms1: {
      selector: 'div.terms-container > ul >li:nth-child(1)'
    },

    /** css selector for second terms text */
    terms2: {
      selector: 'div.terms-container > ul >li:nth-child(2)'
    },

    /** css selector for cost text */
    cost: {
      selector: 'div.cost-section >h4'
    },

    /** css selector for amount text */
    amount: {
      selector: 'div.amount>span'
    },

    /** css selector for billed text */
    billedText: {
      selector: 'div.billed-amount>h4'
    },

    /** css selector for billed amount text */
    billedAmount: {
      selector: 'div.billed-amount>h5'
    },

    /** css selector for billed duration text */
    billedDuration: {
      selector: 'div.text-center>span'
    },

    featureValue1 :{
      selector : 'div.feature-container > ul >li:nth-child(1)>div>div>div.feature-value'
    },

    featureValue2 :{
      selector : 'div.feature-container > ul >li:nth-child(2)>div>div>div.feature-value'
    },

    featureValue3 :{
      selector : 'div.feature-container > ul >li:nth-child(3)>div>div>div.feature-value'
    },

    featureValue4 :{
      selector : 'div.feature-container > ul >li:nth-child(4)>div>div>div.feature-value'
    },

    featureValue5 :{
      selector : 'div.feature-container > ul >li:nth-child(5)>div>div>div.feature-value'
    }

  }
}
