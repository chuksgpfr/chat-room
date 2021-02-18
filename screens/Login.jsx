import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Caption, Title } from 'react-native-paper'
import CurvedButton from './components/curvedButton.component'

const Login = () => {
    const navigation = useNavigation()

    let [fontsLoaded] = useFonts({
        'Coolvetica': require('./assets/coolvetica/coolvetica-rg.ttf')
    })


    return (
        <View style={{flex:1, backgroundColor:"#000"}}>
            <View style={{justifyContent:"center", marginTop:80}}>
                <Text style={{alignSelf:"center", fontFamily:"Coolvetica", fontSize:20, color:"#FFF"}}>Create Username</Text>
                <Caption style={{alignSelf:"center", fontFamily:"Coolvetica", color:"#B8B8B8"}}>Please create your username to continue</Caption>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <View style={{flexDirection:"row", marginTop:90}}>
                    <Text style={{alignSelf:"center",fontSize:30,fontFamily:"Coolvetica", color:"#FFF"}}>@</Text>
                    <TextInput style={{fontSize:30, color:"#FFF", marginLeft:10, fontFamily:"Coolvetica"}} placeholder="username" placeholderTextColor="#B8B8B8" />
                </View>
            </View>

            <View style={{marginTop:100, paddingHorizontal:20}}>
                <CurvedButton onPress={()=>navigation.navigate("user",{screen:"Explore"})} title="Continue" textColor="#FFF" />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})
