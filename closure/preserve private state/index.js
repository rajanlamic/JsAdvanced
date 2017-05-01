/**
 * Created by kalpana on 30/04/17.
 */


function OuterFunction(outerEnv) {

    var privateVar = 'private Limited';

    function InnerFunction(innerEnv) {
        console.log('privateVar => ' +  privateVar + 'outer => ' + outerEnv + ' inner => ' + innerEnv);
    }

    return InnerFunction;
}

var createEnv = OuterFunction('firstEnv');

var preserveEnv1 = createEnv('first');

var preserveEnv2 = createEnv('second');
