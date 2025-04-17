const obj = { name: "Virat kohli", details: { age: 35 } ,};
obj.toString = function(){
  return `${obj.name}--${obj.details.age}`
}
console.log(String(obj)); // "Virat Kohli--35"

  function myFn(){
    return "returned from my Fn";
  }
myFn.toString = function(){
  return "awesome function"
}

console.log(myFn);  // "awesome function"