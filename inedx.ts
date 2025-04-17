// function hello(name: string | string[]) {
//     if(typeof name === "string"){
//         console.log(`Hello ${name}`)
//     }
//     else{
//         for(let n of name){
//             console.log(`Hello ${n}`)
//         }
//     }
// }
// hello("Inshiya")
// hello(["Inshiya", "Krisha"])

// function handleClick(){
//     let input = document.getElementById("ip")! as HTMLInputElement;
//     const newLi = document.createElement('li');
//     newLi.textContent = input.value;

//     const ul = document.getElementById("todo-list")!;
//     ul.appendChild(newLi)
//     input.value = ""
// }

// function identity<t>(item:t) :t{
//     return item
// }
// console.log(identity<number>(9))
// console.log(identity<string>("hi"));
// console.log(Math.floor(Math.random() * 10))

// => discriminated uniions
// interface dog{
//     name: string;
//     kind : "Dog";
// }
// interface cat{
//     name: string;
//     kind: "Cat";
// }
// interface cow{
//     nmae: string;
//     kind: "Cow";
// }
// type farmAnimal = dog | cat | cow;
// function getSoundOfAnimal(animal : farmAnimal):string{
//     switch(animal.kind){
//         case "Cat":
//             return "MEOWWWWWWWW"
//         case "Cow":
//             return "MOOOOOOOOOOOOOOO"
//         case "Dog":
//             return "BHAU BHAU"
//     }
//     return "nothing"
// }
// const lexi: dog = {
//     name: "Lexi",
//     kind: "Dog"
// }
// console.log(getSoundOfAnimal(lexi))

// function identity<t>(item :t):t{
//     return item
// }
// console.log(identity("hi"))

// function identity2<T = string>(item :T):T{
//     return item 
// }
// console.log(identity2())
// function check<t extends number>(n:t):t{
//     return n
// }
// console.log(check(9))

// function firstIndex<t extends Function>(arr: t): t{
//     return arr
// }
// console.log(firstIndex(()=>{}))

// type greeting = "hello"
// type shoutGreet = Uppercase<greeting>
// let x:shoutGreet ="HELLO";
// console.log(x)

// type t1 ={
//     i:number,
//     j?:number,
//     k?:number
// }
// type t2 = Readonly<t1>
// let x:t2 = {
//     i:0,
//     j: 9,
//     k:10
// }
// x.i =90
// console.log(x)

// function identity<Type=string>(arg?:Type):Type{
//     if(arg===undefined){
//      throw new Error("error we must pass string")
//     }
//     else{
//      return arg;
//     }
//  }
//  identity()

// function firstIndex<t extends Array<any>>(arr: t): t{
//     return arr[0]
// }

// write a typesafe function who any accept object with id property and returns a id.
// ex.
// function getId(arg){
//   return arg.id;
// }

// function returnSameArg1<T>(arg:T):T{
//     return arg
// }
// console.log(returnSameArg1("hi"))    

// function check<T extends Array<any>>(...args:T){
//     console.log(args[0].length)
// }
// console.log(check(['1']))

// function identityy<T = string>(arg:T):T{return arg}
// const str = identityy("inshiya")

// function check<T= (string[])>(...args:T[][]){
//     console.log(args[0].length)
// }
// check(['1'])
// console.log(check(['1']))

// console.log(typeof Promise.all([]))


// const promise1:Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promise 1 resolved')
//     },2000)
// })
// const promise2:Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2')
//     },3000)
// })
// const promise3:Promise<string> = new Promise ((resolve,reject) => {
//     setTimeout(() =>{ 
//         reject("Promise 3 resolved")
//     },4000)
// })

// type objj = {
//     status: string,
//     value? : string,
//     reason?: string,
// }
// function allSettled(promiseArr: Array<Promise<string>>):Promise<any>{
//     return new Promise((resolve, reject)=>{
//       const result:Array<objj> = []
//       promiseArr.forEach(promise => {
//         promise.then((res:string)=>{
//           const obj1 = {status :'fulfilled', value :res}
//           result.push(obj1)
//           if(promiseArr.length === result.length){resolve(result)}
//         }).catch((error)=>{            
//             const obj1 = {status :'rejected', reason :error}
//             result.push(obj1)
//             if(promiseArr.length === result.length){resolve(result)}
//         })
//       })
//     })
//   }

// allSettled([promise1,promise2,promise3])
//   .then((msg)=>console.log(msg))
//   .catch((err)=>console.error(err))


// function firstNonRepeatingCharacterr(s:string){
//   const map = new Map<string,object>()
  
//   for (let i=0;i<s.length;i++){
//     if(map.has(s[i])){
//       map.set(s[i], {count: ++map.get(s[i])!, index: i})
//     }else{
//       map.set(s[i], [1,i])
//     }
//   }
//   console.log(map.values())
//   return map.values().next() !== undefined ? map.values().next() : -1
// }
// console.log(firstNonRepeatingCharacterr("aadadaad"))



// in below function, we recieves array of any(not typescript any) in argument, and second argument which can be 
// any(not typescript any) type of element, and we are prepending that element into given array.
// const prepend = <T,U>(args: Array<T>,pre:U):Array<any>  => {
//   return [pre,...args];
 
// }
// const arr=prepend(['1'],{department:"react"})
 
// arr[0].department // works
// arr[1].charAt() .... // works 
// arr[0].charAt() // error
// arr[1].department .... // error

// const prepend = <T,U>(args: Array<T>,pre:U):[U,...Array<T>] => {
//     return [pre,...args];
   
//   }
//   const arr=prepend(['1','2'],{department:"react"})
   
//   // our output(arr) will be  [{department:"react"},'1','2'];
  
//   console.log(arr[0].department) // works and logs "react"
//   console.log(arr[1].department) // TS throws error and if run then logs undefined
//   console.log(arr[1].charAt(1))


// type objType = {
//   readonly id:number;
//   name: string;
// }
// type nonReadOnly = Readonly<objType>

// type GetDataValue<t extends {data:any}> = t['data']
// type MyHello= GetDataValue<{data:"hello"}> // "hello"
// type MyNumber= GetDataValue<{data:1}> // 1
// type MyValidType= GetDataValue<{data:{isValid:boolean}}> // {isValid:boolean}

