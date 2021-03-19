    const obj = {
        "a": [{
            "b": {
                "c": 3
            }
        }]
    }
    function get(obj, path, defaultVal = "undefined") {
        if (obj === null) return "undefined";
        let newpath = [];
        if (Array.isArray(path)) {
            newPath = path;
        } else {
            // 然后将a[0].b.c 替换为a.0.b.c
            newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
            // [a,0,b,c]
        }
        let result = newPath.reduce((accumulator, currentValue) => {
            console.log(accumulator, currentValue);
            return (accumulator || {})[currentValue] // 可能还不存在 那么就使用{}，{}中没有这个字段返回undefined
        }, obj)
        return result;
    }

    // let result1 = get(obj, 'a[0].b.c');
    // => 3
    // let result2 = get(obj, ['a', '0', 'b', 'c']);
    // => 3
    let result3 = get(obj, 'a.b.c', 'default');
    // console.log("result2:",result2);
    // console.log("result2:",result2);
    console.log("result3:", result3);