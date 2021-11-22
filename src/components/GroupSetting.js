import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const GroupSetting = ({ title = "", dataSource = [], navigation }) => {
  return (
    <View>
      <View style={styles.group_title}>
        <Text style={styles.title_text}>{title}</Text>
      </View>
      <View style={styles.view_group}>
        {dataSource.map((item, index) =>
          item.render ? (
            <TouchableWithoutFeedback
              onPress={() => navigation && navigation.push(item.screen)}
              key={index}
            >
              {item.render(item)}
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation && navigation.push(item.screen)}
            >
              <View
                style={{
                  padding: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "#f9f9f9",
                  borderBottomWidth: 1,
                }}
              >
                <View>
                  <Text style={{ color: "#2f6184" }}>{item.name}</Text>
                </View>
                <View style={{ paddingRight: 10 }}>
                  <Image
                    source={require("../assets/image/next-icon.png")}
                    style={{ width: 10, height: 16 }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group_title: {
    backgroundColor: "#f2f6f9",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title_text: {
    color: "#b7c0c9",
    fontWeight: "bold",
    fontSize: 14,
  },
  view_group: {
    backgroundColor: "white",
  },
});
export default GroupSetting;
