// create a generic type GetSurname that  recieves string as argument and it returns second string as type
type Names=["virat kohli","rohit sharma", "shreyas iyer"]

type GetSurname<T>= T extends `${infer S} ${infer R}`?R:never;

type IsKohli=GetSurname<Names[0]>; //"kohli"
type IsSharma=GetSurname<Names[1]>; // "sharma"
type IsIyer=GetSurname<Names[2]>; // "iyer"