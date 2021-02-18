import { useFonts } from 'expo-font';
import { Font } from 'expo';
import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper';
import CurvedButton from './components/curvedButton.component'
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';



const {width, height} = Dimensions.get('screen');

const HEIGHT = height;
const WIDTH = width;

const Welcome = () => {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        'Coolvetica': require('./assets/coolvetica/coolvetica-rg.ttf')
      });

    if (!fontsLoaded) {
        return <AppLoading />
    }else{
        return (
            <View>
                <View style={[styles.topBox]}>
                    <View style={{flex:0.5, backgroundColor:"#000"}}>
                        
                        <View style={{flex:1, backgroundColor:"#000", opacity:0.2}}>
                            <Image source={require('./assets/message.png')} style={{width: 550, height: 380, resizeMode:"contain", left:-280, top:20}} />
                        </View>
                        <Avatar.Image size={34} style={{backgroundColor:"#000",marginTop:80, marginLeft:20, position:"absolute"}} source={require('./assets/message.png')} />  
                    
                    </View>
                    <View style={{flex:0.5, backgroundColor:"#000"}}>
                        <View style={{flex:1, backgroundColor:"#000", opacity:0.2}}>
                            <Image source={require('./assets/message.png')} style={{width: 600, height: 280, resizeMode:"contain", right:110, top:70, transform: [{rotateY: '180deg'}]}} />
                        </View>
                    </View>
                </View>
    
                <View style={[styles.bottomBox, styles.container]}>
                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <Text  style={{fontFamily:"Coolvetica", fontSize:25, color:"grey"}}>Meet</Text>
                        <Text  style={{marginLeft:5 ,fontFamily:"Coolvetica", fontSize:25, color:"#B8B8B8"}}>ear1,</Text>
                    </View>
                    <View>
                        <CurvedButton onPress={()=>navigation.navigate("SignUp")} textColor="#FFF" title="Login / Sign Up with Apple" color="#131516" />
                        <CurvedButton title="Sign Up with Google" textColor="#FFF" color="#0E6B0E" />
                        <CurvedButton title="Sign Up with Twitter" textColor="#FFF" color="#00ACEE" />
                        <View style={{flexDirection:"row", justifyContent:"center",marginTop:10}}>
                            <Text style={{color:"#B8B8B8"}}>Have an account ?</Text>
                            <Text style={{textDecorationLine:"underline", marginLeft:10, color:"#B8B8B8", fontFamily:"Coolvetica"}}>Login</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        paddingVertical:'8%',
        paddingHorizontal:'8%'
    },

    topBox:{
        height:HEIGHT * .50,
        backgroundColor:"red",
        flexDirection:"row"
    },

    bottomBox:{
        height: HEIGHT * .50,
        backgroundColor:"#000",
    },
    imageBg: {
        flex: 1,
        resizeMode:"contain",
        //justifyContent: "center"
      },
    
})
