/**
 * Created by RanXianghui on 2017/3/16.
 */
import md5 from 'react-native-md5'
export default class ComUtil{

    static  encryptParamByMD5( params) {
      let  ret = md5.hex_md5(params)
        return ret
    }

}