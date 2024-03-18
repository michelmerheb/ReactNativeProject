import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import ProductDetails from "../components/ProductDetails";

export default function Chair4Screen(){
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/Chair4.jpeg')}
                    style={styles.chairImage}
                />
            </View>

            <ProductDetails Name="Blue Modern Chair" PriceTag="$114.99" captionText="Discover contemporary elegance with our modern blue chair, a vibrant addition to any room. Its sleek design and rich, deep blue hue combine to offer unparalleled style and comfort, making it a stunning focal point in your home or office."/>

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