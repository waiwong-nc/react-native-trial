import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Icon } from '@rneui/themed';
import {
  CompositeNavigationProp,
  useNavigation,
  RouteProp,
  useRoute
} from "@react-navigation/native";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import useCustomerOrders from '../hooks/useCustomerOrders';
import DeliveryCard from '../components/DeliveryCard';

type ModalScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;


type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;


const ModalScreen = () => {

    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigation>();
    const {params: {name, userId }} = useRoute<ModalScreenRouteProp>();


    const { loading, error, orders } = useCustomerOrders(userId);


    const CloseButton = () => {
        return (
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw("absolute right-5 top-5 z-10")}
          >
            <Icon name="closecircle" type="antdesign" />
          </TouchableOpacity>
        );
    }

  return (
    <View>
      <CloseButton />

      <View style={{ marginTop: 10 }}>
        <View style={[tw("py-5 border-b"), { borderColor: "#59C1cc" }]}>
          <Text style={[tw("text-center text-xl font-bold")]}>{name}</Text>
          <Text style={[tw("text-center italic text-sm")]}>deliveries</Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 200}}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      ></FlatList>
    </View>
  );
}

export default ModalScreen