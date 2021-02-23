
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
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }

    return arr 
}

console.log(selectionSort([38, 5, 2, 19, 3]))
console.log(selectionSort([8,7,6,5,4]))
console.log(selectionSort([]))
