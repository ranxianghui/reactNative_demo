/**
 * Created by RanXianghui on 2017/3/7.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';
// import App from './view/App';
// import TextView from './view/TextView';
// import ListViewBasics from './view/MovieList';
// import MyCalendar from './view/MyCalendar';
// import testCalendar from './view/testCalendar';
import SimpleNavigationApp from './view/navigation/SimpleNavigationApp'

const defaultRoute = {component: SimpleNavigationApp};

export default class SetUp extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentWillMount (){
       // 在初始化渲染执行之前立刻调用
    }

    componentDidMount(){
        //在初始化渲染执行之后立刻调用一次
    }

    componentWillReceiveProps( nextProps){
        // 在组件接收到新的 props 的时候调用，
        // 也就是父组件修改子组件的属性时触发。
        // 在初始化渲染的时候，该方法不会调用。
        // 可以用于更新 state 来响应某个 prop 的改变。
    }

    shouldComponentUpdate( nextProps,  nextState){
        return true;
        // 在接收到新的 props 或者 state，将要渲染之前调用,
        // 如果确定新的 props 和 state 不会导致组件更新，
        // 则此处应该 返回 false。返回true将进行渲染。
    }

    componentWillUpdate( nextProps,  nextState){
        // 在接收到新的 props 或者 state
        // 并且shouldComponentUpdate返回true时调用
    }


    componentDidUpdate( prevProps,  prevState){
        // 在组件的更新已经同步到 DOM 中之后立刻被调用
    }

    componentWillUnmount(){
        // 在组件从 DOM 中移除的时候立刻被调用。
        // 在该方法中执行任何必要的清理，
        // 比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。
    }

    render() {
        return ( <View style={{flex: 1, flexDirection: 'column' ,justifyContent:'flex-start'}}>

                <Navigator
                    initialRoute={defaultRoute}
                    configureScene={(route) => {
                        var conf = Navigator.SceneConfigs.HorizontalSwipeJump;
                        conf.gestures = null;
                        return conf;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component {...route.params} navigator={navigator} />
                        );
                    }
                    }
                />
                {/*<SimpleNavigationApp />*/}
                {/*<MyCalendar />*/}
                {/*<Text style={{ height: 200}}>11111</Text>*/}
                {/*<TextView style={{ height: 200}}/>*/}
            </View>
        );
    }

}
