
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


console.log(validAnagram('', ''))//true
console.log(validAnagram('aaz', 'zza'))//false
console.log(validAnagram('anagram', 'nagaram'))//true
console.log(validAnagram('anagram', 'anagramanagram'))//false
console.log(validAnagram('rat', 'car'))//false

