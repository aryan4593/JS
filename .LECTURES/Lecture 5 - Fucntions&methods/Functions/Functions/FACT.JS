const fact =  (val) => {
    if(val == 1 || val == 0) return 1;
    return fact(val-1) * val;
}
const fibo =  (n)=>{
    if(n ==  0) return 0;
    if (n == 1) return 1;
    if (n == 2 ) return 2;
    
    return fibo(n-1) + fibo(n-2);
}


console.log(fact(5) , fibo(4));