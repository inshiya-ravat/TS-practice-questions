type Fruits = "apple" | "banana" | "orange"
type AppleOrBanana<T> = T extends "apple" | "banana" ? T: never;
const ab : AppleOrBanana<"banana"> = "banana"

type appleOrBanana = Fruits extends infer T ? T extends "apple" | "banana" ? T : never : never;