import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("screen");

const CardLine = ({ image, content }) => {
  return (
    <View style={styles.main}>
      <View>
        <View style={styles.imageStyle}>
          <Image source={{ uri: image, ...styles.image }} />
        </View>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Image
        source={require("../assets/image/arrow-next.png")}
        style={{ width: 18, height: 12 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    height: 60,
    overflow: "hidden",
  },
  image: { width: ((width - 60) / 10) * 2 + 15, height: 60 },
  imageStyle: {
    width: ((width - 60) / 15) * 4,
    height: "100%",
    marginTop: -30,
    marginLeft: -15,
  },
  content: {
    width: ((width - 60) / 15) * 10,
    fontSize: 12,
    color: "#9f9f9f",
  },
});

export default CardLine;
