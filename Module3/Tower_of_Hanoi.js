function Tower(n){
    solve(n,'A','B','C');

}
function solve(n,a,b,c){
    if(n>0){
        solve(n-1,a,c,b);
        console.log(`Move disk ${n} from ${a} to ${c}`);
        solve(n-1,b,a,c);
    }
}

Tower(3);