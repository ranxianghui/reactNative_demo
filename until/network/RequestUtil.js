/**
 * Created by RanXianghui on 2017/3/15.
 */
/**
 * RequestUtil 网络请求的实现
 * https://github.com/facebook/react-native
 */

export default class RequestUtil{
    /*
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        fetch(url,{
            method: 'GET',
            }).then((response) => {
                callback(response)
            }).done();
    }

    /*
     *  post请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static post(url,params,headers,callback){
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers: headers,
            body:JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            }) .done();
    }

    /*
     *  put请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static put(url,params,headers,callback){
        //fetch请求
        fetch(url,{
            method: 'PUT',
            headers: headers,
            body:JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            }) .done();
    }

    /*
     *  delete请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static delete(url,params,headers,callback){
        //fetch请求
        fetch(url,{
            method: 'DELETE',
            headers: headers,
            body:JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            callback(responseJSON)
        }) .done();
    }


    _fetch(fetch_promise, timeout) {
        var abort_fn = null;

        //这是一个可以被reject的promise
        var abort_promise = new Promise(function(resolve, reject) {
            abort_fn = function() {
                reject('abort promise');
            };
        });

        //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
        var abortable_promise = Promise.race([
            fetch_promise,
            abort_promise
        ]);

        setTimeout(function() {
            abort_fn();
        }, timeout);

        return abortable_promise;
    }
    static addHeader(){

    }

}