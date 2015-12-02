"use strict";
var pubSub = {
    registered: [],
    on: function(event, factory) {
        this.registered.push({event:event, factory:factory});
        
    },
    trigger: function(event, params) {
        var i, len = this.registered.length, registered = this.registered;
        for(i = 0; i < len; i++) {
            if(registered[i].event === event) {
                registered[i].factory.apply(this, params);
                return;
            }
        }
    }
}

/**
 * Examples below
 */

pubSub.on('noargsFunc', function() {
    console.log('noargsFunc');
});
//
pubSub.on('withargsFunc', function(first, second) {
    console.log('withargsFunc ' + first + ' -- ' + second);
});

pubSub.trigger('noargsFunc');
pubSub.trigger('withargsFunc', ["first", "second"]);

//console.log(pubSub.registered);