for(let i=2; i<=n; i*=i){}
/**
 * 2--> 4--> 16 -->256--> ......... T terms
 * 2^1 --> 2^2 --> 2^4 --> 2^8 --> ...... -->2^k
 * 2^k == n
 * klog2=logn
 * k=logn
 * 1,2,4,8,.....logn
 * 
 * Tth term = ar^(t-1)
 * logn=1*2^(t-1)
 * logn=2^t /2
 * logn=2^t
 * log(log n)=t
 * o(loglogn)
 */

let arr=Array(100000);
for(let i=0; i<100000; i++){
    arr[i]=1;
}

let nums=[];
for(let i=0; i<100000; i++){
    nums.push(1);
}