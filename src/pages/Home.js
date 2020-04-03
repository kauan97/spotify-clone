import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



import logo from '../assets/logo.png'

export default function Home({ navigation }) {
    return (
        <View style={ styles.container }>
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.2);', 'rgba(255, 255, 255, 0.1);', '#121212']}
                style={ styles.gradient }
            >
            </LinearGradient>
            <Image source={logo} style={{ height: 70, resizeMode: 'contain', marginTop: 70 }} />
            <View style={ styles.titleContainer }>
                <Text style={ styles.titleText }>Milhões de músicas à sua escolha.</Text>
                <Text style={ styles.titleText }>Grátis no Spotify.</Text>
            </View>
            <View style={ styles.buttonContainer }>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: '#1db954' }]} 
                    onPress={() => {navigation.navigate('Login')}}>
                        <Text style={ styles.buttonText }>INSCREVA-SE GRÁTIS</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, { flexDirection: 'row' }]} 
                    onPress={() => {}}>
                        <Entypo name="facebook-with-circle" size={20} color="#1376d4" style={{ position: 'absolute', left: 10 }} />
                        <Text style={ styles.buttonText }>CONTINUAR COM O FACEBOOK</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, { borderWidth: 0 }]} 
                    onPress={() => {}}>
                        <Text style={ styles.buttonText }>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 60,
        paddingHorizontal: 40,
        marginBottom: 60
    },
    titleText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        lineHeight: 38,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        height: 50,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        borderColor: '#383838',
        borderWidth: 1,
        marginBottom: 7
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 13
    },
    gradient: { 
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 230 
    }
})