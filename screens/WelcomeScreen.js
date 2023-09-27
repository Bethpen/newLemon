import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View  style={styles.container}>
      <Image 
        resizeMode='contain'
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Little lemon, your local Mediterranean Bistro</Text>
      <Pressable style={styles.button} onPress={()=>navigation.navigate("subscribe")}>
        <Text style={styles.buttonText} >Newsletter</Text>
      </Pressable>
  </View>;
};

export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1,
    justifyContent: "center"
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
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
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
