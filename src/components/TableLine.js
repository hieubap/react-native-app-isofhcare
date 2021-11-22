import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const TableLine = ({ dataSource, column, ignoreTitle = false }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.row}>
        {!ignoreTitle &&
          column.map((col, index) =>
            col.title ? (
              typeof col.title === "string" ? (
                <View
                  key={index}
                  style={[styles.col, col.style, { width: col.width }]}
                >
                  <Text style={col.styleTitle}>{col.title}</Text>
                </View>
              ) : (
                <col.title key={index} />
              )
            ) : (
              <View key={index}></View>
            )
          )}
      </View>

      {dataSource.map((row, index) => (
        <View key={index} style={styles.row}>
          {column.map((col, idx) =>
            col.render ? (
              <View key={idx}>
                {col.render(row[col.dataIndex], row, index)}
              </View>
            ) : (
              <View
                key={idx}
                style={[styles.col, col.style, { width: col.width }]}
              >
                <Text style={col.styleText}>{row[col.dataIndex]}</Text>
              </View>
            )
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#f9f9f9",
    borderBottomWidth: 1,
  },
  col: {
    padding: 15,
  },
});

export default TableLine;
