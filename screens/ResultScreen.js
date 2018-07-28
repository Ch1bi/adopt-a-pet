import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text, 
  TextInput, 
  Button
} from 'react-native';


import { List, ListItem } from 'react-native-elements'


export default class ResultScreen extends 

React.Component {

  constructor(props){

    super(props);

    this.state = {

      shelters:null
      
    }
  }



  static navigationOptions = {
    title: 'Search',
  };

  render() {

    
    let params = this.props.navigation.getParam('data')
     console.log(params)
    
    return (

      <View style={styles.container}>

      <List>

          { 
            params.pet.map((val, idx) => (
            <ListItem
                roundAvatar
                avatar={{uri:val.media.photos.photo.$t}}
                title={val.name.$t}
                subtitle={val.breeds.breed[0].$t}
                key={idx}
            />
          ))}
      </List>

      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  
    container:{

        flex:1,
        flexDirection:'column',
        backgroundColor: '#fff'
    }

    
 
});
