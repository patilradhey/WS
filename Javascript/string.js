// 1) change the number from string to number

// str = "55"
// num = Number(str) 

// console.log(typeof(num))


// // 2) convert string 10 to number and add 5
// // can be done using praseint as well

// str = "10"
// num = Number(str)

// console.log(num + 5)
// console.log(typeof(num + 5))


//3) convert the number 50 into a string and print its type

// num = 50
// console.log(typeof(num))
// str = num.toString()


// console.log(typeof(str))


//4) write function to find square of a number 

// function findSquare(num) {
//   return num * num;
// }

// console.log(findSquare(5))

//5) write function to find largest of 3 numbers 

// function largestNum(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }else if(b>a && b>c){
//         return b;
//     }else{
//         return c;
//     } 
    
// }
// console.log(largestNum(560,50,730));

// 6) Count the Number of Vowels in a String

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}



// 7)  Replace All Spaces in a String with Hyphens

// let text = "M S Dhoni is the best captain.";
// let result = text.replaceAll(" ", "-");
// console.log(result);
