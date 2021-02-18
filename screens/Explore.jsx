import { useFonts } from 'expo-font'
import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { Avatar, Caption } from 'react-native-paper'
import CircleImages from './components/CircleImages.component'
import CircleProfileImage from './components/CircleProfileImage'
import CurvedButtonOutline from './components/CurvedButtonOutline.component'

const Explore = () => {

    let [fontsLoaded] = useFonts({
        'Coolvetica': require('./assets/coolvetica/coolvetica-rg.ttf')
    })

    return (
        <View style={{flex:1, backgroundColor:"#000"}}>
            <View style={{justifyContent:"center", marginTop:80, flexDirection:"row", justifyContent:"space-between"}}>
                <Image source={require('./assets/message.png')} style={{width: 50, height: 30, resizeMode:"contain"}} />
                <Text style={{alignSelf:"center", fontFamily:"Coolvetica", fontSize:30, color:"#FFF"}}>Explore</Text>
                <Avatar.Icon size={24} icon="magnify" style={{backgroundColor:"#131516"}} />
            </View>

            <View style={{marginTop:40, justifyContent:"center", flexDirection:"row"}}>
                <View style={{alignSelf:"center"}}>
                    <Text style={{color:"#FFF", fontFamily:"Coolvetica"}}>PEOPLE</Text>
                    <View style={{borderWidth:2, borderColor:"green", width:20, borderRadius:5, alignSelf:"center"}}></View>
                </View>
                <View style={{alignSelf:"center", marginLeft:50}}>
                    <Text style={{color:"#B8B8B8", fontFamily:"Coolvetica"}}>ROOMS</Text>
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
                    <Text style={styles.smallGreyText}>Public Rooms</Text>
                    <View style={[{flexDirection:"row", paddingLeft:"35%" ,marginTop:15}, Platform.OS === "android" &&{paddingLeft:"40%"} ]}>
                        <Avatar.Image size={34} source={require('./assets/images/IMG_0699.jpg')} />
                        <Avatar.Image size={34} source={require('./assets/images/IMG_0925.jpg')} style={{position:"absolute", right:165, borderWidth:2, borderColor:"#000"}} />
                        <Avatar.Image size={34} source={require('./assets/images/IMG_0699.jpg')} style={{position:"absolute", right:140, borderWidth:2, borderColor:"#000"}} />
                    </View>
                    <View style={{paddingHorizontal:80, marginTop:10}}>
                        <CurvedButtonOutline title="Unfollow" textColor="#FFF" color="#0E6B0E" />
                    </View>
                </View>


            </View>
        </View>
    )
}

export default Explore

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
    }
})
