import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const CurvedButton = ({ title, onPress, color="#0E6B0E", textColor="#000" }) => {

    let [fontsLoaded] = useFonts({
        'Coolvetica-Compressed': require('../assets/coolvetica/coolvetica-compressed-rg.ttf'),
        'Coolvetica-Crammed': require('../assets/coolvetica/coolvetica-crammed-rg.ttf'),
        'Coolvetica': require('../assets/coolvetica/coolvetica-rg.ttf')
      });

     
        return (
            <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={onPress} color={textColor} style={[styles.button,{backgroundColor:color}]}>
                    <Text style={{alignSelf:"center", fontWeight:"bold", fontSize:18, color:textColor, fontFamily:"Coolvetica"}}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    
}

export default CurvedButton

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        borderRadius: 28,
        borderColor:"transparent",
    }
})
