// create a generic type that only accepts string and attach "/" prefix to given string
type AddPrefix<t extends string> = `/${t}`
type Add=AddPrefix<"about"> // output will be: "/about"
type Addd=AddPrefix<2> // ts error