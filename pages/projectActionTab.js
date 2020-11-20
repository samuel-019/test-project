var projectActionTab = {
	clickOnCloseProjectIcon: function () {
    this.waitForElementVisible('@clickOnCloseProject',10000)
    return this.click('@clickOnCloseProject')
  },
  clickOnOkayOnConfirmationModal: function(){
  	this.waitForElementVisible('@clickOnOkayOnTheConfirmationModal',10000)
  	return this.click('@clickOnOkayOnTheConfirmationModal')
  },
  clickOnCloseProjectCta: function(){
  	this.waitForElementVisible('@clickOnCloseCta',10000)
  	return this.click('@clickOnCloseCta')
  },
  closeProject: function(){
  	this.clickOnCloseProjectIcon()
  	this.clickOnOkayOnConfirmationModal()
    this.saveScreenshot("C:/Xcoobee Project/xcoobee-e2e/Screenshots/test.png")
  	this.clickOnCloseProjectCta()
    this.saveScreenshot('C:/Xcoobee Project/xcoobee-e2e/Screenshots/testing.png')
  },
  clickOnDeleteProjectIcon: function(){
  	this.waitForElementVisible('@clickOnDeleteProject',30000)
  	return this.click('@clickOnDeleteProject')
  },
  deleteProject: function(){
  	this.clickOnDeleteProjectIcon()
  	this.clickOnOkayOnConfirmationModal()
    this.verifyAddNewProjectCta()
  },
  clickOnSuspendIcon: function(){
    this.waitForElementVisible('@clickOnSuspend',10000)
    return this.click('@clickOnSuspend')
  },
  clickOnSuspendCtaOnConfirmationModal: function(){
    this.waitForElementVisible('@clickOnSuspendCta',10000)
    return this.click('@clickOnSuspendCta')
  },
  verifyAddNewProjectCta: function(){
    return this.waitForElementVisible('@addNewProject',10000)
  },
  clickOnCopyProject: function(){
    this.waitForElementVisible('@clickOnCopyProjectIcon',10000)
    return this.click('@clickOnCopyProjectIcon')
  },

};

module.exports = {
  commands: [projectActionTab],
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/projects'
  },

  elements:{
  	clickOnCopyProjectIcon: {
      selector: '.ReactVirtualized__Table__row:nth-child(1) .ReactVirtualized__Table__rowColumn:nth-child(5) .click-handling-column:nth-child(3)'
    },
    clickOnCloseProject: {
    	selector: '.ReactVirtualized__Table__row:nth-child(1) .ReactVirtualized__Table__rowColumn:nth-child(5) .click-handling-column:nth-child(5)'
    },
    clickOnDeleteProject: {
    	selector: '.ReactVirtualized__Table__row:nth-child(1) .ReactVirtualized__Table__rowColumn:nth-child(5) .click-handling-column:nth-child(5)'
    },
    clickOnOkayOnTheConfirmationModal:{
    	selector: '.modal-content .modal-footer .btn:nth-child(2)'
    },
    clickOnCloseCta: {
    	selector: '.modal-content .btn'
    },
    clickOnSuspend: {
      selector: '.ReactVirtualized__Table__row:nth-child(1) .ReactVirtualized__Table__rowColumn:nth-child(5) .click-handling-column:nth-child(1)'
    },
    clickOnSuspendCta: {
      selector: '.modal-content .btn'
    },
    addNewProject:{
      selector: 'div.projects-container__filters-container > a'
    },
  }
  };