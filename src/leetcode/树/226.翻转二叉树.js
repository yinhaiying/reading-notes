var invertTree = function (root) {
    if(root === null){
        return root;
    }
    function traverse(root){
        if (root === null){
            return root;
        }
        let temp = traverse(root.right);
        root.right = traverse(root.left);
        root.left = temp;
        return root;
    }
    traverse(root);
    return root;
};