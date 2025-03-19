// write a typesafe function who accepts any array(array of string, number, object... anything) and returns first element of array if it exists.
function firstIndex<t extends Array<any>>(arr: t): t{
    return arr[0]
}