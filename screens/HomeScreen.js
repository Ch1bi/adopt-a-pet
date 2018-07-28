import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text, 
  TextInput, 
  Button
} from 'react-native';



export default class HomeScreen extends 

React.Component {

  constructor(props){

    super(props);

    this.state = {

      input: '', 
      data: null
    }
  }
  static navigationOptions = {
    title: 'Search',
  };

  render() {

    //key for api
    let key = '6a73b4c9e3c1fe19a365de064e4063ea';
    //secret for api
    let secret = 'b6e85a88e2338ddaca51259d025b2965';



    getPet = (input) =>{

      fetch(`http://api.petfinder.com/breed.list?format=json&key=6a73b4c9e3c1fe19a365de064e4063ea&location=${input}` )
    }
    
    return (

      <View style={styles.container}>

      <Text style={styles.titleText}>Find an animal shelter</Text>

      <TextInput
        placeholder='Enter zipcode'
        onChangeText={(text) => this.setState({text})}
      />

      <Button
      title='Submit'
      color='purple'></Button>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },

  titleText:{

    fontSize:20
  },
 
});
