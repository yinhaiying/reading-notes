        let list = document.querySelectorAll("*");
        console.log("list:", list)
        let re = /^[h|H]/;  // 注意，这里的re如果加上全局匹配，那么就会只能匹配上一个，
        // 其他的元素进行匹配时，lastIndex进行了修改。
        let obj = {};
        for (let i = 0; i < list.length; i++) {
            let item = list[i].tagName;
            let result = re.test(item);
            if (result) {
                if (!obj[item]) {
                    obj[item] = 1;
                } else {
                    obj[item] += 1;
                }
            }
        }