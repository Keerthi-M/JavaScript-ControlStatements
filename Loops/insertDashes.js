/* Description: Accept a number input and print a string output. Define a function to perform the following operation.
Insert dashes (-) between two consecutive even numbers. Note that the function should return the array or array-like object. For example if you accept 025468 the output should be 0-254-6-8.
Conditions:
 1.Javascript array methods must be used.
 2.The data type should be declared as mentioned above. */
// Declaring an array "num" with some integers values.
var num = [2,3,4,5,67,98,34];

// method toString() converts an array to a string of (comma separated) array values.
console.log(num.toString());
for(let x=1;x<num.length;x++)
{
// checks whether the array element is even or not.
   if(num[x] %2==0)
   {
   // The join() method joins all array elements into a string and also as given dash inside the join method,it adds dash between the array elements.
     console.log(num.join("-"));
   }
}