import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


//import icon1 from '../assets/icons/icon1.png';

const CircleImages = ({size=130, icon}) => {
    return (
        <View style={{height:size, width:size, padding:0, borderRadius:size/2, justifyContent:"flex-end"}}>
            <Image source={icon} style={{width:size, height:size, borderRadius:size/2, borderWidth:1, borderColor:"green", alignSelf:"center", bottom:-2}}  />
            <Image source={require('../assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
        </View>
    )
}

export default CircleImages

const styles = StyleSheet.create({})
