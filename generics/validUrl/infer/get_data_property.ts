// Create Generic GetDataValue type that inherit the type of data property
type GetDataValue<T> = T extends {data: infer S}?S:never;
type MyHello= GetDataValue<{data:"hello"}> // "hello"
type MyNumber= GetDataValue<{data:1}> // 1
type MyValidType= GetDataValue<{data:{isValid:boolean}}> // {isValid:boolean}