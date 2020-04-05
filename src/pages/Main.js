import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SimpleLineIcons } from '@expo/vector-icons';


import MainBanner from '../components/MainBanner'
import GenderCard from '../components/GenderCard'
import AlbumList from '../components/AlbumList'

const genders = [
    {
        title: 'Músicas Curtidas',
        image: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'
    },
    {
        title: 'Pagode das Antigas',
        image: 'https://i.scdn.co/image/ab67706f000000020eff04956c41efd2c52c5019'
    },
    {
        title: 'As mais tocadas no seu 2019',
        image: 'https://mosaic.scdn.co/640/ab67616d0000b2731f57e82299920d9eba745182ab67616d0000b273232711f7d66a1e19e89e28c5ab67616d0000b27358e50467df41057ee045b41fab67616d0000b2739d6522bee68370fa5592301d'
    },
    {
        title: 'Sertanejo Acústico',
        image: 'https://i.scdn.co/image/ab67706f00000002324051a4d83a7ae8583b86fa'
    },
    {
        title: 'Farra Sertaneja',
        image: 'https://i.scdn.co/image/ab67706f0000000206a6df95871eba19b1d5ef8e'
    },
    {
        title: 'Paixão Bandida',
        image: 'https://i.scdn.co/image/ab67706f0000000223e3975f612f6daf5ac12c02'
    },
]

const mainBanner = {
    thumbnail: 'https://t.scdn.co/images/9676cef74ec147a48607c737c4f93943.jpeg'
}

const sections = [
    {
        sectionTitle: "Verão o ano inteiro",
        albums: [
            {
                _id: '1',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '2',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '3',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '4',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '5',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '6',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
        ]
    },
    {
        sectionTitle: "Álbuns populares",
        albums: [
            {
                _id: '1',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '2',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '3',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '4',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '5',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '6',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
        ]
    },
    {
        sectionTitle: "Feito para Kauan",
        albums: [
            {
                _id: '1',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '2',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '3',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '4',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '5',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '6',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
        ]
    },
    {
        sectionTitle: "Seus podcasts mais escutados",
        albums: [
            {
                _id: '1',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '2',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '3',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '4',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '5',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
            {
                _id: '6',
                title: 'Tem moda pra tudo',
                artist: "Bruno & Marrone",
                thumbnail: "https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395",
            },
        ]
    },
    
]



export default function Main() {
    return (
        <ScrollView>
            <View style={ styles.container }>
                <LinearGradient
                    colors={['rgba(27,54,93,1)', 'rgba(27,54,93,0.5)', '#121212']}
                    style={ styles.gradient }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.3, y: 0.8 }}
                >
                </LinearGradient>

                <TouchableOpacity onPress={() => {}} style={ styles.settingsButton }>
                    <SimpleLineIcons name="settings" size={20} color="#fff" />
                </TouchableOpacity>
                
                <Text style={ styles.salutation }>Boa noite</Text>
                <View style={ styles.genderContainer }>
                    {genders.map((gender, key) => (
                        <GenderCard 
                            key={ key } 
                            title={ gender.title } 
                            image={ gender.image } 
                        />
                    ))}
                </View>
                
                <MainBanner
                    thumbnail={mainBanner.thumbnail}
                />

                {sections.map((section, key) => (
                    <AlbumList 
                        key={ key } 
                        sectionTitle={ section.sectionTitle } 
                        albums={ section.albums } 
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
        paddingTop: 40
    },
    gradient: { 
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 230 
    },
    genderContainer: {
        height: 175,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    salutation: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    settingsButton: { 
        padding: 5, 
        width: 30, 
        height: 30, 
        alignSelf: 'flex-end' 
    }
})