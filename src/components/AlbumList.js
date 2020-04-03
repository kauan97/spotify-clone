import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';


export default function AlbumList({ sectionTitle, albums }) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.sectionTitle }>{ sectionTitle }</Text>
            <FlatList 
                style={ styles.list }
                data={albums}
                keyExtractor={album => album._id}
                horizontal
                showsVerticalScrollIndicator={false}
                renderItem={({ item: album }) => (
                    <View style={ styles.albumBox }>
                        <TouchableOpacity style={ styles.button } onPress={() => {}}>
                            <Image style={ styles.thumbnail } source={{ uri: album.thumbnail }} resizeMode="contain" />
                        </TouchableOpacity>
                        <Text style={ styles.albumTitle }>{ album.title }</Text>
                        <Text style={ styles.artist }>{ album.artist }</Text>
                    </View>
                )}
            />
        </View>

    )
}

const screenWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    sectionTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    list: {
        marginTop: 20
    },
    albumBox: {
        marginHorizontal: 7
    },
    button: {

    },
    thumbnail: {
        height: 140,
        width: 140
    },
    albumTitle: {
        marginTop: 13,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13
    },
    artist: {
        color: '#9a9a9a',
        fontSize: 13
    }
})