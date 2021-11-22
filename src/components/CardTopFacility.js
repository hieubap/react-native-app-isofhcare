import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("screen");

const CardTopFacility = ({ image, title = "", address = "", style }) => {
  console.log(title, address, image, "data");
  const path =
    image.indexOf("http") === 0
      ? image
      : "https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/" + image;
  return (
    <View style={[styles.layout, style]}>
      <Image source={{ uri: path, width: 280, height: 120 }} />
      <View style={styles.content}>
        <Text style={{ height: 40, fontWeight: "500", color: "#000" }}>
          {title}
        </Text>
        <Text numberOfLines={2} style={{ color: "#969696" }}>
          {address}
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
    width: 280,
    height: 220,
    marginLeft: 10,
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

export default CardTopFacility;
