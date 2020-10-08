
module.exports = {
  '@tags': ['stable'],// eslint-disable-line

  'verify Send file Bee Profile content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const sendFile = browser.page.beeProfileSendFileBee()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    sendFile.navigate()
      .beeContent()
    sendFile.costDetails()

    browser.end()
  },

  'verify message Bee Profile content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const messageBee = browser.page.beeProfileMessageBee()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    messageBee.navigate()
      .beeContent()
    messageBee.costDetails()

    browser.end()
  }

 /* 'verify twitter Bee Profile content': function (browser) {
    const user = browser.globals.login
    const login = browser.page.commandsLogin()
    const twitter = browser.page.beeProfileTwitterBee()

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password)
    twitter.navigate()
      .beeContent()
    twitter.costDetails()

    browser.end() 
  }*/                                                   //Testcase is failing when deployment are beign made as the message changes.

  /* // Bee has been deactived
  "verify linkedin Bee Profile content": function(browser){
    let user = browser.globals.login;
    const login = browser.page.commandsLogin();
    const linkedin = browser.page.beeProfileLinkedInBee();

    login.navigate()
      .enterInputsAndSubmit(user.valid.email, user.valid.password);
    linkedin.navigate()
      .beeContent();
    linkedin.costDetails();

    browser.end();
  }
*/

}
