// given string, trim left spaces. (recursion + infer)
type TrimLeft<T extends string>= T extends ` ${infer R}`? TrimLeft<R>:T;
type trimmed = TrimLeft<'  Hello World  '>  // type of trimmed should be "Hello World  "