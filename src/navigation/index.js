import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  Text,
  Touchable,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { connect } from "react-redux";
import Calendar from "../screen/calendar";
import Home from "../screen/home";
import notification from "../screen/notification";
import Setting from "../screen/setting";
import Shop from "../screen/shop";
import Stock from "../screen/stock";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const StackNavigation = (props) => {
  return (
    <Stack.Navigator
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="HomePage"
      headerMode="none"
    >
      <Stack.Screen name="HomePage" component={TabNavigation} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};
const TabSetting = () => (
  <View>
    <Text>Setting tab</Text>
  </View>
);

const screenOptions = [
  {
    name: "Home",
    icon: require("../assets/image/home.png"),
    iconActive: require("../assets/image/home-active.png"),
    component: Home,
  },
  {
    name: "Stock",
    icon: require("../assets/image/stock.jpg"),
    iconActive: require("../assets/image/stock-active.jpg"),
    component: Stock,
  },
  {
    name: "Shop",
    icon: require("../assets/image/shop.jpg"),
    component: Shop,
  },
  {
    name: "Notification",
    icon: require("../assets/image/bell.png"),
    iconActive: require("../assets/image/bell-active.png"),
    component: notification,
  },
  {
    name: "Setting",
    icon: require("../assets/image/setting.jpg"),
    component: TabSetting,
    isStack: true,
  },
];

const TabChild = ({
  route: currentScreen,
  state,
  index,
  stackNavigation,
  tabNavigation,
  ...prop
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        currentScreen.isStack
          ? stackNavigation.push(currentScreen.name)
          : tabNavigation.navigate(currentScreen.name);
      }}
    >
      <View
        style={{
          width: "20%",
          alignItems: "center",
          // borderWidth: 1,
          backgroundColor: "white",
          height: 45,
        }}
      >
        <Image
          source={
            state.index === index
              ? currentScreen.iconActive || currentScreen.icon
              : currentScreen.icon
          }
          style={{ width: 32, height: 32, marginTop: 4 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

function TabNavigation({ mode, navigation: stackNavigation, ...props }) {
  return (
    <Tab.Navigator
      // headerMode="screen"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}

      screenOptions={({ route, navigation: tabNavigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const currentScreen = screenOptions.find(
            (item) => item.name === route.name
          );
          // You can return any component that you like here!
          return (
            <TouchableOpacity
              style={{
                width: "100%",
                alignItems: "center",
                borderWidth: 1,
                height: 50,
                marginTop: 15,
              }}
              onPress={() => {
                currentScreen.isStack
                  ? stackNavigation.navigate(route.name)
                  : tabNavigation.navigate(route.name);
              }}
            >
              <Image
                source={
                  focused
                    ? currentScreen.iconActive || currentScreen.icon
                    : currentScreen.icon
                }
                style={{ width: 32, height: 32, marginTop: 8 }}
              />
            </TouchableOpacity>
          );
        },
        tabBarLabel: "",
        tabBarBadgeStyle: { borderWidth: 1, borderColor: "crimso" },
      })}
      tabBar={(props) => (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {screenOptions.map((item, index) => (
            <TabChild
              key={index}
              route={item}
              index={index}
              tabNavigation={props.navigation}
              stackNavigation={stackNavigation}
              {...props}
            />
          ))}
        </View>
      )}
    >
      {screenOptions.map((item, index) => (
        <Tab.Screen
          key={index + 1}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}

export default connect(({ navigation: { mode } }) => ({ mode }))(
  StackNavigation
);
