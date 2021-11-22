import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("screen");

const CardServiceHighlight = ({
  image,
  price = "",
  title = "",
  room = "",
  style,
}) => {
  return (
    <View style={[styles.layout, style]}>
      {/* <View style={[styles.icon]}> */}
      {image && (
        <Image
          source={{ uri: image, width: (width - 30 - 10) / 2, height: 70 }}
        />
      )}
      {/* </View> */}
      <View style={styles.content}>
        <Text style={{ color: "#4dafa2", fontWeight: "bold" }}>
          {price.formatPrice()} đ
        </Text>
        <Text
          numberOfLines={2}
          style={{ height: 40, fontWeight: "500", color: "#000" }}
        >
          {title}
        </Text>
        <Text numberOfLines={1} style={{ color: "#969696" }}>
          {room}
        </Text>
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
    width: (width - 30 - 10) / 2,
    marginLeft: 10,
    height: 170,
    alignContent: "center",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  text_content: {
    // textAlign: "center",
    color: "#3f9d83",
    width: 80,
    marginTop: -10,
  },
  content: {
    padding: 10,
    // alignContent: "center",
    // alignItems: "center",
  },
});

export default CardServiceHighlight;
