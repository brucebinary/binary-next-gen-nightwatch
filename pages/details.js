module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() { 
            return browser
                .verifyLoginMobile(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .click('a.mobile-nav-btn[href="/info"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .waitForElementVisible('body', 3000)
                .verify.elementPresent('a.sidebar-btn')
                .url(function(response){
                    this.assert.urlContains(response.value, 'info')
                })
                .assert.cssClassPresent('a.mobile-nav-btn[href="/info"]','active')

                //Verify for subtab selected tab
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Details"][aria-selected="true"]')
                .verify.elementPresent('.asset-details')
                .verify.elementPresent('table:first-of-type')
                .verify.containsText('.asset-details table:first-of-type','Opens')
                .verify.containsText('.asset-details table:first-of-type','Closes')
                .verify.containsText('.asset-details table:first-of-type','Settles')
                .verify.containsText('.asset-details table:first-of-type','Closes')
                .verify.containsText('.asset-details table:nth-of-type(2)','Trade Type')
                .verify.containsText('.asset-details table:nth-of-type(2)','Durations')

                //Select Daily Prices from the sub tabs
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Daily Prices"]')
                .click('div[role="tab"][title="Daily Prices"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Daily Prices"][aria-selected="true"]')
                .verify.elementPresent('table')
                .verify.containsText('table','Date')
                .verify.containsText('table','Open')
                .verify.containsText('table','High')

                //Select DIgit Stats from the sub tabs
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Digit Stats"]')
                .click('div[role="tab"][title="Digit Stats"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Digit Stats"][aria-selected="true"]')
                
        },
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .waitForElementVisible('div[role="tab"][title="Details"]', 1000)
                .click('div[role="tab"][title="Details"]', function(status) {
                    console.log('the click for value is', status.status);
                })
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('div[role="tab"][title="Details"][aria-selected="true"]')

                //Verify for subtab selected tab
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Details"][aria-selected="true"]')
                .verify.elementPresent('.asset-details')
                .verify.elementPresent('table:first-of-type')
                .verify.containsText('.asset-details table:first-of-type','Opens')
                .verify.containsText('.asset-details table:first-of-type','Closes')
                .verify.containsText('.asset-details table:first-of-type','Settles')
                .verify.containsText('.asset-details table:first-of-type','Closes')
                .verify.containsText('.asset-details table:nth-of-type(2)','Trade Type')
                .verify.containsText('.asset-details table:nth-of-type(2)','Durations')

                //Select Daily Prices from the sub tabs
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Daily Prices"]')
                .click('div[role="tab"][title="Daily Prices"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Daily Prices"][aria-selected="true"]')
                .verify.elementPresent('table')
                .verify.containsText('table','Date')
                .verify.containsText('table','Open')
                .verify.containsText('table','High')

                //Select DIgit Stats from the sub tabs
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Digit Stats"]')
                .click('div[role="tab"][title="Digit Stats"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('.asset-info-card div[role="tab"][title="Digit Stats"][aria-selected="true"]')
                
        }
    };

}