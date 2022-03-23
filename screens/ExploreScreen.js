import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { TextInput,Button  } from 'react-native-paper'; 
const ExploreScreen = () => {
  const [description, setDescription] = React.useState("");
  const [selectedValue, setSelectedValue] = useState("Full Board");
  const [location, setLocation] = useState("")
  const [cost, setCost] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8080/api/hostService",
        { host_service_description: description, 
          host_service_cost_description: cost,
          host_service_location:location,
          host_service_host_id:1,
          host_service_service_id: 1

         }
      );
      
    } catch (error) {
      alert(error.message);
    }
  };
  
    return (
      <View style={styles.container}>
        <TextInput
         style = {styles.textInput}
        label="Description"
        value={description}
        onChangeText={description => setDescription(description)}
    />
      <TextInput
       style = {styles.textInput}
        label="Cost Description"
        value={cost}
        onChangeText={cost => setCost(cost)}
    />
       <TextInput
        style = {styles.textInput}
        label="Location"
        value={location}
        onChangeText={location => setLocation(location)}
    />
    
    <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Full Board" value="1" />
        <Picker.Item label="With Out BrakeFast" value="2" />
      </Picker>
        <Button
        style = {styles.button}
        
          mode="contained"
          onPress={() => handleSubmit()}
        >
          Submit
          </Button>
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight:20,
    marginLeft:20
  },

  textInput: {
    marginTop:20
  },
  button: {
    alignItems: 'center',
    justifyContent:"center",
    marginTop:30
  }

});
