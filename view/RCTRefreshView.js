/**
 * Created by RanXianghui on 2017/3/9.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    AsyncStorage,
    navigator,
    Text,
    Alert,
    View
} from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
import CustomListView from './List/CustomListView'
import StorageManager from '../until/LocalStorage/StorageManager'
export default class RCTRefreshView extends Component {

    constructor(props){
        super(props);
    }
    _pop() {
        const {navigator} = this.props;
        navigator.pop();
    }
    onForwardHandle = () => {
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
    render(){
        return (
            <View style={{ backgroundColor:'white', flexDirection: 'column' ,flex:1, justifyContent:'flex-start'}}>
                <View style={{flexDirection: 'column',height:44 ,borderStyle: 'solid', borderWidth: 1}}>
                    <NavigationBar
                        title={'Title Name'}
                        height={44}
                        titleColor={'#fff'}
                        backgroundColor={'#149be0'}
                        leftButtonTitle={'back'}
                        leftButtonTitleColor={'#fff'}
                        onLeftButtonPress={this._pop.bind(this)}
                        rightButtonTitle={'forward'}
                        rightButtonTitleColor={'#fff'}
                        onRightButtonPress={this.onForwardHandle.bind(this)}/>
                </View>

                <View style={{flex: 1, flexDirection: 'column' }}>
                    <CustomListView />
                </View>
            </View>
        );
    }
}