
function addUpTo(n) {
    let total = 0
    for (let i = 0; i < n; i++) {
        total += i 
    }
    return total
}

console.log(addUpTo(100))

const double = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}

console.log(double([1, 2, 3]))





