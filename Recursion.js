function power(base, exp){
    if (exp === 0) {return 1}

    return base * power(base, (exp - 1))
}

// console.log(power(2,0)) // 1
// console.log(power(2,2)) // 4
// console.log(power(2,4)) // 16
// console.log(power(2,1)) // 2
// console.log(power(3,3)) // 27

function factorial(num){
   if (num === 1) {return 1}

   return num * factorial(num - 1)
}

// console.log(factorial(1)) // 1
// console.log((factorial(2))) // 2
// console.log((factorial(4))) // 24
// console.log((factorial(7))) // 5040

function productOfArray(arr) {
    if (arr.length === 1) {return arr[0]}

    return arr[0] * productOfArray(arr.slice(1))
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60


function recursiveRange(num){
    if (num === 0) return 0

    return num + recursiveRange(num - 1)
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 


function fib(n){
    if (n === 1) return 1
    if (n === 2) return 1

    return fib(n - 1) + fib(n - 2)
}

// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

function reverse(str){
    if (str.length <= 1) return str

    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'


function isPalindrome(str){
    if (str.length <= 1) return true
    
    if (str[0] !== str[str.length - 1]) return false

    return isPalindrome(str.slice(1, str.length -1))
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false
// console.log(isPalindrome('')) // true

const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(arr, cb){
    if (arr.length === 0) return false

    if (cb(arr[0])) return true

    return someRecursive(arr.slice(1), cb)
}

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
//   if (arr.length === 1) {
      return [arr[0][0].toUpperCase() + arr[0].slice(1)]
//   }

}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']