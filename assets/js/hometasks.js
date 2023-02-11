"use strict";

//2) Ededin faktorialinin hesablanmasini recursive function ile yazin.

// function factorialOfNum(num){

//     if(num == 1){
//         return num
//     }else{
//         return num * factorialOfNum(num-1)
//     }
    
// }
// console.log(factorialOfNum(5));


//3) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.



let student1={
    name:"Gunel",
    surname:"Meherremova",
    age:23,
    email:"gunel@code.edu.az"

}
let student2={
    name:"Sehla",
    surname:"Beshirzade",
    age:25,
    email:"sehla@code.edu.az"

}
let student3={
    name:"Ferid",
    surname:"Kerimov",
    age:24,
    email:"ferid@code.edu.az"

}
let student4={
    name:"Seyid",
    surname:"Abdullayev",
    age:20,
    email:"seyid@code.edu.az"

}
let student5={
    name:"Lale",
    surname:"Velizade",
    age:17,
    email:"lale@code.edu.az"

}
let students=[student1,student2,student3,student4,student5]

//1) Yashi 18-25 araliginda olan telebelerin sayi.

// function getCountStudentsByAge (arr){
//     let count=0;
//     for (const item of arr) {
//         if(item.age>18 && item.age <25){
//             count++;
//         }

//     }
//     return count;
// }
// console.log(getCountStudentsByAge(students));

//2) Emailinde "c" herfi olan studentlerin sayi.

// function getEmailStudentsByLetter (arr){
//     let count=0;
//     for (const item of arr) {
//         if(item.email.includes("c")){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(getEmailStudentsByLetter(students));


//4) Gelen yasha gore hansi ilden olduqugunu gosteren function yazin. Meselen 30 gelirse function geriye 1993 qaytarmalidir.

// let age=30;

// function getYearByAge (age){
   
//     var year=new Date().getFullYear();
//     let result=year-age;
//     return result;

// }
// console.log(getYearByAge(age));