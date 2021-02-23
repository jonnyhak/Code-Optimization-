
function linearSearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i 
        }
    }
    return -1 
}

// console.log(linearSearch([1, 2, 3, 4, 5], 3))

function binarySearch(arr, target) {
    if (arr.length === 0) return -1

    let mid = Math.floor(arr.length / 2)

    if (target < arr[mid]) {
        return binarySearch(arr.slice(0, mid), target)
    } else if (target > arr[mid]) {
        let sub = binarySearch(arr.slice(mid + 1), target)
        return sub === -1 ? -1 : sub + mid + 1 
    } else {
        return mid
    }
    
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) //2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) //4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) //-1
console.log(binarySearch([1, 2, 3, 4, 5], 0)) //-1
console.log(binarySearch([1, 2, 3, 4, 5], 4)) //3


