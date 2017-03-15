import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';
import StorageManager from '../../until/LocalStorage/StorageManager';
export default class TabFooterMy extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                {/*<HeaderComp title='我' />*/}
                <Text>this is  new my  center page</Text>
                <TouchableOpacity onPress={this._logOut.bind(this)}>
                    <View style={styles.form_commit}>
                        <Text style={{color:'#fff'}}>退出</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    _logOut(){
        StorageManager.save('name','rongzhao');
        StorageManager.get('name',function (value) {
           Alert.alert(
               '提示',
               value,
               [
                   {text:'确定'},
                   {text:'取消'}
               ]
           );
       });

    }
}
const styles = StyleSheet.create({
    form_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#1d9d74',
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
});