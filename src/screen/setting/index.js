import { withNavigation } from "@react-navigation/compat";
import React from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import GroupSetting from "../../components/GroupSetting";
import { setting_pay, setting_security, support } from "./constant";

const { width } = Dimensions.get("screen");

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width,
          zIndex: 1,
          backgroundColor: "#f2f6f9",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/image/back-icon.png")}
              style={{ width: 20, height: 15 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.middle_header}>
          <View>
            <View style={styles.middle_header_left}>
              <Image
                source={require("../../assets/image/camera.png")}
                style={{ width: 24, height: 20 }}
              />
            </View>
          </View>
          <View style={styles.middle_header_right}>
            <Text
              style={{
                height: 35,
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
                paddingTop: 5,
              }}
            >
              NGÔ QUANG HIẾU
            </Text>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <TouchableWithoutFeedback
              // onPress={() => navigation.pop()}
              >
                <View style={{ flexDirection: "row", marginRight: 20 }}>
                  <Image
                    source={require("../../assets/image/gift-icon.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text style={{ color: "#3e7cb9", marginLeft: 5 }}>
                    Điểm thưởng
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
              // onPress={() => navigation.pop()}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/image/logout-icon.png")}
                    style={{ width: 16, height: 20 }}
                  />
                  <Text style={{ color: "#3e7cb9", marginLeft: 5 }}>
                    Đăng xuất
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ marginTop: 130 }}>
          <GroupSetting dataSource={setting_security} title="Cài đặt bảo mật" />
        </View>

        <View>
          <GroupSetting dataSource={setting_pay} title="Cài đặt thanh toán" />
        </View>

        <View>
          <GroupSetting dataSource={support} title="Hỗ trợ" />
        </View>

        <View style={styles.footer}>
          <Text style={styles.text_footer}>Phiên bản ứng dụng: 1.0</Text>
          <Text style={[styles.text_footer, {}]}>
            2021 Sản phẩm thử nghiệm không mang tính chất thương mại
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#0a639b",
    padding: 15,
    height: 90,
  },
  text_header: {
    color: "#e6ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  middle_header: {
    marginTop: -35,
    marginLeft: width / 10,
    marginRight: width / 10,
    flexDirection: "row",
    paddingBottom: 10,
  },
  middle_header_left: {
    borderRadius: 35,
    overflow: "hidden",
    width: 70,
    height: 70,
    marginRight: 10,
    backgroundColor: "#aaa",
    borderColor: "#89d3fa",
    borderWidth: 2,
    alignContent: "center",
    paddingTop: 20,
    alignItems: "center",
  },
  middle_header_right: {},
  footer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_footer: {
    color: "#b5babe",
    fontSize: 12,
    marginTop: 10,
    width: width / 2,
    textAlign: "center",
  },
});

export default withNavigation(Setting);
