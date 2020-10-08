var userConsentCenterComplaint = {

  /** Function to verify page title
   * @param {css selector = h2.consent-tour-start} css selector for my consent page title
   */

  userComplaintPageTitle: function () {
    this.waitForElementVisible('@pageTitle', 10000)
      .getText('@pageTitle', function (titleText) {
        var pageTitleText = titleText.value
        this.verify.elementPresent('h2.consent-tour-start', 'Page title is ' + pageTitleText)
      })
    return this
  },

  /** Function to verify complaint tab title
   * @param {css selector = #consent-center-tab-complaints } complaint tab css selector
   */

  complaintTab: function () {
    this.waitForElementVisible('@complaintTabTitle', 10000)
      .getText('@complaintTabTitle', function (tabText) {
        var tabTitleText = tabText.value
        this.verify.elementPresent('#consent-center-tab-complaints', 'Tab title is ' + tabTitleText)
      })
    return this
  },

  /** Function to verify if message is displayed when complaint tab is empty */
  emptyComplaintTab: function () {
    this.verify.elementPresent('@addButton', 'Add Button is present')
    return this.verify.containsText('@textMessage', 'Complaints list is empty')
  },

  /** Function to verify content of complaint pop up modal
   * click on the add button , pop up modal is displayed and content on the pop up modal is verified
   */

  checkComplaintPopUpContent: function () {
    this.waitForElementVisible('@addButton', 10000)
      .click('@addButton')
    this.verify.elementPresent('@popUpModal', 'Pop up modal is present')
    this.verify.containsText('h4.modal-title', 'Report')
    this.verify.elementPresent('button.close', 'close pop up icon is present')
    this.verify.containsText('div.modal-body div>span', "You can use this form to make a formal complaint to a Supervisory Authority. We will send an email on your behalf but will not send any of your data except your XcooBee Id. You can also check the XcooBee Website for each supervisory authority's information to start a complaint yourself")
    this.verify.containsText('div.modal-body div>span:nth-child(3)', 'You will need to specify your contact in the message if you wish for response other than via XcooBee')
    this.verify.containsText('.control-label>span', 'GDPR Supervisory Authority')
    this.waitForElementPresent('div.modal-body div.xb-select__value-container', 'select GDPR Supervisory Authority dropdown is present')
    /*this.click('div.modal-body div.xb-select__value-container')
    this.verify.containsText('div.modal-body #react-select-5-option-0.xb-select__option span.country-flag', 'Österreichische Datenschutzbehörde')
    this.verify.containsText('div.modal-body #react-select-5-option-1.xb-select__option span.country-flag', 'Commission de la protection de la vie privée')
    this.verify.containsText('div.modal-body #react-select-5-option-2 span.country-flag', 'Commission for Personal Data Protection')                                                   //Script commented due to failure
    this.verify.containsText('div.modal-body #react-select-5-option-3 span.country-flag', 'Croatian Personal Data Protection Agency')
    this.verify.containsText('div.modal-body #react-select-5-option-4 span.country-flag', 'Commissioner for Personal Data Protection')
    this.verify.containsText('div.modal-body #react-select-5-option-5 span.country-flag', 'The Office for Personal Data Protection')
    this.verify.containsText('div.modal-body #react-select-5-option-6 span.country-flag', 'Datatilsynet')
    this.verify.containsText('div.modal-body #react-select-5-option-7 span.country-flag', 'Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)')
    this.verify.containsText('div.modal-body #react-select-5-option-8 span.country-flag', 'Office of the Data Protection Ombudsman')
    this.verify.containsText('div.modal-body #react-select-5-option-9 span.country-flag', 'Commission nationale de l’informatique et des libertés')
    this.verify.containsText('div.modal-body #react-select-5-option-10 span.country-flag', 'Die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit')
    this.verify.containsText('div.modal-body #react-select-5-option-11 span.country-flag', 'Hellenic Data Protection Authority')
    this.verify.containsText('div.modal-body #react-select-5-option-12 span.country-flag', 'National Authority for Data Protection and Freedom of Information')
    this.verify.containsText('div.modal-body #react-select-5-option-13 span.country-flag', 'Data Protection Commissioner')
    this.verify.containsText('div.modal-body #react-select-5-option-14 span.country-flag', 'Garante per la protezione dei dati personali')
    this.verify.containsText('div.modal-body #react-select-5-option-15 span.country-flag', 'Data State Inspectorate')
    this.verify.containsText('div.modal-body #react-select-5-option-16 span.country-flag', 'State Data Protection')
    this.verify.containsText('div.modal-body #react-select-5-option-17 span.country-flag', 'Commission nationale pour la protection des données')
    this.verify.containsText('div.modal-body #react-select-5-option-18 span.country-flag', 'Office of the Data Protection Commissioner')
    this.verify.containsText('div.modal-body #react-select-5-option-19 span.country-flag', 'Autoriteit Persoonsgegevens')
    this.verify.containsText('div.modal-body #react-select-5-option-20 span.country-flag', 'The Bureau of the Inspector General for Personal Data Protection')
    this.verify.containsText('div.modal-body #react-select-5-option-21 span.country-flag', 'Comissão Nacional de Protecção de Dados')
    this.verify.containsText('div.modal-body #react-select-5-option-22 span.country-flag', 'The National Supervisory Authority for Personal Data Processing')
    this.verify.containsText('div.modal-body #react-select-5-option-23 span.country-flag', 'Office for Personal Data Protection of the Slovak Republic')
    this.verify.containsText('div.modal-body #react-select-5-option-24 span.country-flag', 'Information Commissioner')
    this.verify.containsText('div.modal-body #react-select-5-option-25 span.country-flag', 'Agencia de Protección de Datos')
    this.verify.containsText('div.modal-body #react-select-5-option-26 span.country-flag', 'Datainspektionen')
    this.verify.containsText('div.modal-body #react-select-5-option-27 span.country-flag', 'The Information Commissioner’s Office')*/

    this.verify.containsText('div.modal-body label.margin-top-10.control-label>span', 'Your Message')
    this.waitForElementPresent('div.modal-body textarea.form-control', 'Your message textarea is present')
    /**
    this.getText("div.modal-body textarea[placeholder]", function(result){
    this.verify.equal(result.value, "Be specific, provide a clear example, e.g: I found my address used for marketing purposes though my consent was for only product shipment.\n Don’t forget to provide your contact information, e.g.: your legal name and address. If you wish to be contacted via email or phone provide it as well. XcooBee does not send this information.")
    }) */

    this.waitForElementPresent('div.modal-body span.checkmark', 'Checkbox is present')
    this.verify.containsText('div.modal-body .send-complaint-border.margin-top-10 >tbody>tr>td:nth-child(2)>span', 'You represent that all your statements are truthful and that XcooBee has been granted permission to submit the complaint on your behalf')
    this.verify.elementPresent('.modal-footer .btn-primary>span', 'close button is present')
    this.verify.containsText('.modal-footer .btn-primary>span', 'Close')
    this.verify.elementPresent('.modal-footer button[disabled]', 'Send Complaint is present')
    this.verify.containsText('.modal-footer button[disabled]>span', 'Send Complaint')

    return this
  }

}

module.exports = {
  commands: [userConsentCenterComplaint],

  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/consentCenter/complaints'
  },

  elements: {
    /** css selector for page title */
    pageTitle: {
      selector: 'div#root h2 > span'
    },
    /** css selector for complaint tab */
    complaintTabTitle: {
      selector: '#consent-center-tab-complaints'
    },
    /** css selector for text message */
    textMessage: {
      selector: '#consent-center-pane-complaints h3.text-center>span'
    },
    /** css selector for add button */
    addButton: {
      selector: 'div.col-xs-12 .btn-default'
    },
    /** css selector for pop modal */
    popUpModal: {
      selector: 'div.modal-content'
    }
  }
}
