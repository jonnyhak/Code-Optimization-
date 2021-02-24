
function bubbleSort(arr) {
    // let copy = arr
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
                break 
            }
        }
    }
    return arr
}

// console.log(bubbleSort([38, 5, 2, 19, 3]))
// console.log(bubbleSort([8,7,6,5,4]))
// console.log(bubbleSort([]))

function selectionSort(arr){
    
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]){
                min = j
            }    
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }

    return arr 
}

// console.log(selectionSort([38, 5, 2, 19, 3]))
// console.log(selectionSort([8,7,6,5,4]))
// console.log(selectionSort([]))

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            if (currentVal < arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }   
        }
    }
    return arr 
}

// console.log(insertionSort([38, 5, 2, 19, 3]))
// console.log(insertionSort([8,7,6,5,4]))
// console.log(insertionSort([]))

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(arr1, arr2){
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

console.log(mergeSort([5, 1, 8, 3, 9]))
