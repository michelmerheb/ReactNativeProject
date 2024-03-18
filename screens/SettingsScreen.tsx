import React, {useState} from "react";
import {View, Text, StyleSheet, Switch, Image, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { useResponsiveDimensions } from "../hooks/useResponsiveDimensions";
export default function SettingsScreen(){

    
    const {width, height} = Dimensions.get('window');

    const dynamicStyles = StyleSheet.create({
        profileView: {
          flexDirection: 'row',
          padding: 20,
          height: height * 0.2,
          backgroundColor: 'orange',
        },

      });

    const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] = useState(false);
    const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = useState(false);
    const [isDecimalEnabled, setIsDecimalEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    const [username, setUsername] = useState("King Rolodex");
    const [email, setEmail] = useState("analkingrolodex1@yahoo.com");
    
    const [isUsernameEditable, setIsUsernameEditable] = useState(false);
    const [isEmailEditable, setIsEmailEditable] = useState(false);

    const toggleUsernameEditability = () => {
        setIsUsernameEditable(!isUsernameEditable);
    };

    const toggleEmailEditability = () => {
        setIsEmailEditable(!isEmailEditable);
    };


    return(
        <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <View style={dynamicStyles.profileView}>
                    <Image
                        source={require('../assets/UserProfileImage.webp')}
                        style={styles.userImage}
                    />
                    <View style={styles.nameAndEmail}>
                        <Text style={styles.nameText}>{username}</Text>
                        <Text style={styles.emailText}>{email}</Text>
                    </View>
                    
                </View>

                <View style={styles.valuesView}>
                    <View style={styles.rowView}>
                        <Text style={styles.valueText}>Push Notifications</Text>
                        <Switch
                            onValueChange={() => setIsPushNotificationsEnabled(previousState => !previousState)}
                            value={isPushNotificationsEnabled}
                        />
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.valueText}>Email Notifications</Text>
                        <Switch
                            onValueChange={() => setIsEmailNotificationsEnabled(previousState => !previousState)}
                            value={isEmailNotificationsEnabled}
                        />
                    </View>


                    <View style={styles.rowView}>
                        <Text style={styles.valueText}>Use decimal within amounts</Text>
                        <Switch
                            onValueChange={() => setIsDecimalEnabled(previousState => !previousState)}
                            value={isDecimalEnabled}
                        />
                    </View>

                    <View style={styles.rowView}>
                        <Text style={styles.valueText}>Dark mode</Text>
                        <Switch
                            onValueChange={() => setIsDarkModeEnabled(previousState => !previousState)}
                            value={isDarkModeEnabled}
                        />
                    </View>

                    <View style={styles.inputRow}>
                        <TextInput
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            style={styles.input}
                            editable={isUsernameEditable}
                        />
                        <TouchableOpacity onPress={toggleUsernameEditability}>
                            <Text style={styles.editText}>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputRow}>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            editable={isEmailEditable}
                        />
                        <TouchableOpacity onPress={toggleEmailEditability}>
                            <Text style={styles.editText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#A0B2B7'
        
    },
    scrollView: {
        flex: 1
    },

    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    nameAndEmail: {
        marginLeft: 30,
    },
    nameText: {
        fontSize: 30,
        paddingBottom: 10
    },
    emailText: {
        fontSize: 17
    },
    valuesView: {
        backgroundColor: '#A0B2B7',
        flex: 0.8
    },
    rowView: {
        flexDirection: 'row',
        marginBottom: 45,
        marginTop: 10

    },
    valueText: {
        fontSize: 25,
    },

    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    input: {
        flexGrow: 1,
        marginRight: 10,
        fontSize: 25,
    },
    editText: {
        fontSize: 25
    }
})