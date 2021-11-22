import React from "react";
import {Image, View} from "react-native";

export const LogoVietinbank = ({ style }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <Image
        source={require("../assets/image/vietinbank-logo.png")}
        style={{ width: 20, height: 20 }}
      />
      <Image
        source={require("../assets/image/vietinbank-name.png")}
        style={{
          width: 80,
          height: 16,
          marginTop: 1,
          marginLeft: 5,
        }}
      />
    </View>
  );
};
