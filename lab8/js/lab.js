/*
 * Author: Hazel Prasetya <hprasety@ucsc.edu>
 * Created: 27 October
 */

var array = [1, 2, 3, 4, 5];
function squared(x) {
    return x * x;
}
var results = array.map(squared);
console.log(results);
console.log(array.map(function(x) {
    return Math.sqrt(x);
}));