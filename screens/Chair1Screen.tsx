import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import ProductDetails from "../components/ProductDetails"; 
import { useResponsiveDimensions } from "../hooks/useResponsiveDimensions";


export default function Chair1Screen(){

    const { width, height } = Dimensions.get('window');

 return(
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image
                source={require('../assets/Chair.png')}
                style={styles.chairImage}
            />
        </View>

        <ProductDetails Name="Lounge" PriceTag="$244.99" captionText="It looks great from all sides you can put it in the middle of the room. High legs make it easier cleaning under the seat."/>

    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f4',
    },  
    imageView:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chairImage: {
        width: 250,
        height: 300,
    },
});
