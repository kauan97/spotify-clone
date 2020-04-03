import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainBanner({ thumbnail }) {
    return (
        <View style={ styles.container }>
            <LinearGradient
                colors={['rgba(245, 155, 35, 0.4)', 'rgba(245, 155, 35, 0.6)', 'rgba(245, 155, 35, 0.8)', 'rgba(245, 155, 35, 1)']}
                style={ styles.gradient }
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
            </LinearGradient>
                <TouchableWithoutFeedback style={ styles.button } onPress={() => {}}>
                    <Image 
                        source={{ uri: thumbnail }} 
                        style={ styles.thumbnail } 
                    />
                </TouchableWithoutFeedback>
                <Text style={ styles.caption }>Hip Hop</Text>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width)


const styles = StyleSheet.create({
    container: {
        height: 170,
        marginTop: 30,
        marginBottom: 30,
        overflow: 'hidden'
    },  
    gradient: { 
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 170,
    },
    thumbnail: {
        marginTop: 30,
        width: 100,
        height: 100,
        transform: [{ rotate: '25deg' }],
        position: 'absolute',
        right: -18,
        bottom: 0,
    },
    button: {
        height: 170,
        backgroundColor: 'blue',
    },
    caption: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 15,
        marginLeft: 10
    }
})