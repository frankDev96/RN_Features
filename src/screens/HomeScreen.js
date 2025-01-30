import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to Home Screen</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default HomeScreen;
