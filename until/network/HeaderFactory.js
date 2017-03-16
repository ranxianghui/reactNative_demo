/**
 * Created by RanXianghui on 2017/3/16.
 */
let paramsArray = {};
export default class Headers {
    constructor(){
        this.state = {
            headers:paramsArray
        };
        this.initHeader()
    }

    addHeaders(key,value){
        paramsArray[key] = value;
    }

    initHeader(){
        this.addHeaders('Content-Type','application/x-www-form-urlencoded');
        this.addHeaders('Accept','application/json')
        this.addHeaders('Version','1.0');
        this.addHeaders('DeviceType',2);
        this.addHeaders('ClientType',3);
    }
    getHeaders(){
        return this.state.headers;
    }
}