
// 1)
// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(reverseString("Radhey"))

// 2)
// function isPalindrome(value) {
//   let str = value.toString();
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {
//     if (str[start] !== str[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// }
// console.log(isPalindrome("mom"))

// 3)
// function findLargest(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) max = num;
//   }
//   return max;
// }
// console.log(findLargest([25,65,75,85]))

// 4)
// function removeDuplicates(arr) {
//   let unique = [];
//   for (let item of arr) {
//     if (!unique.includes(item)) {
//       unique.push(item);
//     }
//   }
//   return unique;
// }
// console.log(removeDuplicates([25,65,75,85,65,85]))
// 5)
function countOccurrences(arr) {
  let count = {};
  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}
console.log(countOccurrences([25,65,75,85,65,85]))

// 6)
// 7)
// 8)
// 9)
// 10)
// 11)
// 12)
// 13)
// 14)
// 15)
// 16)
// 17)
// 18)
// 19)
// 20)