import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import Calendar from '../MyCalendar'
export default class TabFooterOrder extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column' ,justifyContent:'flex-start'}}>
            <Calendar />
            </View>
        );
    }
}