/**
 * Created by RanXianghui on 2017/3/15.
 */
import RequestUtil from './RequestUtil';
import FormatUtil from '../FormatUtil'
import ComUtil from '../ComUtil'
import HeaderFactory from './HeaderFactory'
import StorageManager from '../LocalStorage/StorageManager';

export default class RequestAPI{

    static queryLoginState() {

    }

    static isLogined() {

    }

    static domainLogin(){

    }

    static login(phone,code) {

        const url = 'test'
        let headerFactory = new HeaderFactory();
        let params ={
            mobile:phone,
            code:code
        }

        var param = FormatUtil.formatRequestBody( FormatUtil.sortObjectByKey(params))
        var body =   param +'&'+ 'sign='+ ComUtil.encryptParamByMD5(param)

        RequestUtil.post( url,body,headerFactory.getHeaders(),function (token) {
                StorageManager.save('token',token.data.token)
        })

    }

    static logout() {

    }

    static tokenHeader() {

    }

    static feedsPath() {

    }

    static StringToJson(...parameter) {

    }

    static getNotifications() {

    }


}