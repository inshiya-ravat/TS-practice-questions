// create Maybe generic type that recieves any(not typescript any, here any means any kind of type) type, and it returns actual type with null and undefined
type Maybe<t> = t | null | undefined 
type StringCanBe=Maybe<string>  // string | null |undefined