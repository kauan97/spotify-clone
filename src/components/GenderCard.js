import React from 'react'
import { Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

export default function GenderCard({ title, image }) {
    return (
        <TouchableOpacity style={ styles.button } onPress={() => {}}>
            <Image style={ styles.image } source={{ uri: image }} />
            <Text style={ styles.title }>{ title }</Text>
        </TouchableOpacity>
    )
}

const screenWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2a292f',
        height: 55,
        width: (screenWidth / 2) - 12.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    title: {
        paddingHorizontal: 5,
        fontSize: 12,
        flex: 1,
        color: '#fff',
        fontWeight: 'bold'
    },
    image: {
        height: 55,
        width: 55,
        resizeMode: 'stretch',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    }
})