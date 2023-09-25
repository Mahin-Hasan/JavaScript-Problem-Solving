function add(num1,num2){
    console.log(num1,num2);
    console.log(arguments);
    console.log(arguments[2]);
}
// Argument is a array like object and push pop will not work 
add(12,13,14,15,16);