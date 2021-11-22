import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const CardPromotion = ({ title, style }) => {
  return (
    <View style={[styles.layout, style]}>
      <View>
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 50,
    height: 50,
    alignContent: "center",
    marginLeft: 15,
  },
  layout: {
    width: 80,
    alignContent: "center",
  },
  text_content: {
    textAlign: "center",
    color: "#427194",
  },
});
