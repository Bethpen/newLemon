import {useState} from 'react';
import { View, StyleSheet, TextInput, Image, Pressable, Text, Alert } from 'react-native';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('')
  // Add subscribe screen code here
  return <View>
    <Image 
        resizeMode='contain'
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Little lemon, your local Mediterranean Bistro</Text>
      <TextInput 
        value={email}
        onChangeText={(text)=>setEmail(text)}
        placeholder='Enter your email'
        keyboardType='email-address'
        style={styles.input}
      />
      <Pressable disabled={email.length <1} style={[styles.button, email.length <1 ? {backgroundColor: "grey"}: {backgroundColor: "green"}]} onPress={()=>Alert.alert("Thanks for subscribing, stay tuned")}>
        <Text style={styles.buttonText} >Subscribe</Text>
      </Pressable>

  </View>;
};

export default SubscribeScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    paddingTop: 50
  },
  image: {
    height: 300,
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    maxWidth: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    height: 40,
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    width: "90%",
    paddingLeft: 5,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    backgroundColor: "white",
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    width: "90%",
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  }
})