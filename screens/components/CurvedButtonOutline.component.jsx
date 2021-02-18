import { useFonts } from 'expo-font';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CurvedButtonOutline = ({title, onPress, color, textColor="#000"}) => {

    let [fontsLoaded] = useFonts({
        'Coolvetica-Compressed': require('../assets/coolvetica/coolvetica-compressed-rg.ttf'),
        'Coolvetica-Crammed': require('../assets/coolvetica/coolvetica-crammed-rg.ttf'),
        'Coolvetica': require('../assets/coolvetica/coolvetica-rg.ttf')
      });

    return (
        <View style={{ marginVertical: 5 }}>
            <TouchableOpacity onPress={onPress} color={color} style={[styles.button,{borderColor:color}]}>
                <Text style={{alignSelf:"center", fontWeight:"bold", fontSize:18, color:color, fontFamily:"Coolvetica"}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CurvedButtonOutline

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        borderRadius: 28,
        backgroundColor:"transparent",
        borderWidth:2
    }
})
