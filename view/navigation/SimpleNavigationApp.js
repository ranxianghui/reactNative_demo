import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Navigator, Text, View } from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
import MyScene from './MyScene';
import MyCalendar from '../MyCalendar';
import TabNavigator from 'react-native-tab-navigator';
import {Icon} from 'react-native-elements';
import TabFooterHome from '../TabFooter/TabFooterHome';
import TabFooterOrder from '../TabFooter/TabFooterOrder';
import TabFooterCart from '../TabFooter/TabFooterCart';
import TabFooterMy from '../TabFooter/TabFooterMy';


export default class SimpleNavigationApp extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedTab :'主页'
        }
    }
    onBackHandle = () =>{
        alert('点我返回');
    }
    onForwardHandle = () =>{
        alert('需要自定义功能');
    }



    render() {
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
                    onLeftButtonPress={this.onBackHandle}
                    rightButtonTitle={'forward'}
                    rightButtonTitleColor={'#fff'}
                    onRightButtonPress={this.onForwardHandle}/>
                </View>
                <View style={{flex: 1, flexDirection: 'column' }}>
                    <TabNavigator >
                        <TabNavigator.Item
                            title="主页"
                            selected={this.state.selectedTab === '主页'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='th' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='th' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: '主页' })}>
                            <TabFooterOrder {...this.props}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            creationPolicy="auto"
                            title="跳转"
                            selected={this.state.selectedTab === '跳转'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='home' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='home' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: '跳转' })}>
                            <TabFooterHome {...this.props}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            title="编辑"
                            creationPolicy="auto"
                            selected={this.state.selectedTab === '编辑'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='cart-arrow-down' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='cart-arrow-down' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: '编辑' })}>
                            <TabFooterCart {...this.props}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            title="退出"
                            creationPolicy="auto"
                            selected={this.state.selectedTab === '退出'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='user' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='user' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: '退出' })}>
                            <TabFooterMy {...this.props}/>
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    selectedTextStyle:{
        color:'black'
    },
    textStyle:{
        color:'#999',
    }
});