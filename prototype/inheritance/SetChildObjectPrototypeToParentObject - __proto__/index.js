/**
 * Created by kalpana on 30/04/17.
 */

window.onload = function() {

   var ParentObject = {
       parentProp: 'parentProp'
   }

    var ChildObject = {
        childProp: 'childProp'
    }


    // Set child objects prototype to be object of parent, so child object will have access to parent object
    // use __proto__ special property

    ChildObject.__proto__ = ParentObject;

    var containerElm = document.getElementById('container');
    containerElm.innerHTML = 'parentProp => ' + ChildObject.parentProp +  ' childProp => ' + ChildObject.childProp;
}