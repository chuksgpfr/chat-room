import { useFonts } from 'expo-font'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Avatar, Caption } from 'react-native-paper'
import CircleImages from './components/CircleImages.component'
import CircleProfileImage from './components/CircleProfileImage'
import CurvedButtonOutline from './components/CurvedButtonOutline.component'

const Account = () => {
    return (
        <View style={{flex:1, backgroundColor:"#000"}}>
            <View style={{justifyContent:"center", marginTop:80, flexDirection:"row", justifyContent:"space-between"}}>
                <Image source={require('./assets/message.png')} style={{width: 50, height: 30, resizeMode:"contain"}} />
                <Text style={{alignSelf:"center", fontFamily:"Coolvetica", fontSize:30, color:"#FFF"}}>Account</Text>
                <Avatar.Icon size={24} icon="magnify" style={{backgroundColor:"#131516"}} />
            </View>

            <View style={{marginTop:40, justifyContent:"center", flexDirection:"row"}}>
                <View style={{alignSelf:"center"}}>
                    <Text style={{color:"#FFF", fontFamily:"Coolvetica"}}>PROFILE</Text>
                    <View style={{borderWidth:2, borderColor:"green", width:20, borderRadius:5, alignSelf:"center"}}></View>
                </View>
                <View style={{alignSelf:"center", marginLeft:50}}>
                    <Text style={{color:"#B8B8B8", fontFamily:"Coolvetica"}}>SETTINGS</Text>
                    <View style={{borderWidth:2, width:20, borderRadius:5, alignSelf:"center"}}></View>
                </View>
            </View>

            <View style={{justifyContent:"center", marginTop:30, backgroundColor:"#131516", marginHorizontal:20, paddingVertical:20, borderRadius:10}}>
                <View style={{alignSelf:"center"}}>
                    <CircleProfileImage />
                    <Text style={{fontFamily:"Coolvetica", color:"#FFF", alignSelf:"center", fontSize:20, marginTop:20}}>Chukwudi Ubah</Text>
                    <Caption style={styles.smallGreyText}>@chuksgpfr</Caption>

                </View>

                <View style={{alignSelf:"center", flexDirection:"row", marginTop:20}}>
                    <View style={{marginRight:25}}>
                        <Text style={styles.bigText}>12</Text>
                        <Caption style={styles.smallGreyText}>Rooms</Caption>
                    </View>

                    <View style={{marginRight:25}}>
                        <Text style={styles.bigText}>2,215</Text>
                        <Caption style={styles.smallGreyText}>Followers</Caption>
                    </View>

                    <View>
                        <Text style={styles.bigText}>5</Text>
                        <Caption style={styles.smallGreyText}>Following</Caption>
                    </View>
                </View>

                <View style={{marginTop:40}}>
                    <Text style={styles.smallGreyText}>Photos</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between" ,marginTop:15, paddingHorizontal:10}}>
                        <Image source={require('./assets/images/IMG_0699.jpg')} style={styles.photosStyle} />
                        <Image source={require('./assets/images/IMG_0925.jpg')} style={styles.photosStyle} />
                        <Image source={require('./assets/images/IMG_0699.jpg')} style={styles.photosStyle} />
                    </View>
                </View>


            </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    bigText:{
        fontFamily:"Coolvetica", 
        color:"#FFF", 
        alignSelf:"center", 
        fontSize:25
    },

    smallGreyText:{
        fontFamily:"Coolvetica", 
        color:"#B8B8B8", 
        alignSelf:"center"
    },
    
    photosStyle: {
        width: 90, 
        height: 120, 
        borderWidth: 2, 
        borderColor: "transparent", 
        borderRadius: 10, 
        resizeMode: "cover",
    }
})
