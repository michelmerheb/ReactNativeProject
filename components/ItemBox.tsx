import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';


interface ItemBoxProps{
    image: ImageSourcePropType;
    itemTitle: string;
    itemPrice: string;
    navigation: any;
    navigateTo: string;

}

export default function ItemBox({image, itemTitle, itemPrice, navigation, navigateTo} : ItemBoxProps) {
    


    return(
    <TouchableOpacity style={styles.ItemBox} onPress={() => navigation.navigate(navigateTo)}>
        <View style={styles.ImageView}>
            <Image
                source={image}
                style ={styles.ItemImage}  
            />
        </View>
        <View style={styles.NameAndPriceColumn}>
            <Text style={styles.ItemTitle}>{itemTitle}</Text>
            <Text style={styles.PriceText}>{itemPrice}</Text>
        </View>
    </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    ItemBox: {
        flex: 0.4,
        flexDirection: 'row',
        backgroundColor: '#A0B2B7',
        margin: 30,
        borderRadius: 10
    },
    ImageView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 0.5,
        borderRadius: 10
        
    },
    ItemImage: {
        width: 100,
        height: 150,
    },
    NameAndPriceColumn: {
        flexDirection: 'column',
        flex: 0.5
    },
    ItemTitle: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 30
    },
    PriceText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    
    
})