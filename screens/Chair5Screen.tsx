import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import ProductDetails from "../components/ProductDetails";

export default function Chair5Screen(){
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/Chair5.jpeg')}
                    style={styles.chairImage}
                />
            </View>

            <ProductDetails Name="Boss Office Chair" PriceTag="$274.99" captionText="Command your workspace with the Boss Office Chair, embodying executive sophistication with its premium leather finish and superior lumbar support. Designed for the discerning professional, this chair offers unrivaled comfort and adjustability."/>

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
})