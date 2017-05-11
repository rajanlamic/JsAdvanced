/**
 * Created by kalpana on 30/04/17.
 */

window.onload = function() {

    function ParentClass() {
        this.myProp = 'parentProp';
        this.get = function() {
            return this.myProp;
        }
    }

    function ChildClass() {
        this.myProp = 'childProp';
    }

    ChildClass.prototype = new ParentClass();
    var childObj = new ChildClass();


    // As child object itself got myProp property so it does not have to climb up the prototype chain to get its value
    // So it returns from child object, such situation is called property shadowing
    // its called method overriding if methods are same in an object and its prototype

    var containerElm = document.getElementById('container');
    containerElm.innerHTML = childObj.myProp + ' --> ' + childObj.get();
}