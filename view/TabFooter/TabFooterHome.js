import React,{Component} from 'react';
import {
    View,Text,TouchableOpacity,
    StyleSheet
} from 'react-native';
import Calendar from '../MyCalendar';
export default class TabFooterHome extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>this is  new home page</Text>
                <TouchableOpacity onPress={()=>this.props.navigator.push({component:Calendar})}>
                    <View style={styles.form_commint}>
                        <Text style={{color:'#fff'}}>跳转到新的页面</Text>
                    </View> 
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    form_commint:{
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