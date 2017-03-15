/**
 * Created by RanXianghui on 2017/3/14.
 */

import { AsyncStorage } from 'react-native';

export default class StorageManager {
    /**
    * 获取
    * @param key
    * @returns {Promise<T>|*|Promise.<TResult>}
    */

    static get(key,callback) {
       AsyncStorage.getItem(key)
           .then((value) => {
               if (value != null){
                    var jsonValue = JSON.parse(value);
                   callback(jsonValue);
                }
           })
           .catch( (error)=>{

           }).done();
    }

    /**
    * 保存
    * @param key
    * @param value
    * @returns {*}
    */
    static save(key, value) {
     return AsyncStorage.setItem(key, JSON.stringify(value));
    }


    /**
       * 更新
       * @param key
       * @param value
       * @returns {Promise<T>|Promise.<TResult>}
       */
    static update(key, value) {
         return DeviceStorage.get(key).then((item) => {
                 value = typeof value === 'string' ? value : Object.assign({}, item, value);
                 return AsyncStorage.setItem(key, JSON.stringify(value));
             });
    }


    /**
    * 更新
    * @param key
    * @returns {*}
    */
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}


