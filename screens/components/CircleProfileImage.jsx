import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CircleProfileImage = ({size=130}) => {
    return (
        <View style={{height:size, width:size, borderWidth:1, borderColor:"transparent", padding:0, borderRadius:size/2, justifyContent:"flex-end"}}>
            <Image source={require('../assets/images/IMG_0925.jpg')} style={{width:120, height:120, borderRadius:120/2 , alignSelf:"center", bottom:3}}  />
            <Image source={require('../assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
        </View>
    )
}

export default CircleProfileImage

const styles = StyleSheet.create({})
