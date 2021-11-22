import React from "react";
import {StyleSheet, Text, View} from "react-native";


const Shop = (props) => {
  return (
    <View style={styles.container}>
      <Text>Shop!</Text>
      <Text style={{ fontWeight: "bold" }}>BASE REACT NATIVE APP</Text>
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

export default Shop;
