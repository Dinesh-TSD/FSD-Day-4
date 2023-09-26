//c.Sum of all numbers in an array

var arr=[1,2,3,4,5];

var sum = (function(array){
    var total=0;
    for (let i = 0; i< array.length; i++) {
        total += array[i];
        
    }
    return total;
})(arr);
console.log(sum);