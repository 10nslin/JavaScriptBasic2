function magic_multiply(x, y){

    //test 1
    // return x * y;

    // //test 2  
    // if(x=== 0 && y=== 0){
    //     return "All Inputs =0";
    // }
    // //test 3
    // let arr1= x.map(i=> i * y);
    //     return arr1;
    //test 4
    if(y.constructor == String){
        return "Error: Can not multiply a string";
    }


}



//test 1 
// let test1 = magic_multiply(5, 2);
// console.log(test1);

//test 2
// let test2 = magic_multiply(0, 0);
// console.log(test2);

//test 3
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

//Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);