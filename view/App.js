import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
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
  touch_button:{
    height:40,
    width:100,
    borderRadius:20,
    backgroundColor:'green',
    justifyContent:'center',
    overflow:'hidden',
  },
  touch_text:{
  	textAlign:'center',
  	color:'white'
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
      status:true,
    };
  }
  // 自定义方法采用属性的方式定义
  showAlert = () =>{
    this.state.status = !this.state.status
    alert('按下了确认按钮,当前状态是'+this.state.status);
  };
  // 集成或重写的方法需要采用函数的方式来写
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          ref="calendar"
          eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
          events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
          scrollEnabled
          showControls
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          onTouchNext={(e) => console.log('onTouchNext: ', e)}
          onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          onSwipeNext={(e) => console.log('onSwipeNext', e)}
        />
        <Text> Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')} </Text>

		<TouchableOpacity style={styles.touch_button} onPress = {this.showAlert} >
			<Text style = {styles.touch_text}>确定</Text>
	    </TouchableOpacity>

      </View>
    );
	}
}
