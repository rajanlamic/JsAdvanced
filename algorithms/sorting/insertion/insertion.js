//http://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort#JavaScript

var given = [7, 1, 8, 5, 6, 34, 10, 19, 13];

console.log('given', given);

var len = given.length, // no of items in the array
        i, // unsorted index
        j, // sorted index
        val; // value currently being compared

for (i = 0; i < len; i++) {
//    console.log(i + ' -- ' + given[i]);

    val = given[i];

    /**
     * Basically shift all the values of unsorted section to sorted section right to the end
     */


     // first comparion no check
     // second 
     
     // i=0, j=1
     
    for(j=i; j > 0 && val < given[j-1]; j--) { // if each inner comapariosn is greater than only current val in check
       console.log('i=' + i);
       console.log('j=' +j);
        given[j] = given[j-1];
        given[j-1] = val;
    }
}


console.log('given', given);

/**
 * ginven numbers [7, 1, 8, 5, 6, 34, 10, 19, 13]
 * 
 * Comparision of 7 with 7
 * i = 0 , nothing happens as 7 is always sorted and it has nithing to compare to 
 * satisfy comparision val < given[j-1] val is 7 given[j-i] is [0-1] [-1] i.e j[-1] nothing 
 * and 7 < nothing, did not satisfy
 * 
 * 
 * comparision 1,
 * for 7 and 1
 * 1 < 7, pass so now number would be 1, 7, ...
 * 
 * comparision 2,
 * [1, 7, 8] out of [1, 7, 8, 5, 6, 34, 10, 19, 13]
 * goes to nothing change as already coming alright
 * 
 * comparision 3,
 * [1, 7, 8, 5] out of [1, 7, 8, 5, 6, 34, 10, 19, 13] val is 5
 * j-- comes from end i.e 5 to all the way to 0 which is 1
 * now comparision happens,
 * 5<8, true so it arranges like [1, 7, 5, 8]
 * again when j-- goes to 2, compares 7 and 5 as 5 is the numbner given[i] = 5 to compare
 * again 5<7 so rearrange sot [1, 5, 7, 8]
 * 
 * And goes on
 * 
 */