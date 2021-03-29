

class MaxBinaryHeap {
    constructor(){
        this.values =[41, 39, 33, 18, 27, 12, 55]
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    extractMax(){
        let max = this.values[0]
        let end = this.values.pop()
        this.values[0] = end
        return max
    }

}

let heap = new MaxBinaryHeap();
heap.insert(55)
heap.insert(1)
console.log(heap)