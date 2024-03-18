import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import ProductDetails from "../components/ProductDetails";

export default function Chair2Screen(){
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/Chair2.png')}
                    style={styles.chairImage}
                />
            </View>

            <ProductDetails Name="Premium Wooden Chair" PriceTag="$139.99" captionText="Elevate your space with the elegance of our Artisan Crafted Accent Chair, featuring plush upholstery and a durable, handcrafted wooden frame for the ultimate blend of comfort and style."/>

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