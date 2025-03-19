// Given a function which receives an arugment and returns a same arugment, make a function typesafe.
// ex. 
// function identity(arg){
//   return arg;
// }
// ex. if identity receives a number it returns a number
function returnSameArg<T>(arg:T):T{
    return arg
}
console.log(returnSameArg("hi"))