
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
             
         }
     }

 }

 let tree = new BinarySearchTree();
 tree.insert(10)

 console.log(tree)