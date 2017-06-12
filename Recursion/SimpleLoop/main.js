/**
 * Created by kalpana on 08/06/17.
 */

function simpleLoop() {
    for(var i=0; i<10; i++) {
        document.getElementById("root").innerHTML += i + "\n";
    }
}

// Call
simpleLoop(); // 0 1 2 3 4 5 6 7 8 9

function simpleLoopWithRecursion(num) {
    if(num > 9) {
        return num;
    } else {
        document.getElementById("root").innerHTML += num + "\t";
        return simpleLoopWithRecursion(num + 1);
    }
}

// Call
simpleLoopWithRecursion(0); // 0 1 2 3 4 5 6 7 8 9


function simpleLoopFactorial(num) {
    var result = 1;
    for(var i=1; i<=num; i++) {
        result *= i;
    }
    return result;
}

// Call
document.getElementById("root").innerHTML += '<br>' + simpleLoopFactorial(5); // 120

function recursionFactorial(num) {
    if(num <= 0) {
        return 1;
    } else {
        return num * recursionFactorial(num -1);
    }
}

// Call
document.getElementById("root").innerHTML += '<br>' + recursionFactorial(5); // 120