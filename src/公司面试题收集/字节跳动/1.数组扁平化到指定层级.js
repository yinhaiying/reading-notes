

let arr = [
    1,2,[
        3,4,[
            5,6,[
                7,8,[
                    9
                ]
            ]
        ]
    ]
]
function flat(arr,k){
    let result = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] instanceof Array && k > 0){
            result = result.concat(flat(arr[i], --k));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

let res = flat(arr,2);
console.log(res)