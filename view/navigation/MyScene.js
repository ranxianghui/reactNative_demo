/**
 * Created by RanXianghui on 2017/3/7.
 */
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    navigator,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
import RCTRefreshView from '../RCTRefreshView';
export default class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
             name: null,
             content:'请输入内容'
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name
        });
    }

    //返回
    _pop() {
        const {navigator} = this.props;
        navigator.pop();
    }


    _updateContent(){
        const {navigator} = this.props;
        this.props.updateContent(this.state.content);
    }


    _goToRCTRefreshView(){
        const {navigator} = this.props;
        let mRCTRefreshView = {
            component: RCTRefreshView,
            // params: {
            //     name: _this.state.name,
            //     updateContent: (content)=> {
            //         _this.setState({content: content});
            //     }
            // }
        };
        navigator.push(mRCTRefreshView);

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
                onLeftButtonPress={this._pop.bind(this)}
                rightButtonTitle={'forward'}
                rightButtonTitleColor={'#fff'}
                onRightButtonPress={this._pop.bind(this)}/>
        </View>

            <View style={styles.container}>
                <Text>&nbsp;</Text>
                <Text>&nbsp;</Text>
                <View style={styles.navGroup}>
                    <View style={styles.scenes}>
                        <Text style={styles.scenes}>劝君更尽一杯酒，西出阳关无故人</Text>
                        <Text style={styles.scenes}>{this.props.selectedDate}</Text>
                    </View>

                    <TextInput style={styles.scenes}
                               placeholder="请输入内容"
                               onChangeText={(content) => this.setState({content})}>
                    </TextInput>

                    <TouchableOpacity style={styles.scenes} onPress={this._updateContent.bind(this)}>
                        <Text style={styles.button}>&nbsp;&nbsp;确认更改</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scenes} onPress={this._goToRCTRefreshView.bind(this)}>
                        <Text style={styles.button}>&nbsp;&nbsp;进入列表</Text>
                    </TouchableOpacity>
                </View>
            </View>
</View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection: 'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    navGroup: {
        flexDirection: 'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    scenes: {
        height: 40,
        paddingHorizontal: 5,
        backgroundColor:'white',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    button:{
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
