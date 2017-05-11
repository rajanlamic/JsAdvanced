/**
 * Created by kalpana on 08/05/17.
 */

class MyClass {
    constructor(par1, par2) {
        this.par1 = par1;
        this.par2 = par2;
    }

    get parOne() {
        return this.par1;
    }

    joinToAll(par3) {
        return this.par1 + this.par2 + par3;
    }
}

var myObj = new MyClass('par1', 'par2');


var containerElm = document.getElementById('container');
containerElm.innerHTML = 'myObj.parOne => ' + myObj.parOne + ' myObj.joinAll("par2") => ' + myObj.joinToAll("par2");