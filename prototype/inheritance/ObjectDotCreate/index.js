/**
 * Created by kalpana on 30/04/17.
 */

window.onload = function() {

   var ParentObject = {
       parentProp: 'parentProp',
       myProp: 'parent my prop',
       get: function() {
           return this.myProp
       }
   }

    var ChildObject = Object.create(ParentObject);
    ChildObject.myProp = 'child my prop';

    //ChildObject = {
    //    childProp: 'childProp'
    //}

    // Set child objects prototype to be object of parent, so child object will have access to parent object
    // use object.create built in method

    var containerElm = document.getElementById('container');
    containerElm.innerHTML = 'parentProp => ' + ChildObject.parentProp + ' get from child => ' + ChildObject.get() ;
}