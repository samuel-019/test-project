var userSettingsOptionCommands = {
	
	verifyOptionTab: function () {
    	this.waitForElementVisible('@userSettings', 10000)
      	.verify.elementPresent('@optionTab', 'Options tab is present')
  	}

  /*	fileDropBlockContent : function() {
  		this.waitForElementVisible('@fileDropBlock', 10000)
  			.verify.containsText('@fileDropText' 'File Drop')
  			.verify.containsText('@fileDropTextMessage','Accept file submissions from non-XcooBee members using your points. You will be responsible for all traffic.')
  			.verify.containsText('@accessCodeLabel','Access code \n*')



  	}*/

}


module.exports = {
  commands: [userSettingsOptionCommands],
  
  url: function () {
    this.api.maximizeWindow()
    return this.api.launchUrl + 'user/settings/options'
  },

  elements: {
  
    userSettings: {
      selector : '.user-settings'
    },
    
    optionTab : {
      selector: '.nav-tabs li:nth-child(6)'
    },

    fileDropBlock : {
    	selector : '#user-settings-pane-options .col-lg-6 .panel-body'
    },

    fileDropText : {
    	selector : '.col-sm-6 h4.mt-0 span'

    },

    fileDropTextMessage : {
    	selector : '#user-settings-pane-options p span'

    },

    accessCodeLabel : {
    	selector : '.collapsed-input__label label.control-label'
   	}


  }
}