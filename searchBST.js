class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
let root = new TreeNode(4, 
    new TreeNode(2, new TreeNode(1), new TreeNode(3)), 
    new TreeNode(7)
);


var searchBST = function(root, val) {
    if(!root || root.val === val) return root;
    return val < root.val ? searchBST(root.left ,  val): searchBST(root.right , val);
};
console.log(searchBST(root, 2));