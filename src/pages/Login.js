import React from 'react'
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient
            colors={['#ddd', '#3b5998', '#192f6a']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
            <Text
                style={{
                    backgroundColor: 'transparent',
                    fontSize: 15,
                    color: '#fff',
                }}>
                Sign in with Facebook
            </Text>
            </LinearGradient>
        </View>
    )
}