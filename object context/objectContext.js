/**
 * Created by rajan.lamichhane on 15/06/2016.
 */

/**
 * Gloabal function
 * @returns {f}
 */
function f() {
    return this;
}
console.log('f()', f());
// Function called in global context. this inside f() returns window as it has got no context passed so context this for function would be window

/**
 * Global function in strict mode
 * @returns {f}
 */
function fs() {
    "use strict";
    return this;
}
console.log('fs()', fs());
// it will return undefined because in strict mode if context is not set it returns undefined, whereas in non strict mode it returns gloabal window is global context like first f()
// note In strict mode, the value of this remains at whatever it's set to when entering the execution context. If it's not defined, it remains undefined.

/**
 * arrow function. lexical
 */
fl = () => this;

console.log('fl()', fl());
// here arrow function in use and context is passed lexically. it means this will return window

/**
 * Arrow function in strict mode
 * @returns {*}
 */
fls = () => {
    "use strict";
    return this;
}

console.log('fls()', fls());
// note In arrow functions, this is set lexically, i.e. it's set to the value of the enclosing execution context's this, so it returns this, it would return undefined for strict in just a function not arrow function
// note An arrow function expression has a shorter syntax compared to function expressions and lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous.

var obj = {
    a: 'aa'
}

/**
 * call arrow function with call
 */
console.log('fls.call(obj)', fls.call(obj));
// here it will get lexicall outer context in this case its global window is returned, because arrow function is called within the context of obj but its arrow function and context is outer of obj which is window

/**
 * call arrow function with apply
 */
console.log('fls.apply(obj)', fls.apply(obj));
// here it will get lexicall outer context in this case its global window is returned, because arrow function is called within the context of obj but its arrow function and context is outer of obj which is window

/**
 * call arrow function with arrow function bind
 *
 * @type {function(this:{a: string})}
 */
var flsf = fls.bind(obj);
console.log('fls.bind(obj)', flsf());
// same as apply and call as its arrow function its lexical and context is outer context, it is used to solve this=that or self = this;

/**
 * call arrow function with object literal method where method is outer function of arrow function
 * @returns {Function}
 */
obj.b = function() {
       var aa = () => this;
    return aa();
}

console.log('obj.b()', obj.b());
// it returns obj context because arrow function this is context to outer function in this case its obj.b

/**
 * outer and inner arrow function
 */
var outerF = function() {
    this.a = 'kk';
    var innerF = () => {
        return this;
    }

    return innerF();
}

console.log('outerF()', outerF());
// it returns window as outerF context is global wibndow
/**
 * outer function and inner arrow function with outer function object
 * @type {outerF}
 */
objL = new outerF();
console.log('objL', objL);
// it returns context is object of outerF because its an context of outer function when its called with new keyword

/**
 * object context in object method
 * @returns {obj}
 */
obj.c = function () {
    return this;
}

console.log('obj.c()', obj.c());
// it returns obj because its context is obj, because in object cotext any method is called its context is the object is called in

/**
 * object method having inner function in non strict mode
 */
obj.d = function() {
    var dd = function() {
        return this;
    }
    return dd();
}

console.log('obj.d()', obj.d());
// it returns the global window as context because its context is inside the function, and context of function is default to window in non strict mode if no context is passed it would return obj if it was arrow function lexical.

/**
 * object method having inner function in  strict mode
 */
obj.e = function() {
    "use strict";
    var dd = function() {
        return this;
    }
    return dd();
}

console.log('obj.e()', obj.e());
// it returns the undefined as context because its context is inside the function, and context of function is default to undefined in  strict mode if no context is passed it would return obj if it was arrow function lexical.

/**
 * object method having inner function and called passing context
 */
obj.f = function() {
    var dd = function() {
        return this;
    }
    return dd.call(obj);
}
console.log('obj.f()', obj.f());
// it returns obj object context because obj is passed while calling it, it would ignored in arrow function as arrow function gets outer context