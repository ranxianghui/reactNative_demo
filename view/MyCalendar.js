import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    View,
    ToastAndroid
} from 'react-native';

import Calendar from './Calendar';
import TextView from './TextView';
import IOSCalendar from './IOSCalendar'

let busyDays = [
    {date: new Date(2017, 2, 5), name: 'green day'},
    {date: new Date(2017, 2, 6), name: 'black day'},
    {date: new Date(2017, 2, 7), name: 'white day'},
    {date: new Date(2017, 2, 8), name: 'red day'},
    {date: new Date(2017, 2, 9), name: 'happy day'},
    {date: new Date(2017, 2, 10), name: 'blank day'},
    {date: new Date(2017, 2, 11), name: 'null day'},
    {date: new Date(2017, 2, 12), name: 'tired day'}];
export default class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:new Date(),
        }
    };
    render() {
        let _this = this;
        if(Platform.OS === "ios"){
            return (
                <View style={styles.container}>
                    {/*<TextView/>*/}
                    <IOSCalendar
                        ref='myCalendar'
                        date={_this.state.date} //必要值
                        onDateChange={(date) => ToastAndroid.show(date, ToastAndroid.SHORT) }
                        prevTitle='prev'//默认为Prev
                        nextTitle='next'//默认为Next
                        busyDay={busyDays}/>
                </View>
            );
        }else{
            return (
                <View style={styles.container}>
                    <Calendar
                        ref='myCalendar'
                        date={_this.state.date} //必要值
                        onDateChange={(date) => ToastAndroid.show(date, ToastAndroid.SHORT) }
                        prevTitle='prev'//默认为Prev
                        nextTitle='next'//默认为Next
                        busyDay={busyDays}
                    />
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
