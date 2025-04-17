// given nested array, flatten it! (recursion + infer)
type FlattenOnce<T extends any[]>= T extends [infer S, ...infer R] ? 
  S extends any[] ? [...S,...FlattenOnce<R>] : [S,...FlattenOnce<R>] 
  : [];
type F1 = FlattenOnce<[1, 2, [3, 4], [5]]> //F1 should be [1,2,3,4,5]