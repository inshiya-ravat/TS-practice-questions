// make type such that if you pass "goodbye" literal type then you return "hello" literal type.else return never type
// why never? "the never type represents the type of values that never occur."
 
type YouSayGoodbyeAndISayHello<T>= T extends "goodbye" ? "hello" : never
type IsHello=YouSayGoodbyeAndISayHello<"goodbye"> // hello
type IsNotHello=YouSayGoodbyeAndISayHello<true> // never

// follow-up question of above question
// if you pass "goodbye" then you should return "hello"
// else you should return "hello"

type YouSayGoodbyeAndISayHelloo<T>= T extends "goodbye" ? "hello" : "hello"
type IsHello1=YouSayGoodbyeAndISayHelloo<"goodbye"> // hello
type IsNotHello1=YouSayGoodbyeAndISayHelloo<true> // hello

// follow-up question of above question
//   if you pass "goodbye" then you should return "hello"
//   if you pass "hello" then you should return "goodbye"
// if you pass anything else then you should return never

type YouSayGoodbyeAndISayHellooo<T>= T extends "goodbye" ? "hello" : T extends "hello" ? "goodbye" : never
type IsHello11=YouSayGoodbyeAndISayHellooo<"goodbye"> // hello
type IsGoodbye11=YouSayGoodbyeAndISayHellooo<"hello"> // hello
type IsNotHello11=YouSayGoodbyeAndISayHellooo<true> // hello