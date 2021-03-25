
 class Node {
     constructor(value){
         this.value = value;
         this.left = null;
         this.right = null;
     }
 }

 class BinarySearchTree{
     constructor(){
         this.root = null;
     }
     insert(value){
         let newNode = new Node(value);
         if(this.root === null){
            this.root = newNode;
            return this;
         } else {
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
         }
     }
    find(value){
        if (this.root === null) return false;
        let current = this.root 
        let found = false; 
        while (current && !found){
            if (value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                return true
            }
        }
        return false
    }
    BFS(){
        let node = this.root
        let data = [];
        let q = [];

        q.push(this.root)
        while(q.length){
            node = q.shift()
            data.push(node.value);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right)
        }
        return data
    }
    DFSpreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }
    DFSpostOrder(){
        let data = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    DFSinOrder(){
        let data = [];
        function traverse(node){
            if (node.left) traverse(node.left);
            data.push(node.value)
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return data
    }


 }

 let tree = new BinarySearchTree();
 tree.insert(10)
 tree.insert(5)
 tree.insert(2)
 tree.insert(13)
 tree.insert(11)
 tree.insert(16)
 

 console.log(tree.DFSpreOrder())
 console.log(tree.DFSpostOrder())
 console.log(tree.DFSinOrder())