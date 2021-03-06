module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        tags: ['watchlist'],
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Watchlist"]')
                .click('div[role="tab"][title="Watchlist"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Watchlist"][aria-selected="true"]')
                .url(function(response){
                    this.assert.urlEquals(response.value, browser.globals.launch_url)
                })
                
                
        }
    };

}