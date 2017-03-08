import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid
} from 'react-native';

// var dateFormat = require('dateformat');
import Calendar from './Calendar';
import Platform from "react-native";

var busyDays = [
    { date: new Date(2017, 2, 5), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 6), name:'black day'},//2016年9月8号
    { date: new Date(2017, 2, 7), name:'white day'},//2016年9月8号
    { date: new Date(2017, 2, 8), name:'red day'},//2016年9月8号
    { date: new Date(2017, 2, 9), name:'happy day'},//2016年9月8号
    { date: new Date(2017, 2, 10), name:'blank day'},//2016年9月8号
    { date: new Date(2017, 2, 11), name:'null day'},//2016年9月8号
    { date: new Date(2017, 2, 12), name:'tired day'}]//2016年9月8号
var busyDays2 = [
    { date: new Date(2017, 2, 13), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 14), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 15), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 18), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 19), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 20), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 21), name:'green day'},//2016年9月8号
    { date: new Date(2017, 2, 22), name:'green day'}]//2016年9月8号
export default class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:new Date(),
        }
    };
    render() {
        let _this = this;
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
