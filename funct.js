// basic fungsi
function foo2(x=0) {
    return x+1;
}
console.log(foo2(1));

// function expression
(function (x=0) { 
    console.log(x+1);
 })(1);


//  arrow fungsi
const foo = (x=0)=>{
    return x+1
}
console.log(foo(1));


// function loop(x) {
//     if(x>=10) return;
//     console.log(x);
//     loop(x+1);
//   }

//   loop(5);

// fungsi rekursif =fungsi tanpa nama
(()=>console.log('Hello'))();