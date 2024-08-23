function displayName ()
{
    console.log("My name is Prasad")
}
console.log("hello world")
displayName();

// function can take parameters
function display (n)
{
    console.log(`My name is ${n}`)
}
display(12345)
// wAF to take two numbers and print its sum

function sum(a, b) {
	console.log(`Sum is ${a + b}`)
}
sum(true, 2)

function add (a, b)
{
    console.log(a+b)
}
add(5)
// what if we want take all paraeters
//rest operator is used to take multiple values as a array. it is denoted by ...
//Always rest operator should be last
// spread operator is denoted by ...(three dots)
function myFun (a,...b)
{
    const arr=[12,13,...b,14]
    console.log(a,b,arr)
}
myFun(8,6,7,8,5,5,"jhhdf",true)


function fruits (a, ...b) //rest
{
    console.log(a, b);
    let newArr = [...b, "pineapple"] //spread
    console.log(newArr)
}
fruits("apple","mango","orange","banana")




function fun2 (x, y, ...z) // rest is used to take rest of values from arguments 1,2,3 and pack them as array - [1,2,3]
{
    console.log(x, y, z);
    let p = [...z, 4]
    console.log(p)//spread operator is used to spread out values inside z [1,2,3,4]
}
fun2(5, 6, 1, 2, 3);

// function can return
function calc (p, q)
{
    return p+q
}
let x=calc(5,6)
console.log(x)






















