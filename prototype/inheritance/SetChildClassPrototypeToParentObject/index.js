/**
 * Created by kalpana on 30/04/17.
 */

window.onload = function() {

   function ParentClass() {
       this.parentProp = 'parentProp';
   }

    function ChildClass() {
        this.childProp = 'childProp';
    }

    // Set child class prototype to be object of parent, so child object will have access to parent object

    ChildClass.prototype = new ParentClass();


    var childObject = new ChildClass();



    var containerElm = document.getElementById('container');
    containerElm.innerHTML = 'parentProp => ' + childObject.parentProp +  ' childProp => ' + childObject.childProp;
}