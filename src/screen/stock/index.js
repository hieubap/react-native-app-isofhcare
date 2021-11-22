import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import TableLine from "../../components/TableLine";
import {
  changeRate,
  interestRateEur,
  interestRateUsd,
  interestRateVnd,
  stock,
} from "./data";
import styles from "./styles";

const { width } = Dimensions.get("screen");

const Stock = (props) => {
  const columnMarket = [
    {
      dataIndex: "title",
      width: (width / 20) * 5,
    },
    {
      dataIndex: "icon",
      width: (width / 20) * 1,
      render: (item) => (
        <Image
          source={
            item
              ? require("../../assets/image/increase.png")
              : require("../../assets/image/decrease.png")
          }
          style={{ width: 13, height: 12, marginTop: 15 }}
        />
      ),
    },
    {
      dataIndex: "value",
      width: (width / 20) * 5,
    },
    {
      dataIndex: "difference",
      width: (width / 20) * 5,
      styleText: { color: "#7cc27a" },
    },
    {
      dataIndex: "compare",
      width: (width / 20) * 4,
      styleText: { color: "#7cc27a" },
    },
  ];

  const columnChangeRate = [
    {
      title: "Tiền tệ",
      dataIndex: "title",
      width: width / 3,
      styleTitle: { color: "#bbb" },
      render: (item, data) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingTop: 15,
            width: width / 3,
          }}
        >
          <Image
            style={{ width: 20, height: 15, marginRight: 5 }}
            source={data.image}
          />
          <Text>{item}</Text>
        </View>
      ),
    },
    {
      title: "Mua",
      dataIndex: "buy",
      width: width / 3,
      styleTitle: { textAlign: "center", color: "#bbb" },
      styleText: { textAlign: "center" },
    },
    {
      title: "Bán",
      dataIndex: "sell",
      width: width / 3,
      styleTitle: { textAlign: "right", color: "#bbb" },
      styleText: { textAlign: "right" },
    },
  ];

  const columnInterestRate = [
    {
      dataIndex: "title",
      width: (width * 2) / 3,
    },
    {
      dataIndex: "rate",
      render: (item) => (
        <Text
          style={{
            width: width / 3,
            textAlign: "right",
            paddingRight: 20,
            paddingTop: 15,
          }}
        >
          {item.toFixed(2)} %
        </Text>
      ),
    },
  ];
  return (
    <View style={styles.main}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Đầu tư</Text>
        </View>
        <View style={styles.view_group}>
          <View style={styles.group_title}>
            <Text style={styles.title_text}>THỊ TRƯỜNG CHỨNG KHOÁN</Text>
          </View>
          <View style={styles.view_group}>
            <TableLine ignoreTitle dataSource={stock} column={columnMarket} />
          </View>
          <View style={styles.buttonBottom}>
            <Button type="button-bottom">
              <Text style={{ color: "#4f5d6a" }}>Giao dịch chứng khoán</Text>
            </Button>
          </View>
        </View>

        <View style={styles.view_group}>
          <View style={styles.group_title}>
            <Text style={styles.title_text}>TỶ GIÁ</Text>
          </View>
          <View style={styles.view_group}>
            <TableLine dataSource={changeRate} column={columnChangeRate} />
          </View>
          <View style={styles.buttonBottom}>
            <Button type="button-bottom">
              <Text style={{ color: "#4f5d6a" }}>Chuyển đổi tiền tệ</Text>
            </Button>
          </View>
        </View>

        <View style={styles.view_group}>
          <View style={styles.group_title}>
            <Text style={styles.title_text}>LÃI SUẤT</Text>
          </View>
          <Tab
            tabs={[
              { name: "VND", data: interestRateVnd },
              { name: "USD", data: interestRateUsd },
              { name: "EUR", data: interestRateEur },
            ].map(({ name, data }) => ({
              name,
              Component: (
                <View style={{ marginLeft: -15 }}>
                  <TableLine
                    ignoreTitle
                    dataSource={data}
                    column={columnInterestRate}
                  />
                </View>
              ),
            }))}
          />
          <View style={[styles.buttonBottom, { paddingBottom: 20 }]}>
            <Button type="button-bottom">
              <Text style={{ color: "#4f5d6a" }}>Tính toán lãi suất</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stock;
