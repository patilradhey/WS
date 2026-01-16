// 1)  Fix the Output
// let msg = "Hello";
// msg = msg + " World";
// console.log(msg);


// 2) Convert Function
// function toSeconds(minutes) {
//   return minutes * 60;
// }
// console.log(toSeconds(5)); // 300

// 3)Update the function to return the sum of all numbers in the array.
// function sumArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return sum;
// }
// console.log(sumArray(["1", "2", "3", "4"])); // 10

// 4) Remove duplicates from an array.
// let nums = [2, 3, 4, 2, 4, 5, 6, 3];

// let dupliNum = [];

// for (let i = 0; i < nums.length; i++) {
//   if (!dupliNum.includes(nums[i])) {
//     dupliNum.push(nums[i]);
//   }
// }
// console.log(dupliNum); // [2, 3, 4, 5, 6]

// 5)Button click should show alert but it's not working. Fix it.
{/* <button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", function () {
  alert("Button Clicked!");
});
</script> */}

// 6) Make the function work using Promise to print "Task Complete" after 2 seconds.

function waitTwoSeconds() {
  function waitTwoSeconds() {
 return new Promise((resolve)=>{
setTimeOut(()=>{
resolve()},2000)
});
}
}

waitTwoSeconds() .then(() => console.log("Task Complete"));



// 7) Create a function reverseString(str) that accepts a string and returns the reversed string. 
// Note don't use inbuilt methods.

// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// console.log(reverseString("hello"));

// 8) Given an array of numbers, write a function that returns a new array containing only numbers greater than 10.

// function greaterThanTen(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       result[result.length] = arr[i];
//     }
//   }
//   return result;
// }
// console.log(greaterThanTen([5, 12, 8, 20, 3, 15])); 
// [12, 20, 15]


// 9) Create an object student with properties:
// name
// rollNo
// marks
// Write code to print all object values using a loop.

// let student = {
//   name: "Radhey",
//   rollNo: 18,
//   marks: 85
// };

// for (let key in student) {
//   console.log(student[key]);
// }

// 10)  Find the Largest Number
// function largest(arr) {
//   let max = arr[0];

//   arr.forEach(num => {
//     if (num > max) {
//       max = num;
//     }
//   });
//   return max;
// }
// console.log(largest([34, 76, 59, 32])); // 76

// 11) Return number of vowels in a string.
// function countVowels(str) {
//     let vowels = "aeiou";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("javascript"));

// 12) Create an HTML paragraph with an id.
//  Write JavaScript code to:
// Select the paragraph
// Change its text to "Welcome to JavaScript DOM"

{/* <p id="para">Hello World</p>

<script>
  // Select the paragraph
  let paragraph = document.getElementById("para");

  // Change its text
  paragraph.textContent = "Welcome to JavaScript DOM";
</script> */}


