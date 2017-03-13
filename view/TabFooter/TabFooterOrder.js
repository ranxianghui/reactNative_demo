import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import Calendar from '../MyCalendar'
import CustomListView from '../List/CustomListView'
export default class TabFooterOrder extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{ backgroundColor:'white', flexDirection: 'column' ,flex:1, justifyContent:'flex-start'}}>
                <View style={{flexDirection: 'column',height:360 ,borderStyle: 'solid', borderWidth: 1}}>
                    <Calendar />
                </View>
                <View style={{flex: 1, flexDirection: 'column' }}>
                    <CustomListView />
                </View>

            </View>
        );
    }
}