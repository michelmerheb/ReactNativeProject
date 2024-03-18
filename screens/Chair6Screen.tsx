import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import ProductDetails from "../components/ProductDetails";

export default function Chair6Screen(){
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/Chair6.jpeg')}
                    style={styles.chairImage}
                />
            </View>

            <ProductDetails Name="Beige Comfy Chair" PriceTag="$159.99" captionText="Immerse yourself in the plush luxury of our beige comfy chair, a haven of relaxation. Its soft, warm beige upholstery and deeply cushioned seat create an inviting oasis of comfort, perfect for cozy reading corners or a chic touch to your living space."/>

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