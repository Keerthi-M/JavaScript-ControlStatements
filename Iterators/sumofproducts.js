/* Description: Define a function which accepts an array . 
Calculate the product of each value of the array with the given number and find the sum of the products using the map method of the iterator.
Conditions:
 1.Map method must be used.
 2.The data types should be declared as mentioned above. */

// Declaring an array in static.
var arr = [2, 5, 6, 3, 8, 9]; 

// map() method is used to create a new array named "arreleProduct" to call the specific functions on each element of the parent array.
var arreleProduct = arr.map(function(val, index){ 

//It returns the array "arreleProduct" and elements of arrays are result of callback function.
      return {key:index, value:val*val*val + 5}; 
   }) 
  
// To print the array created using map method.        
        console.log(arreleProduct);