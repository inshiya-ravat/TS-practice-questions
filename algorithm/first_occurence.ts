// write a function that returns the first non-repeating character in a string
// ex.
// abbacded => "c"
// xxyyzz => ""
// axxyyzz => "a"

function firstNonRepeatingCharacter(str:string){
    const map = new Map<string,object>()
    for (let i=0;i<str.length;i++){
      if(map.has(str[i])){
        map.delete(str[i])
      }else{
        map.set(str[i], {count: 1, index: i})
      }
    }
    console.log( map.keys().next())
  }
  console.log(firstNonRepeatingCharacter("axxyyzz"))