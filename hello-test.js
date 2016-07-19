// hello-test.js
/*global casper, require*/


/*casper.test.begin("Hello, Test!", 1, function (test) {
    'use strict';
    test.assert(true);
    test.done();
});*/

/*var casper = require('casper').create();
var utils = require('utils');
utils.dump(casper.cli.get('foo'));
utils.dump(casper.cli.raw.get('foo'));
casper.exit();*/

/*casper.test.begin('The heading exists', 1, function suite(test) {
    'use strict';
    casper.start('https://blog-qs.internetstores.com/wordpress/', function () {
        test.assertExists('div.android-header');
    }).run(function () {
        test.done();
    });
});*/

casper.test.begin('Page content tests',2, function suite(test) {
    'use strict';
    casper.start('https://blog-qs.internetstores.com/wordpress/', function () {
        test.assertExists('div.android-header');
        test.assertSelectorHasText('div.android-header', 'Hello');
    }).run(function () {
        test.done();
    });
});