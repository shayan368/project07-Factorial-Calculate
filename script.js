// FACTORIAL CALCULATE 

// USING REDUCE 

// let factorialOf6 = [6,5,4,3,2,1]

// function calculateFactorail(a,b) {

//     return a*b
    
// }

// console.log(factorialOf6.reduce(calculateFactorail)) 

let array = [6,5,4,3,2,1]

for (let index = 0; index < 6; index++) {
    const element = array[index];
    
    console.log(element)
}

function MultiplyThem(a,b,c,d,e,f) {
    return a*b*c*d*e*f;
    
}
console.log(MultiplyThem(6,5,4,3,2,1))

let arr = [202,340,550];

if(arr[0]>arr[1] && arr[0]>arr[2]){
    console.log("The Greater Number is ", arr[0]);   
}else if(arr[1]>arr[2] && arr[1]>arr[0]){
    console.log("The Greater Number is ", arr[1]);
}else{
    console.log("The Greater Number is ", arr[2]);
}