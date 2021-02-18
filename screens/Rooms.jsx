import { useFonts } from 'expo-font'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Avatar, Caption } from 'react-native-paper'
import CurvedButton from './components/curvedButton.component'

const Rooms = () => {

    let [fontsLoaded] = useFonts({
        'Coolvetica': require('./assets/coolvetica/coolvetica-rg.ttf')
    })

    return (
        <View style={{flex:1, backgroundColor:"#000"}}>
            <View style={{justifyContent:"center", marginTop:80, flexDirection:"row", justifyContent:"space-between"}}>
                <Image source={require('./assets/message.png')} style={{width: 50, height: 30, resizeMode:"contain"}} />
                <Text style={{alignSelf:"center", fontFamily:"Coolvetica", fontSize:30, color:"#FFF"}}>Rooms</Text>
                <Avatar.Icon size={24} icon="magnify" style={{backgroundColor:"#131516"}} />
            </View>

            <View style={{marginTop:40, justifyContent:"center", flexDirection:"row", backgroundColor:"#000", opacity:0.2}}>
                <Avatar.Image source={require('./assets/images/IMG_0699.jpg')} size={90} />
                <Avatar.Image source={require('./assets/images/IMG_0925.jpg')} size={90} />
            </View>
            <Avatar.Icon size={100} icon="headphones" color="#FFF" style={{backgroundColor:"#0E6B0E", position:"absolute", top:170, left:140}} />

            <View style={{alignSelf:"center", marginTop:80}}>
                <Text style={{fontFamily:"Coolvetica", color:"#FFF", alignSelf:"center", fontSize:20, marginTop:20}}>No Rooms</Text>
                <Caption style={[styles.smallGreyText, {marginTop:30}]}>You didn't make any</Caption>
                <Caption style={styles.smallGreyText}>converstion yet, please select</Caption>
            </View>

            <View style={{paddingHorizontal:20, marginTop:80}}>
                <CurvedButton title="Create a fun room" />
            </View>
        </View>
    )
}

export default Rooms

const styles = StyleSheet.create({
    smallGreyText:{
        fontFamily:"Coolvetica", 
        color:"#B8B8B8", 
        alignSelf:"center"
    }
})
