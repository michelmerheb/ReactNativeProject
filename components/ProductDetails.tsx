import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { useResponsiveDimensions } from "../hooks/useResponsiveDimensions";
interface ProductBoxProps {
    Name: string;
    PriceTag: string;
    captionText: string;
}

export default function ProductBox({Name, PriceTag, captionText}:ProductBoxProps) {

    const { width, height } = Dimensions.get('window');

    return(
        <View style={styles.productBox}>
            <View style={styles.NamePriceRow}>
                <View>
                    <Text style={styles.Name}>{Name}</Text>
                    <Text style={styles.categName}>Chair</Text>
                </View>

                <View>
                    <Text style={styles.PriceName}>Price</Text>
                    <Text style={styles.PriceTag}>{PriceTag}</Text>
                </View>
            </View>
            
            <View style={styles.Colour}>
                <Text style={styles.ColourText}>Colour</Text>
                <View style={styles.colours}>
                    <TouchableOpacity style={styles.colour1}></TouchableOpacity>
                    <TouchableOpacity style={styles.colour2}></TouchableOpacity>
                    <TouchableOpacity style={styles.colour3}></TouchableOpacity>
                </View>
            </View>

            <View style={styles.Description}>
                <Text style={styles.descriptionText}>Description</Text>
                <Text style={styles.captionText}>{captionText}</Text>
            </View>

            <View style={styles.CartAndBuy}>
                <TouchableOpacity style={styles.Cart}>
                    <Image
                        source={require('../assets/Cart.png')}
                        style={styles.CartImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.BuyNow}>
                    <Text style={styles.BuyNowText}>Buy Now</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    );
}


const styles = StyleSheet.create({
    productBox:{
        flex: 0.5,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 35,
    },
    NamePriceRow:{
        flex: 0.2,
        margin: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Name: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    categName:{
        fontSize: 20,
    },
    PriceName:{
        fontSize: 20,
    },
    PriceTag:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    Colour: {
        flex: 0.25,
    },
    ColourText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    colours: {
        flexDirection: 'row',
        marginTop: 10,
    },

    colour1: {
        backgroundColor: '#e18e44',
        width: 30, 
        height: 30, 
        marginRight: 10,
        borderRadius: 5,
    },
    colour2: {
        backgroundColor: 'grey',
        width: 30,
        height: 30, 
        marginRight: 10,
        borderRadius: 5,
    },
    colour3: {
        backgroundColor: '#62360f',
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    Description: {
        flex: 0.3,
        padding: 5
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    captionText: {
        marginTop: 5,
        fontSize: 15
    },

    CartAndBuy: {
        flexDirection: 'row',
        flex: 0.25
    },
    Cart: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CartImage: {
        width: 60,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BuyNow: {
        flex: 0.5,
        margin: 15,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10    
    },
    BuyNowText: {
        color: 'white',
    },
})