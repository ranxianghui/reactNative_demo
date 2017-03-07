import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import TextView from '../TextView';

export default class TabFooterCart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column' ,justifyContent:'flex-start'}} >
                <TextView style={{ height: 200}}/>
            </View>
        );
    }
}