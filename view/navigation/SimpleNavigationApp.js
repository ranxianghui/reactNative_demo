import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Navigator, Text, View } from 'react-native';
import NavigationBar from 'react-native-navigation-bar'
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
            <View style={{ backgroundColor:'yellow', flexDirection: 'column' ,flex:1, justifyContent:'flex-start',borderStyle: 'solid', borderWidth: 1,borderColor:'green'}}>

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
                    {/*
                    <Navigator
                        initialRoute={{ title: 'My Initial Scene', index: 0 }}
                        renderScene={
                            (route, navigator) =>
                        <MyScene
                            title={route.title}

                            // Function to call when a new scene should be displayed
                            onForward={ () => {
                                const nextIndex = route.index + 1;
                                navigator.push({
                                    title: 'Scene ' + nextIndex,
                                    index: nextIndex,
                                });
                            }}

                            // Function to call to go back to the previous scene
                            onBack={() => {
                                if (route.index > 0) {
                                    navigator.pop();
                                }
                            }}
                        />

                    }
                    />
                     */}
                    <TabNavigator>
                        <TabNavigator.Item
                            title="主页"
                            selected={this.state.selectedTab === 'TabFooterHome'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='home' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='home' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: 'TabFooterHome' })}>
                            <TabFooterHome {...this.props}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            title="订单"
                            selected={this.state.selectedTab === 'TabFooterOrder'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='th' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='th' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: 'TabFooterOrder' })}>
                            <TabFooterOrder {...this.props}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            title="购物车"
                            selected={this.state.selectedTab === 'TabFooterCart'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='cart-arrow-down' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='cart-arrow-down' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: 'TabFooterCart' })}>
                            <TabFooterCart {...this.props}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            title="我"
                            selected={this.state.selectedTab === 'TabFooterMy'}
                            selectedTitleStyle={styles.selectedTextStyle}
                            titleStyle={styles.textStyle}
                            renderIcon={() => <Icon  name='user' type='font-awesome' color="#999" />}
                            renderSelectedIcon={() => <Icon name='user' type='font-awesome' color='#1d9d74' />}
                            onPress={() => this.setState({ selectedTab: 'TabFooterMy' })}>
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