function countBy<T>(arr:T[], func: (args:T)=>any){
    const map = new Map<ReturnType<typeof func>, number>()
    arr.forEach(a => {
        const result:number = func(a);
        if(map.has(result)){
            const count = map.get(result);
            if(count) map.set(result, count+1)
        }
        else{
            map.set(result,1)
        }
    });
    console.log(map)
}
countBy([6.1, 4.2, 6.3], Math.floor);
countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);