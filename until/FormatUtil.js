/**
 * Created by RanXianghui on 2017/3/15.
 */


export default class FormatUtil{
    static formatDateString(timestamp){
        const date = new Date(parseInt(timestamp) * 1000);
        const year = date.getFullYear();
        const month = parseInt(date.getMonth()) + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    };

    static sortObjectByKey(params){
        var keys = Object.keys(params).sort();
        //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
        var newObj = {};//创建一个新的对象，用于存放排好序的键值对
        for (var i = 0; i < keys.length; i++) {//遍历keys数组
            newObj[keys[i]] = params[keys[i]];//向新创建的对象中按照排好的顺序依次增加键值对
        }
        return newObj;//返回排好序的新对象
    }

    static formatRequestBody( params ) {
        let body = null;
        var keys = Object.keys(params)

        for (var i = 0; i < keys.length; i++) {//遍历keys数组
            if(0===i){
                body =  keys[i] + '=' + params[keys[i]];
            }else{
                body += '&'+ keys[i] + '=' + params[keys[i]];
            }
        }
        return body;
    }

}
