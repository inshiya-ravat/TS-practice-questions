function stringAdd(str1:string , str2:string):string{
    let carry:number = 0
    let i:number = str1.length - 1
    let j:number = str2.length - 1
    let res:string = ""

    while(i>=0 || j>=0 || carry>0){
        const digitFromStr1:number = i>=0 ? parseInt(str1[i]) : 0
        const digitFromStr2:number = j>=0 ? parseInt(str2[j]) : 0
        const add:number = digitFromStr1 + digitFromStr2 + carry
        const val:number = add % 10
        carry = Math.floor(add / 10)
        res = val + res
        i--
        j--
    }
    return res
}
console.log(stringAdd('999','99'))