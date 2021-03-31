


let str = "   hello  world   ";

function trim(str){
    let re = /^\s*|\s*$/g;
    return str.replace(re,"");
}
console.log(trim(str));