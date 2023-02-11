"use strict";


//RECURSIVE -FUNCTION (bir function icinde hemin function caqirmaq -bir nov loop mentiqi)

//ama sert qoymalisan ki heredefe bir birin icinde isledmesinler.

// function getNumbers(num){
//     console.log(num);            //5 yazdirir
     
//     let number =num-1;           //edir 4

//     if(number>0){
//         getNumbers(number);     //0 olanda daynacaq
//     }
// }
// getNumbers(5) //cavab 5,4,3,2,1

// function sumOfNums(n){
//     let sum=0;
//     for(let i=1;i<n;i++){
//         sum+=i;
//     }
//     console.log(sum)
  
// }
// sumOfNums(5)

// function sumOfNums(num){

//     if(num == 1){   //1 gelende umumi num qaytarir
//         return num;
//     }else{
//         return num + sumOfNums(num -1) //5+(5-1) yuxardaki methoda 4 gedir
//     }

    
// }
// console.log(sumOfNums(5))


//loops
//foreach

// let numbers=[11,4,6,8,9];

// numbers.forEach((element,index) => {   
//     console.log(element)      //item verir
// });

// numbers.forEach((element,index) => {   
//     console.log(index)      //indexlerini verir

// });

// numbers.forEach((element,t) => {   
//     console.log(element + " - index:"+ t)     
    
// });

// numbers.forEach((element,index) => {   
//     numbers[index]=element*2      //arraydaki butun itemlari 2 e vurmaq

    
// });
// console.log(numbers);

// numbers.forEach((element,index) => {   
//    if(element == 6)     //#c da ancaq item qaytarir foreach amab   indexde qaytarir 
//    console.log(element);
// });


//loops forof -array ucun

// for (const item of numbers) {
//     console.log(item)             //forof #cpdaki foreache oxsayir ancaq item verir
// }


//lopps forin -object ucun cunku objectin keyine catmaq olur 


// let user1={
//     name:"Mirze",
//     surname:"Bashirzade"
// }

// for (const key in user1) {  
//     console.log(key)
//     console.log(user1[key])//verecek name,surname
//    console.log(key + "-" + user1[key])  //cixacaq name -Mirze ,surname-Bashirzade   
// }

// for (const key in user1) {
//    if(key == "name"){        //key name olaninin adini yazdir
//     console.log(user1[key])
//    }
// }

// let user1={
//     id:1,
//     name:"Mirze",
//     surname:"Bashirzade"
// }
// let user2={
//     id:2,
//     name:"Cinare",
//     surname:"Ibadova"
// }
// let user3={
//     id:3,
//     name:"Elekber",
//     surname:"Hesenov"
// }

// let users=[user1,user2,user3]

// for (const user of users) {  
//     console.log(user)   //objectleri verir
//     console.log(user.name + " " + user.surname)
// }
// for (const user of users) {    //forofnan objecte catib
//    for (const key in user) {    //forinle  hemin objectin keyine catiriq
//          console.log(`Key : ${key}, Value: ${user[key]}`)
//    }
// }

// let count =0;
// for (const user of users) {    
//     for (const key in user) {    
//           if(key == "name" && user[key] == "Mirze"){
            
//                 count ++;
            
//           }
//     }
//  }
//  console.log(count);

// for(const user of users) {
//     if(user.name == "Mirze" && user.surname == "Beshirzade"){
//         count ++;
//     }
// }
// console.log(count)


// let nums1 = [1,4,6,9,11]  //array hip yadddasda yerlesir ve deysiklik edende eyni setirde edir


// console.log(nums1)

// let nums2=nums1;

// nums2[0] = 100;         

// console.log(nums1);      //100,4,6,9,11


// let newArr = nums1.map(m=>{
//     return m * 2;
// })

// console.log(newArr);

// console.log(nums1)


function numsOfOdd(num){
   return num%2 !=0
}
function numsOfEven(num){
    return num%2 ==0
 }
 function numOfGraterThanFive(num){
    return num > 5;
 }

function calculateNums(arr,callback){
    let sum=0;
    for(let i = 0;i<arr.length;i++){
        if(callback(arr[i],2)){
            sum += arr[i]
        }
    }
    console.log(sum)
 }



// function sumOfOdd(arr){
    // let sum=0;
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i]%2 !=0){
//             sum += arr[i]
//         }
//     }
//     console.log(sum)
// }

// function sumOfEven(arr){
    // let sum=0;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]%2 ==0){
//             sum+arr[i]
//         }
//     }
//     console.log(sum)
// }
// function sumOfGreaterThanFive(arr){
    // let sum=0;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] >5){
//             sum += arr[i]
//         }
//     }
//     console.log(sum)
// }


let nums=[1,2,3,4,5,6];

calculateNums(nums,numsOfOdd);  //method yazib o methodu calback kimi gondermey
calculateNums(nums,(m,n) => m % 2 !=0 && n > 3);   //methodsuz calback gondermey
calculateNums(nums,numsOfEven);
calculateNums(nums,m => m % 2 ==0);
calculateNums(nums,numOfGraterThanFive);
calculateNums(nums,m => m > 5);




let user1={
    id:1,
    name:"Mirze",
    surname:"Bashirzade",
    age:22
}
let user2={
    id:2,
    name:"Cinare",
    surname:"Ibadova",
    age:27
}
let user3={
    id:3,
    name:"Elekber",
    surname:"Hesenov",
    age:20
}
let user4={
    id:4,
    name:"Jale",
    surname:"Abdullayeva",
    age:18
}


let users=[user1,user2,user3,user4]

// function showUsersByAge(people,callback){
//     for (const item of people) {
//         if(callback(item.age)){
//             console.log(item.name + " " + item.surname)
//         }
//     }
// }


// showUsersByAge(users,m => m >20)

let filteredDatas = users.filter(m=>m.age>20)

// for (const item of filteredDatas) {
//     console.log(item.name)
// }

//   let sumOfAge=0;

// for (const item of filteredDatas) {
//    sumOfAge+=item.age
// }
// console.log(sumOfAge)

const getSumOfAgesFromFilteredDatas = datas =>{
        let sumOfAge=0;
        for (const item of datas) {
            sumOfAge+=item.age
        }
        console.log(sumOfAge)
}
getSumOfAgesFromFilteredDatas(filteredDatas)
    


let numss=[1,3,4,5]
let sum=numss.reduce((total,current)=>total+current)  //total=1,curent=2,sonra total olur=3 current=3
console.log(sum)

