/*global casper, require*/
function Cow() {
    'use strict';
    this.mowed = false;
    this.moo = function moo() {
        this.mowed = true; // mootable state: don't do that at home
        return 'moo!';
    };
}
// cow-test.js
casper.test.begin('Cow can moo', 2, function suite(test) {
    'use strict';
    var cow = new Cow();
    test.assertEquals(cow.moo(), 'Bazngaa');
    test.assert(cow.mowed);
    test.done();
});