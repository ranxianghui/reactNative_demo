/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Views
// } from 'react-native';
// import App from './App';
// export default class ReactTest extends Component {
//   render() {
//     return <App />;
//   }
// }

// AppRegistry.registerComponent('ReactTest', () => ReactTest);
import React from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

import App from './view/App';
import TextView from './view/TextView';
import ListViewBasics from './view/MovieList';
import MyCalendar from './view/MyCalendar';


const ReactTest = () => {
  return(
      <View style={{flex: 1, flexDirection: 'column' ,justifyContent:'flex-start'}}>
        <MyCalendar />
          <Text style={{ height: 200}}>11111</Text>
        <TextView style={{ height: 200}}/>
      </View>
    // <View style={{flex: 1, flexDirection: 'column' ,justifyContent:'flex-start'}}>
    //   <TextView style={{ height: 200}}/>
    //   <App style={{height: 600}}/>
    //   <ListViewBasics style={{height: 100 , alignItems:'flex-end'}}/>
    // </View>
  )
};

AppRegistry.registerComponent('ReactTest', () => ReactTest);
