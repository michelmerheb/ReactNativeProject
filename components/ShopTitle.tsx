import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function ShopTitle({navigation}: { navigation: any }){
    return(
        <View style={styles.titleView}>
            <View style={styles.titleViewRow}>
                <View style={styles.title}>
                    <Text style={styles.AppTitle}>LoungeLuxe</Text>
                </View>
                <TouchableOpacity style={styles.ImageView} onPress={() => navigation.navigate('SettingsScreen')}>
                <Image
                    source={require('../assets/SettingsIcon.png')}
                    style={styles.SettingsImage}
                />
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

const styles= StyleSheet.create({
    titleView: {
        minHeight: 100,
        backgroundColor: '#A0B2B7',
        justifyContent: 'center',
    },
    titleViewRow: {
        flexDirection: 'row',
    },
    title: {
        flex: 0.5
    },
    AppTitle: {
        fontSize: 30,
        textAlign:'center',
    },
    ImageView: {
        flex: 0.5,
        alignItems: 'flex-end',
        paddingRight: 20
    },
    SettingsImage:{
        width: 40,
        height: 40,
    },

})