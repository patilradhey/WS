arr1 = []

console.log(typeof(arr1))
console.log(arr1)

fruits = ['apple']
console.log(fruits)
console.log(fruits.length)

fruits[1] = 'banana'
console.log(fruits)
console.log(fruits.length)


// fruits[6] = 'mango'
// console.log(fruits)
// console.log(fruits.length)


fruits.push ('cherry')
console.log(fruits)
console.log(fruits.length)

fruits.unshift ("orange")
console.log(fruits)
console.log(fruits.length)

fruits.pop()
console.log(fruits)


fruits.shift()
console.log(fruits)



// ------------------Slice & Splice----------------------------


fruits.push("Pineapple")
console.log(fruits)

console.log("slice",fruits.slice(2,3))
console.log(fruits)

fruits.splice(2,1,"Chicoo","Kiwi")
console.log(fruits)


// -------------------------- Includes indexOf for for of-------------------------------------

console.log(fruits.includes("Ghava"))
console.log(fruits.indexOf("Mango"))


index = fruits.indexOf("Mango")

if(index == -1){
    console.log("Fruit not available")

}else{
    "add to cart"
}

// ---------------------------------- index for loop-----------------------------------

// suraj = [45,75,68,36]
// sum = 0

// for(i = 0; i<suraj.length; i++){
//     sum = sum + suraj[i]
// }

// console.log(sum)

// avg = sum/suraj.length
// console.log(avg)

// perg = (sum/400)*100
// console.log(perg)


// -------------------------for of----------------------------------------------

for(let fruit of fruits){
    console.log("I like to eat",fruit)
}