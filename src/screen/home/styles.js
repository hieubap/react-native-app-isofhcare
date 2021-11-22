import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  main: { backgroundColor: "#eef4f2" },
  layoutTop: {
    height: 150,
    flexDirection: "row",
    padding: 20,
    paddingTop: 40,
    backgroundColor: "white",
  },
  header_left: {
    width: ((width - 2 * 20 - 5) * 3) / 4,
  },
  header_right: {
    width: (width - 2 * 20 - 5) / 4,
    height: (((width - 2 * 20 - 5) / 4) * 2) / 3,
  },
  title_group: {
    fontSize: 16,
    color: "#385974",
    fontWeight: "600",
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
  appointment_card_left: {
    backgroundColor: "#5bbf9d",
    height: 200,
    width: (width - 20 * 2 - 10) / 2,
    padding: 20,
    borderRadius: 10,
  },
  appointment_card_right: {
    height: 100,
    width: (width - 20 * 2 - 10) / 2,
    marginLeft: 10,
  },
  appointment_card_right_child: {
    borderColor: "#76aa94",
    borderWidth: 1,
    borderRadius: 10,
    width: (width - 20 * 2 - 10) / 2,
    height: 95,
    backgroundColor: "#ecf9f2",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  appointment_card_right_top: {},
  appointment_card_right_bottom: {
    marginTop: 10,
  },
  appointment_card_text: {
    color: "#19876c",
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
    backgroundColor: "white",
  },
  group_card_promotion: {},
  card_promotion: {
    width: 300,
    height: 200,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "scroll",
  },
});

export default styles;
