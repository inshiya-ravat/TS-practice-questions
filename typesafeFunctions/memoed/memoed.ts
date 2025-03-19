const func = (arg1:number, arg2:number):number => {
    return arg1 + arg2
}
const mul = (arg1:number,arg2:number):number =>{
    return arg1 * arg2
}
let obj = {
    div(arg1:number,arg2:number):number{
        return arg1/arg2
    }
}

function memo<T extends Function>(func1:T){
    const map = new Map();
    return function<T extends Number>(...args:T[]){
        let objKey = args.toString()
        console.log("checking key", objKey)
        if(map.has(objKey)){
            console.log("fetching from map", objKey)
            return map.get(objKey)
        }
        else{
            console.log("calculation by calling function", objKey)
            let ans = func1(...args)
            map.set(objKey,ans)
            return ans
        }
    }
}

const memoed = memo(func)
const memoed2= memo(mul)
const memoed3= memo(obj.div)

console.log(memoed3(1,3))
console.log(memoed3(1,4))    
console.log(memoed3(1,3))

console.log(memoed(1,3))
console.log(memoed(1,4))    
console.log(memoed(1,3))

console.log(memoed2(2,3))
console.log(memoed2(1,4))    
console.log(memoed2(2,3))
