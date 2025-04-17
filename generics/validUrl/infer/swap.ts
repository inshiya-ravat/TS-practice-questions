// Swap First and Last Name
type SwapName<T extends string> = T extends `${infer S} ${infer Y}`? `${Y} ${S}`:never
type S1 = SwapName<"John Doe">;      // "Doe John"
type S2 = SwapName<"Alice Johnson">; // "Johnson Alice"