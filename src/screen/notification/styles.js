import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  main: { backgroundColor: "#f2f6f9" },
  header: {
    backgroundColor: "#0a639b",
    alignItems: "center",
    padding: 15,
  },
  card: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    padding: 15,
    marginTop: 7,
    marginBottom: 7,
  },
  text_header: {
    color: "#e6ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  layoutTop: {
    height: 150,
    backgroundColor: "#0c659d",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title_group: {
    fontSize: 16,
    color: "#385974",
    fontWeight: "700",
    padding: 20,
  },
  middle_header: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    width: width * 0.8,
    height: 80,
    backgroundColor: "white",
    borderRadius: 40,
    alignContent: "center",
    marginTop: -40,
    marginLeft: width * 0.1,
  },
  middle_text: {
    color: "#125582",
    fontWeight: "600",
    marginTop: -8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  group_card_feature: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
  },
  group_card_promotion: {},
  card_promotion: {
    width: 300,
    height: 200,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    overflow: "scroll",
  },
});

export default styles;
