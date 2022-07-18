import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'


export default class BuzzerScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
        
   <TouchableOpacity style={styles.backStyle}
          onPress={()=> this.props.navigation.navigate('HomeScreen')}>
        <Text> ←BACK </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  
  backStyle:{
    marginTop:50,
            marginRight: 200,
            fontSize: 35,
            fontWeight:"bold",
            color: 'yellow',
            borderWidth: 2,
            borderColor: 'yellow',
          },
          });