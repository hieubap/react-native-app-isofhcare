import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const CardNavigate = ({ title, style, icon }) => {
  return (
    <View style={[styles.layout, style]}>
      <View style={[styles.icon]}>
        {icon && (
          <Image
            source={icon}
            style={{ width: 42, height: 42, marginTop: 4 }}
          />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.text_content}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#eefbf4",
    borderRadius: 10,
    width: 60,
    height: 60,
    alignContent: "center",
    alignItems: "center",
    marginLeft: 30,
    overflow: "hidden",
  },
  layout: {
    width: 120,
    height: 100,
    alignContent: "center",
    backgroundColor: "#eefbf4",
    borderRadius: 10,
  },
  text_content: {
    textAlign: "center",
    color: "#3f9d83",
    width: 80,
    marginTop: -10,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
  },
});
export default CardNavigate;
