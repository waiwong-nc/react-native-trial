import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerScreen from '../screens/CustomerScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

type TabBarIconParamList = { routeName: String; focused: Boolean }; 
const TabBarIcon = (props: TabBarIconParamList): any => {
  if (props.routeName === "Customers") {
    return (
      <Icon
        name="users"
        type="entypo"
        color={props.focused ? "#59c1cc" : "gray"}
      />
    );
  } else if (props.routeName === "Orders") {
    return (
      <Icon
        name="box"
        type="entypo"
        color={props.focused ? "#EB6A7C" : "gray"}
      />
    );
  }
  return (
    <Icon name="box" type="entypo" color={props.focused ? "#EB6A7C" : "gray"} />
  );
};




const TabNavigator = () => {

  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  },[]);

  return (
    <Tab.Navigator 
      screenOptions = {
        ({ route }) => ({
          tabBarActiveTintColor: "#59C1CC",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused, color, size}) => 
            <TabBarIcon routeName={route.name} focused={focused} />
        })
    }>
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;