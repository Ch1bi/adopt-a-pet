import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text, 
  TextInput, 
  Button,
  ScrollView
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

      
 <ScrollView>
     
      <List>

          { 
            params.pet.map((val, idx) => (
            <ListItem
                roundAvatar
                avatar={{uri:val.media.photos.photo[0].$t}}
                title={val.name.$t}
                subtitle={val.breeds.breed.$t}
                key={idx}
            />
          ))}
      </List>

</ScrollView>
      
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
