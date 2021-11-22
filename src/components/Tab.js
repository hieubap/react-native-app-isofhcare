import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tab = ({ tabs = [], defaultActive }) => {
  const [state, _setState] = useState({
    active: defaultActive || tabs[0]?.name,
  });

  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        {tabs.map(({ name = "" }, index) => (
          <TouchableOpacity
            style={[styles.name, name === state.active ? styles.active : {}]}
            key={index}
            onPress={() => setState({ active: name })}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#095f9a",
              }}
            >
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {tabs.map(({ Component, name }, index) => (
          <View
            style={state.active === name ? {} : { display: "none" }}
            key={index}
          >
            {Component ? Component : <View></View>}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 5,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#c5cace",
    borderBottomWidth: 1,
  },
  name: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: "#1a5277",
  },
});

export default Tab;
