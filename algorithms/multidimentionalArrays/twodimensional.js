var given = [
    [2,3,6,7],
    [5,7,8,9],
    [5,1,9,2],
    [4,3,7,6],
];

var i, j, len = given.length;

for (i=0; i<len; i++) {
    for(j=0; j<len; j++) {
        console.log(i + ' ' + j + ' == ', given[i][j]);
    }
}
console.log('given', given);