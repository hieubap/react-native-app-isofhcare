import React from "react";
import { TouchableOpacity, View } from "react-native";

const Button = ({ type, disabled, opacity, buttonStyles, ...rest }) => {
  const style =
    type === "button-bottom"
      ? {
          backgroundColor: "#f2f6f9",
          padding: 5,
          borderRadius: 5,
          borderColor: "#e2e3e4",
          borderWidth: 1,
        }
      : {};

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={opacity}
      style={[style, buttonStyles]}
      {...rest}
    >
      {rest.children}
    </TouchableOpacity>
  );
};

export default Button;
