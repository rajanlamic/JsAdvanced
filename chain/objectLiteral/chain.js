var obj1 = {
}

obj1 = {
    method1: function() {
        console.log('method1');
        return obj1;
//        return this;
    },
    method2: function() {
        console.log('method2');
        
    }
}

obj1.method1()
        .method2();