import { withNavigation } from "@react-navigation/compat";
import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";
import { CardNavigate } from "../../components/CardNavigate";
import { LogoVietinbank } from "../../components/LogoVietinbank";
import Tab from "../../components/Tab";
import { fluctuating, other } from "./data";
import styles from "./styles";

const { width, height } = Dimensions.get("screen");

const Notification = ({ updateData, navigation, ...props }) => {
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Thông báo</Text>
        </View>

        <Tab
          tabs={[
            {
              name: "Tất cả",
              data: [...fluctuating, ...other],
            },
            {
              name: "Biến động số dư",
              data: fluctuating,
            },
            {
              name: "Tin khác",
              data: other,
            },
          ].map(({ name, data }) => ({
            name,
            Component: (
              <ScrollView>
                {data.map((item, idx) => (
                  <View style={styles.card} key={idx}>
                    <View
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginBottom: 5,
                      }}
                    >
                      <LogoVietinbank style={{ marginBottom: 5 }} />
                      <Text style={{ marginTop: -2, color: "#1a5275" }}>
                        {item.time}
                      </Text>
                    </View>

                    {item.source && (
                      <Image
                        source={{
                          uri: item.source,
                          width: "100%",
                          height: 250,
                        }}
                        style={{ borderRadius: 5, marginBottom: 10 }}
                      />
                    )}
                    <Text>{item.content}</Text>
                  </View>
                ))}
              </ScrollView>
            ),
          }))}
        />
      </ScrollView>
    </View>
  );
};

export default connect(
  ({ navigation: { mode } }) => ({ mode }),
  ({ navigation: { updateData } }) => ({ updateData })
)(withNavigation(Notification));
