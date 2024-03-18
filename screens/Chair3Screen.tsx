import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import ProductDetails from "../components/ProductDetails";

export default function Chair3Screen(){
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/Chair3.png')}
                    style={styles.chairImage}
                />
            </View>

            <ProductDetails Name="Rolling Chair" PriceTag="$109.99" captionText="Elevate your workspace with our sleek, ergonomic rolling chair, designed for comfort and mobility. Crafted with adjustable features and smooth-rolling casters, it's the perfect blend of style and functionality for any modern office."/>

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