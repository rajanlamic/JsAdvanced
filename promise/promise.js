/**
 * Created by rajan.lamichhane on 20/06/2016.
 */
"use strict";

function myPromise(condition) {
    var intervalTime = 1000;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(condition){
                console.log('passed');
                resolve(condition);
            } else {
                console.log('failed');
                reject({error: 'error'});
            }
        }, intervalTime);

    });
}

var myPromiseObj = new myPromise('abc');

myPromiseObj.then(function(data) {
    console.log('first then', data);
    return data + '1';
})
    .then(function(data) {
        console.log('second then', data);
        return data + '2';
    }, function(error) {
        console.log('error', error);
    })
    .then(function(data) {
        console.log('third then', data);
        return data + '3';
    }, function(error) {
        console.log('error', error);
    })
    .catch(function(error) {
        console.log('catched', error);
    });


var myPromiseObjE = new myPromise(false);

myPromiseObjE.then(function(data) {
    console.log('first then', data);
})
    .then(function(data) {
        console.log('second then', data);
    }, function(error) {
        console.log('error', error);
    })
    .then(function(data) {
        console.log('third then', data);
    }, function(error) {
        console.log('error', error);
    })
    .catch(function(error) {
        console.log('catched', error);
    });

/*
 Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
 VM96:9 passed
 VM96:23 first then abc
 VM96:27 second then abc1
 VM96:33 third then abc12
 VM96:12 failed
 VM96:51 error Object {error: "error"}
 VM96:54 third then undefined
 */