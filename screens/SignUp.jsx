import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import CircleImages from './components/CircleImages.component'
import CurvedButton from './components/curvedButton.component'

import icon1 from './assets/icons/icon1.png';
import icon2 from './assets/icons/icon2.png';
import icon3 from './assets/icons/icon3.png';
import icon4 from './assets/icons/icon4.png';
import icon5 from './assets/icons/icon5.png';


const {width, height} = Dimensions.get("screen");

//used device width because absolute positioning was different on my Samsung S9+ and iPhone X
const WIDTH = width;
const HEIGHT = height;

const SignUp = () => {
    const navigation = useNavigation();
    const [size, setsize] = useState(130)

    let [fontsLoaded] = useFonts({
        'Coolvetica': require('./assets/coolvetica/coolvetica-rg.ttf')
    })


    return (
        <View style={{flex:1, backgroundColor:"#000"}}>
            <View style={{justifyContent:"center", marginTop:80}}>
                <Text style={{alignSelf:"center", fontFamily:"Coolvetica", fontSize:20, color:"#FFF"}}>You're all set</Text>
            </View>
            <View>
                <View style={styles.iconImage1}>
                    <View style={{position:"absolute", left:WIDTH - 100}}>
                        <View style={{height:size, width:size, padding:0, borderRadius:size/2, justifyContent:"flex-end"}}>
                            <Image source={require('./assets/icons/icon1.png')} style={{width:size, height:size, borderRadius:size/2, borderWidth:1, borderColor:"green", alignSelf:"center", bottom:-2}}  />
                            <Image source={require('./assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
                        </View>
                    </View>
                    <View style={{position:"absolute", right:WIDTH - 80}}>
                    <View style={{height:size, width:size, padding:0, borderRadius:size/2, justifyContent:"flex-end"}}>
                            <Image source={require('./assets/icons/icon2.png')} style={{width:size, height:size, borderRadius:size/2, borderWidth:1, borderColor:"green", alignSelf:"center", bottom:-2}}  />
                            <Image source={require('./assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
                        </View>
                    </View>
                </View>

                <View style={styles.iconImage2}>
                    <View style={{alignSelf:"center"}}>
                        <View style={{height:180, width:180, padding:0, borderRadius:180/2, justifyContent:"flex-end"}}>
                            <Image source={require('./assets/icons/icon5.png')} style={{width:size, height:size, borderRadius:size/2, borderWidth:1, borderColor:"green", alignSelf:"center", bottom:-2}}  />
                            <Image source={require('./assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
                        </View>
                    </View>
                </View>

                <View style={styles.iconImage1}>
                    <View style={{position:"absolute", left:WIDTH - 100}}>
                        <View style={{height:size, width:size, padding:0, borderRadius:size/2, justifyContent:"flex-end"}}>
                            <Image source={require('./assets/icons/icon3.png')} style={{width:size, height:size, borderRadius:size/2, borderWidth:1, borderColor:"green", alignSelf:"center", bottom:-2}}  />
                            <Image source={require('./assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
                        </View>
                    </View>
                    <View style={{position:"absolute", right:WIDTH - 80}}>
                        <View style={{height:size, width:size, padding:0, borderRadius:size/2, justifyContent:"flex-end"}}>
                            <Image source={require('./assets/icons/icon4.png')} style={{width:size, height:size, borderRadius:size/2, borderWidth:1, borderColor:"green", alignSelf:"center", bottom:-2}}  />
                            <Image source={require('./assets/message.png')} style={{width: 70, height: 50, resizeMode:"contain", position:"absolute", right:-15, bottom:-15}} />
                        </View>
                    </View>
                </View>

                <View style={styles.iconImage2}>
                    <CurvedButton onPress={()=>navigation.navigate("Login")} title="Sign Up with Google" textColor="#FFF" color="#0E6B0E" />
                    <Text style={{color:"#B8B8B8", fontFamily:"Coolvetica", alignSelf:"center"}}>Start ranting with friends, create groups have fun...</Text>
                </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    iconImage1:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    iconImage2:{
        marginTop:180,
        justifyContent:"center"
    }

})
