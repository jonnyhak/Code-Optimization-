
function validAnagram(arr1, arr2){
    // add whatever parameters you deem necessary - good luck!
    if (arr1.length !== arr2.length) {
        return false
    }
    let count = {}
    
    for (let i = 0; i < arr1.length; i++) {
        count[arr1[i]] = (count[arr1[i]] || 0) + 1 
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!count[arr2[i]]) {
            return false
        } else {
            count[arr2[i]] -= 1
        } 
    }
    return true 

}

// console.log(validAnagram('', ''))//true
// console.log(validAnagram('aaz', 'zza'))//false
// console.log(validAnagram('anagram', 'nagaram'))//true
// console.log(validAnagram('anagram', 'anagramanagram'))//false
// console.log(validAnagram('rat', 'car'))//false

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  i = 0
  if (arr.length === 0){return 0}
  for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]){
        i++  
        arr[i] = arr[j]
      }  
  }
  return i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([-2, -1, -1, 0, 1])) //4
console.log(countUniqueValues([])) //0



