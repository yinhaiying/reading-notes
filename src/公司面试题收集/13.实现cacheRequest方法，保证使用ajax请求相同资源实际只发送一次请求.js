/* 
实现一个cacheRequest方法，保证适用ajax请求相同资源实际上只发送一次请求

requestUrl这个数组 相当于一个缓存器， 里面存储了 每次请求的url 的触发时间。 
每一个请求过滤掉过期的url， 将未过期的请求与当前请求判断, 这个方法很简单 几乎可以覆盖大部分场景了

*/


let requestsUrl = [];  // 缓存请求数组
let saveTime = 1000;  // 缓存时间
function cacheRequest(request,callback){
  if(request.method === "POST"){
    let nowTime = Date.now();
    // 没有过期的请求
    requestsUrl = requestUrl.filter((item) => {
        return (item.setTime + saveTime) > nowTime;
    })
    let sessionUrl = requestsUrl.filter((item) => {
        return item.url === request.url
    })
    if(sessionUrl.length > 0){
        return;
    }
    let item = {
        url:request.url,
        setTime:nowTime
    }
    requestUrl.push(item);
    callback(request)
  }
}