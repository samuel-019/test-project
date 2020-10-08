
module.exports = {
  '@tags': ['stable'], // eslint-disable-line

  '@disabled': true

/*

  "verify if feedback button responds on OnClick":function(browser){
      var login = browser.page.commandsLogin();
      var feedback  = browser.page.commandsFeedback();

      login.navigate();
        login.fillInForm(test_data.login.valid["email"],test_data.login.valid["password"])
        login.submit();
        feedback.clickFeedbackButton();
        browser.end();
   },

   "verify feedback form content":function(browser){
      var login = browser.page.commandsLogin();
      var feedback = browser.page.commandsFeedback();

      login.navigate();
        login.fillInForm(test_data.login.valid["email"],test_data.login.valid["password"])
        login.submit();
        feedback.verifyContentofFeedbackForm();
        browser.end();
   },

   "verify if sending empty feedback is possible":function(browser){
      var login = browser.page.commandsLogin();
      var feedback = browser.page.commandsFeedback();

      login.navigate();
        login.fillInForm(test_data.login.valid["email"],test_data.login.valid["password"])
        login.submit();
        feedback.verifySendingEmptyFeedback();
        browser.end();
  },

  "verify sending feedback message":function(browser){
    var login = browser.page.commandsLogin();
    var feedback = browser.page.commandsFeedback();

    login.navigate();
    login.fillInForm(test_data.login.valid["email"],test_data.login.valid["password"]);
    login.submit();
    feedback.verifySendingFeedbackMessage("Test message");
    browser.end();
  }
*/
}
