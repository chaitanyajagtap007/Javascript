

const prompt = require('prompt-sync')();

// program for reverse string by word


// let str = "the name is chaitanya";
// let rev ="";
// let word ="";
// for(let i=0;i<str.length;i++){
//     if(str[i] == " "){
//         rev = rev + word + " ";
//         word = "";
//     }
//     else if(i == str.length-1){
//         rev = rev + word;
//     }
//     else{
//         word = word + str[i];
//     }
// }
// console.log(rev);


// let str = "the name is chaitanya";

// let rev = str.split(" ").map((item)=>{
//     console.log(item);
//     return item.split("").reverse();
// }).join(" ");




// console.log(rev);



let str1 = "the name is chaitanya";

let rev1= str1.split(" ").map((item)=> item.split("").reverse().join(" ")).join("  ");

console.log(rev1);


// let string=prompt("Enter any strin to reverse word by word :");

// function reverse(str){
//     str.split(" ").map((item)=>{
//         return item.split("").reverse().join("");
//     })
// }

// console.log(reverse(string));