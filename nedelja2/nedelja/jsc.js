/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/

let N = 4;
for (let i = 0;i<N; i++){
    let red = " ".repeat(N - i) + "*".repeat(2*i + 1);
    console.log(red);
}

console.log("*".repeat(2 * N + 1));

for(let i = N -1; i >= 0 ; i--){
    let red = " ".repeat(N - i) + "*".repeat(2*i + 1);
    console.log(red);
}