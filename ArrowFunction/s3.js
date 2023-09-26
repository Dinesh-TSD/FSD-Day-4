//c.Sum of all numbers in an array

var arr=[1,2,3,4,5];

 var sum = (array) => {
    var total=0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        
    }
    console.log(total);
}
sum(arr);