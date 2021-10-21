/*
 * Author: Hazel Prasetya <hprasety@ucsc.edu>
 * Created: 21 October
 */

var myTransport = ['walking', 'bus'];
var myMainRide = {
    make: 'h',
    model: 'model name',
    color: '#HHHHHH',
    year: 3000,
    ownIt: false,
    age: function() {
        return 2021 - this.year;
    }
};

// Output
document.writeln(`Types of transportation I use: ${myTransport}</br>`);
document.writeln(`My main ride (which I do not own): ${JSON.stringify(myMainRide, null, '\t')}</br>`);