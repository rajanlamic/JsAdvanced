/**
 * Created by kalpana on 30/04/17.
 */


function OuterFunction(outerEnv) {

    var privateVar = 'private Limited';

    function InnerFunction(innerEnv) {
        console.log('privateVar => ' +  privateVar + ' outer => ' + outerEnv + ' inner => ' + innerEnv);
    }

    function updateOne() {
        privateVar = 'updateOne private Limited';
    }

    function updateTwo() {
        privateVar = 'updateTwo private Limited';
    }

    return {
        InnerFunction: InnerFunction,
        updateOne:updateOne,
        updateTwo:updateTwo
    };
}

var createEnv = OuterFunction('firstEnv');

createEnv.InnerFunction('first');

createEnv.InnerFunction('second');


createEnv.updateOne();
createEnv.InnerFunction('third');


createEnv.updateTwo();
createEnv.InnerFunction('fourth');
