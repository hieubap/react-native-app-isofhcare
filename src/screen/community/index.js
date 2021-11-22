import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";


const Community = (props) => {
  return (
    <View style={styles.container}>
      <Text>Cộng đồng!</Text>
      <Text style={{ fontWeight: "bold" }}>BASE REACT NATIVE APP</Text>
      <Button title="Click me!" onPress={() => console.log('click me')} />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Community;
