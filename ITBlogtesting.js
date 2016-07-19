/* 
 *   Simulating user actions with CasperJS. This script will navigate through the Internetstores IT Blog just like a user would. 
 *   The script will check for the basic DOM elements that need to be present in each page.
 *   It would verify the urls retrieved during navigation and also input data field to check the form
 *   It will check for the number of blog posts on each page and check if they are correct.
 */
/*global casper, require */

// This will hold all of the content that Casper needs to supply.

var base_link = 'https://blog-qs.internetstores.com/wordpress/';
var links = [];
var new_links = [];

// Setting up a function to let arrays join without any repetition

Array.prototype.unique = function() {
    'use strict';
    var i, j;
    var a = this.concat();
    for (i=0; i<a.length; ++i) {
        for(j=i+ 1; j < a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function domTesting_header(test, link) {
    'use strict';
    casper.then(function () {
        this.test.assert(
            this.getCurrentUrl() === link,
            'url is the one expected'
        );
        this.echo(this.getCurrentUrl());
        this.test.assertHttpStatus(200, link + ' is up');
        this.test.assertTitle(
            'INTERNETSTORES',
            link + ' has the correct title'
        );
        this.test.assertExists(
            'div[id="the-header"]',
            link + ' has a header on the page"'
        );
    });
}

function searchLinks() {
    'use strict';
    var filter, map, href_attribute;
    filter = Array.prototype.filter;
    map = Array.prototype.map;
    return map.call(filter.call(document.querySelectorAll("a"), function (a) {
        href_attribute = (/^https:\/\/.*/i).test(a.getAttribute("href"));
        return href_attribute;
    }), function (a) {
        href_attribute = a.getAttribute("href");
        return href_attribute;
    });
}

function evaluateLinks(link) {
    'use strict';
 
    casper.then(function () {
        var found = this.evaluate(searchLinks);
        this.echo(found.length + " links found on " + link);
        links = links.concat(found);
        this.echo(" All the links " + links);
    });
    
    
       /*casper.then(function () {
        this.test.assert(
            this.getCurrentUrl() === link,
            'url is the one expected'
        );
        this.echo(this.getCurrentUrl());
        this.test.assertHttpStatus(200, link + ' is up');
        this.test.assertTitle(
            'INTERNETSTORES',
            link + ' has the correct title'
        );
        this.test.assertExists(
            'div[id="the-header"]',
            link + ' has a header on the page"'
        );
    });*/
    
    //domTesting_header(test,link);
    new_links = [];
    
     
}
function check_links() {
    
    'use strict';
    
}

// Define the suite of tests and give it the following properties:
// - Title, which shows up before any of the pass/fails.
// - Number of tests, must be changed as you add tests.
// - suite(), which contains all of your tests.
//
// @see http://casperjs.readthedocs.org/en/latest/modules/tester.html#begin
casper.test.begin('Testing navigation and forms', 4, function suite(test) {
    'use strict';
    casper.start(base_link, function () {
        this.echo('⌚️  Loading ' + base_link + '...');
        this.echo('Page title: ' + this.getTitle());
    });
    /*casper.then(function () {
        this.test.assert(
            this.getCurrentUrl() === base_link,
            'url is the one expected'
        );
        this.echo(this.getCurrentUrl());
        this.test.assertHttpStatus(200, base_link + ' is up');
        this.test.assertTitle(
            'INTERNETSTORES',
            base_link + ' has the correct title'
        );
        this.test.assertExists(
            'div[id="the-header"]',
            base_link + ' has a header on the page"'
        );
    });*/
    //domTesting_header(test,base_link);
    evaluateLinks.call(base_link);
   /* start.call(base_link);
    domTesting_header.call(base_link);*/
   
    
    
   
    /*casper.then(function getLinks() {
        links = this.evaluate(function () {
            links = document.querySelectorAll(".mdl-navigation__link");
            links = Array.prototype.map.call(links, function (link) {
                return link.getAttribute('href');
            });
            return links;
        });
    });
    casper.then(function () {
        this.each(links, function (self, link) {
            self.thenOpen(link, function (a) {
                
                this.echo(this.getCurrentUrl());
                this.test.assertExists(
                    'div[id="the-header"]',
                    config.siteName + ' has a header on the page"'
                );
                this.test.assertExists(
                    'footer',
                    config.siteName + ' has a footer on the page"'
                );
                post_list = this.evaluate(function () {
                    return document.getElementsByClassName('pick-class').length;
                });
                this.echo('this page contains ' + post_list + ' posts');
                if (post_list > 0) {
                    this.echo('we are inside the if condition');
                    post_elements = this.evaluate(function () {
                        post_elements = document.querySelectorAll(".pick-class");
                        post_elements = Array.prototype.map.call(post_elements, function (elem) {
                            return elem.getAttribute('href');
                        });
                    });
                    this.echo('here are the post elements ' + post_elements);
                }
            });
        });
});*/
            
    
    /*casper.then(function getLinks() {
        this.echo('this page contains ' + post_list + ' posts inside the post then');
        if (post_list > 0) {
            post_elements = this.evaluate(function () {
                post_elements = document.querySelectorAll('a.pick-class');
                post_elements = Array.prototype.map.call(post_elements, function (e) {
                    return e.getAttribute('href');
                });
            });
            return post_elements;
        }
    });*/
    /*casper.then(function () {
        this.each(post_elements, function (self, e) {
            self.thenOpen(e, function (a) {
                this.echo(this.getCurrentUrl());
                this.test.assertExists(
                    'div[id="the-header"]',
                    config.siteName + ' has a header on the page"'
                );
                this.test.assertExists(
                    'footer',
                    config.siteName + ' has a footer on the page"'
                );
            });
        });
    });*/
    casper.run(function () {
        test.done();
    });
});
