var testgrid = require('./index');

var local = new testgrid.Local();
var webdriver = require('selenium-webdriver');
var identifier = 'adqqwdqwd';

var capabilities = {
  build: 'build',
  'browserName': 'chrome',
  'os': 'OS X',
  'testgrid.local': true
  //'testgrid.localIdentifier': identifier
}

var options = {
  'key': process.env.TESTGRID_ACCESS_KEY,
  //hosts: [{
  //  name: 'localhost',
  //  port: 8080,
  //  sslFlag: 0
  //}],
  //'-f': __dirname,
  //'-binaryPath': '/var/TestGridLocal'
};

// try {
  local.start(options, function() {
    console.log('Is Running ' + local.isRunning());
    console.log('Started');

    capabilities['testgrid.user'] = process.env.TESTGRID_USERNAME;
    capabilities['testgrid.key'] = process.env.TESTGRID_ACCESS_KEY;
    capabilities['testgrid.local'] = true;
    //capabilities['testgrid.localIdentifier'] = identifier;

    driver = new webdriver.Builder().usingServer('http://hub.testgrid.com/wd/hub').withCapabilities(capabilities).build();
    console.log('Is Running ' + local.isRunning());
    driver.get("http://www.google.com").then(function() {
      console.log('Is Running ' + local.isRunning());
      driver.quit().then(function() {
        console.log('Is Running ' + local.isRunning());
        local.stop(function() {
          console.log('Is Running ' + local.isRunning());
          console.log('Stopped');
        });
      });
    });
  });
// }
// catch(error){
//   console.log("Got Error From Local " + error);
//   process.exit();
// }


