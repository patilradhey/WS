// 1)FizzBuzz

// for(i=1;i<=20;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else if(i%5==0){
//             console.log("Buzz")
//         }else if(i%3==0){
//             console.log("Fizz")
//         }else{
//             console.log(i)
//         }
// }


// 2) Fibonacci Series
// let n = 20;
// let a = 0, b = 1;

// for (let i = 0; i < n; i++){
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// 3) Prime Number
// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(2))

// 4) Factorial Number 
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// 5)Anagram 
// function isAnagram(str1, str2) {
//   let s1 = str1.split("").sort().join("");
//   let s2 = str2.split("").sort().join("");
//   return s1 === s2;
// }
// console.log(isAnagram("Radhey","Radhey"))

// function isArmstrong(num) {
//   let digits = num.toString().split("");
//   let power = digits.length;

//   let sum = digits.reduce(
//     (acc, digit) => acc + Math.pow(digit, power),
//     0
//   );

//   return sum === num;
// }
// console.log(isArmstrong(654))

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("My name is Lakhan"))