// in below function in argument we recieves array of any(not typescript any).
// we want to make it typesafe in such a way that typescript should throw error if array is empty.
 
type NonEmptyArray<t>= [t, ...t[]]
const ourArr=<t>(myArr:NonEmptyArray<t>)=>{
	console.log(myArr);
}
ourArr(["golang"]) // works
ourArr([true]) // works
ourArr([]) // ERROR