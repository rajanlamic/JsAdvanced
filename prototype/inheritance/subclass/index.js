/**
 * Created by kalpana on 30/04/17.
 */

window.onload = function() {

    // Parent constructor function
    function ParentClass() {
        this.myProp = 'parentProp';
    }

    // Prototype function so its object could get its prototype
    ParentClass.prototype = {
        getPar: function() {
            return this.myProp;
        },
        getStaticPar: function() {
            return 'static par'
        }
    }


    // Child constructor function
    function ChildClass() {
        this.myProp = 'childProp';
    }


    // link child prototype to parent prototype
    //ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype = Object.create(ParentClass.prototype, {
        getChl : {
            value: function() {
                return this.myProp;
            }
        }
    });

    // Or
    //ChildClass.prototype.getChl = function() {
    //    return this.myProp;
    //}

    // Above both works, one with second parameter as child prototype and first parent protitype
    // Child prototype each property should be value, i don't know why, need more stuey

    // reset child function constructor to itself
    ChildClass.constructor.prototype = ChildClass;

    var parObj = new ParentClass();
    var childObj = new ChildClass();

    // As child object itself got myProp property so it does not have to climb up the prototype chain to get its value
    // So it returns from child object, such situation is called property shadowing
    // its called method overriding if methods are same in an object and its prototype

    var containerElm = document.getElementById('container');
    containerElm.innerHTML = 'parObj.getPar() = > ' + parObj.getPar() + ' childObj.getChl() = > ' + childObj.getChl() +
        ' childObj.getPar => ' + childObj.getPar() + ' childObj.getStaticPar() => ' + childObj.getStaticPar();
}