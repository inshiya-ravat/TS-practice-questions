// Extract only the last word 
type GetLastWord<T extends string> = T extends `${infer S} ${infer Y}`?GetLastWord<Y>:T;
type L1 = GetLastWord<"The quick brown fox">; // "fox"
type L2 = GetLastWord<"Hello world">;         // "world"