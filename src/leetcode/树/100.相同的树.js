var isSameTree = function (p, q) {
    function traversal(root1,root2){
        if(root1 === null && root2 !== null){
            return false;
        }else if(root1 !== null && root2 ===null){
            return false;
        }else if(root1 === null && root2 ===null){
            return true;
        }else{
            return root1.val === root2.val && traversal(root1.left,root2.left) && traversal(root1.right,root2.right);
        }
    }
    return traversal(p, q);
};