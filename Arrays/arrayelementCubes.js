/*Description: Define a function which returns the output as per the required datatype. The array should be passed to the function. Find the product of cubes of the numeric vector using the while loop. Return the result when it is not null. Otherwise, return “Array returned null”.
Conditions:
 1.Use a math object to get the result.
 2.For loop is not allowed. */
// Declaring an array 'a' with five numeric vectors. 
var a=[1,2,3,4,5];
var i =0;
var product = " ";
if(a[i] != null)
{
while(i< a.length)
{
// Math object is used to get the cubes of the numeric vector elements present in the given array.
  let product = Math.cbrt(a[i]);
  console.log('product');
  i++;
}
}
else
{
console.log('Array is null');
}