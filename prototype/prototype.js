function MyClass() {
    this._privateProp = {};
    this.publicProp = [];
}

MyClass.prototype = {
    _privateMethod: function() {
        return '_privateMethod';
    },
    publicMethod: function() {
        return 'publicMethod';
    }
}

var myNewClass = new MyClass();
console.log(myNewClass.publicMethod());
console.log(myNewClass._privateMethod());