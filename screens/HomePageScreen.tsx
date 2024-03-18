import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import ItemBox from "../components/ItemBox";
import ShopTitle from "../components/ShopTitle";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



export default function HomePageScreen({navigation } :any){

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <ShopTitle navigation={navigation} />
            </View>
            <ScrollView style={styles.scrollView}>
                <ItemBox image={require('../assets/Chair.png')} itemTitle="Lounge" itemPrice="$244.99" navigation={navigation} navigateTo="Lounge"/>
                <ItemBox image={require('../assets/Chair2.png')} itemTitle="Premium Wooden Chair" itemPrice="$139.99" navigation={navigation} navigateTo="Premium Wooden Chair"/>
                <ItemBox image={require('../assets/Chair3.png')} itemTitle="Rolling Chair" itemPrice="$109.99" navigation={navigation} navigateTo="Rolling Chair"/>
                <ItemBox image={require('../assets/Chair4.jpeg')} itemTitle="Blue Modern Chair" itemPrice="$114.99" navigation={navigation} navigateTo="Blue Modern Chair"/>
                <ItemBox image={require('../assets/Chair5.jpeg')} itemTitle="Boss Office Chair" itemPrice="$274.99" navigation={navigation} navigateTo="Boss Office Chair"/>
                <ItemBox image={require('../assets/Chair6.jpeg')} itemTitle="Beige Comfy Chair" itemPrice="$159.99" navigation={navigation} navigateTo="Beige Comfy Chair"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    titleContainer: {
        height: 100
    },
    scrollView: {
        flex: 1,
    },
    
})