//Arrays are used to store some items/data using indexes
let arr = [2, "raj", true];
console.log(arr)
// indexes are like address , starts from zero
console.log(arr[1])
console.log(arr.length) // length is number of items in array

//array methods
let arr1 = [5, 4, 8];
arr1.push(6,5,7,9,6);
console.log(arr1) // push adds elements at end of the array
arr1.pop() // pop is used to remove last element of array
console.log(arr1)
arr1.unshift(11, 21, 31) //unshift adds elements at start of the array
console.log(arr1)
arr1.shift(); // shift is used to remove first element in the array
console.log(arr1);

arr1.splice(4, 3)
console.log(arr1)
arr1.splice(4, 0, "abc", "xyz", "pqr")
console.log(arr1)
/* splice(startingIndex, deleteCount, adding element)
*/
/* let friends=["john","Monika","Ross","Phoeby","casey","stuward"]
1. delete stuward and add "chandler"
2. delete "john" and add "joey"
3. delete "casey" and add "rachel" */
let friends = ["john", "Monika", "Ross", "Phoeby", "casey", "stuward"];
friends.pop(); friends.push("chandler");
friends.shift(); friends.unshift("joey");
friends.splice(4, 1, "Rachel")
console.log(friends)
let arr2=[5,4,3,2,5,1]
console.log(arr2.indexOf('5'))
console.log(arr.lastIndexOf('5'))
console.log(arr2.concat(["raj","baj"]))// used to add arrays
// forEach
let students = ["Raj", "Prasad", "soni", "Priya"]
students.forEach(function (val,ind)
{
    console.log(val+" "+ind)
})

// forEach will take one call back function and it will
// run that callback function for each and every element
//of the array. by default array item will be first parameter
// take array [5,6,7,8] and print each element square with indexes

let arrayValues = [5, 6, 7, 8];
arrayValues.forEach(function (a, b)
{
    console.log(a * a + " " + b)
})

// forEach cannot return values

let result = arrayValues.forEach(function (val)
{
    return val*val
})
console.log(result)
let result2 = arrayValues.map(function (val) {
	return val * val
})
console.log(result2)
// take names array = ["prasad","Jessi","Priya","Shekhar"]
//  ["P","J","P","S"]
let result3 = ["prasad", "Jessi", "Priya", "Shekhar"].map(
(v)=>v.charAt(0).toUpperCase())
console.log(result3)




















