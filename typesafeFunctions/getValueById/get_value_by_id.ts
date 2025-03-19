// write a typesafe function who accepts object and any property key of object. Function should returns value associated with given property key.
function getValueByKey<T extends object>(obj:T, key: keyof T){
    return obj[key]
}
const obj = {
    id: 1,
    name: "Inshiya",
}
console.log(getValueByKey(obj,"name"))