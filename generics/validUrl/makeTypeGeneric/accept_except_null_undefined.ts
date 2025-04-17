// create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined
type Maybee<t extends {}> = t
type StringCanBee=Maybee<string>  // string | null |undefined
type ZeroCanbe=Maybee<0>  // 0 | null |undefined
type EmptyStringCanbe=Maybee<"">  // "" | null |undefined
type NullCanbe=Maybee<null>  // TS error
type UndefinedCanbe=Maybee<undefined>  // TS error