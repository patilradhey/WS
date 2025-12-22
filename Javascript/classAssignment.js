// 1) Check OddEven

// const { use } = require("react");

// function checkOddEven(num){
//     if(num % 2 == 0){
//         console.log(num,"Number is even")
//     }
//     else{
//         console.log(num,"Number is Odd")
//     }
// }

// checkOddEven(10)
// checkOddEven(7)

// 2) addNumbers

// function addNumbers(a,b){
//     return (a+b)
// }

// console.log("Sum is",addNumbers(5,6))

// // 3) PositiveNegative

// function checkNumber (num){
//     if(num > 0){
//         return "Positive"
//     }
//     else if(num <0){
//         return "Negative"
//     }
//     else{
//         return "Zero"
//     }

// }

// 4) FindLargest  

// function findLargest(a,b){
//     return a > b ? a:b;
// }

// console.log("Largest number is",(10,20))

// 5) loginCheck 

function loginCheck(userName, password){
    if(userName != null){
        if(password != null){
            return "Login Successfull"
        }
        else{
            return "Password Required"
        }
    }
    else{
        return "UserName Required"
    }
}

console.log(loginCheck("Radhey","rad@123"))