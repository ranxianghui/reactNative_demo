import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import MyScene from '../navigation/MyScene';
import RequestAPI from '../../until/network/RequestAPI';

export default class TabFooterHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            content:"尚未提交内容"
        };
    }
    //页面跳转
    _push() {
        RequestAPI.login('13112345678','000000');
        let _this = this;
        const {navigator} = this.props;
        let scenes = {
            component: MyScene,
            params: {
                name: _this.state.name,
                updateContent: (content)=> {
                    _this.setState({content: content});
                }
            }
        };
        navigator.push(scenes);
    }

    render(){
        return(
            <View>
                <Text>this is  new home page</Text>
                <TouchableOpacity onPress={this._push.bind(this)}>
                    <View style={styles.form_commit}>
                        <Text style={{color:'#fff'}}>跳转到新的页面</Text>
                    </View> 
                </TouchableOpacity>
            </View>
        );
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