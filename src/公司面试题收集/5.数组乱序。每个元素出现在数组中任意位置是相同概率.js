let arr = [1,2,3,4,5];

function shuffle(arr) {
    arr.sort(function () {
        return Math.random() - 0.5;
    });
}

function shuffle(arr){
    let i = arr.length;
    let j;
    while(i>0){
        // j可以是任意数
      j = Math.floor(Math.random()*i)  // 0,1,2,3,4  找到任意的一个元素
      console.log(j);
      i--;  // i-- 才是最后一个元素
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 将这个元素和它进行交换
    }
    return arr;
}
setInterval(() => {
    shuffle(arr);
    console.log(arr);
},1000)

//   shuffle(arr);
//   console.log(arr);
