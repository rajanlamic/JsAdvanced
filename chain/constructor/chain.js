var obj1 = function()
{
    method1 = function() {
        console.log('method1');
        return this;
    }
    method2 =function() {
        console.log('method2');
    }
    
    return {
        method1:method1,
        method2:method2
    }
}

new obj1()
        .method1()
        .method2();