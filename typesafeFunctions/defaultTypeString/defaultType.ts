// Given an above identity function (which receives an argument and returns a same arugment), default arugment should be string if you want to pass nothing.
// ex. identity(); // error we must pass string
function identity<T = string>(arg:T):T{
    return arg
}
console.log(identity('hi'))


// . Given an above identity function (which receives an argument and returns a same arugment), default arugment should be string if you want to pass nothing.
// ex. identity(); 
// error we must pass string
function identity1<T=string> ():T[]{
    return [];
  }
  console.log(identity1<Number>())
  let str = 9
const fn = identity1()
  