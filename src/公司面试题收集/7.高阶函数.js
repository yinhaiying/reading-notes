
function add(){
    return arguments[0]
}

function one(){
    if(arguments.length === 0){
        return 1;
    }else{
        return 1+arguments[0];
    }
}

function two(){
    if (arguments.length === 0) {
        return 2;
    } else {
        return 2 + arguments[0];
    }
}




function add(num1) {
    return (num2) => {
        return num1 + num2;
    }
}

function one( fn = (num) => num) {
    return fn(1)
}

function two( fn = (num) => num) {
    return fn(2)
}

console.log(one(add(two()))); // 3   1+2
console.log(two(add(one()))) // 3     2+1

// one = addend => addend ? 1 + addend() : 1
// two = addend => addend ? 2 + addend() : 2
// add = fuck => fuck