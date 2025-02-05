import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
// import DeviceNumber from 'react-native-device-number';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchPhoneNumber();
    // checkBiometric();
  }, []);

  const fetchPhoneNumber = async () => {
    try {
      // DeviceNumber.get().then(res => {
      //   if (res.hasOwnProperty('mobileNumber')) {
      //     setPhoneNumber(res.mobileNumber);
      //   }
      // });
      const number = await DeviceInfo.getPhoneNumber();
      if (number) setPhoneNumber(number);
    } catch (error) {
      console.log('Error fetching phone number:', error);
    }
  };

  const checkBiometric = async () => {
    const optionalConfigObject = {
      title: 'Biometric Authentication',
      sensorDescription: 'Use Fingerprint to Login',
      cancelText: 'Use Phone Number',
    };

    TouchID.isSupported()
      .then(() => {
        TouchID.authenticate('Authenticate to login', optionalConfigObject)
          .then(() => {
            Alert.alert('Success', 'Authenticated Successfully');
            navigation.replace('Home');
          })
          .catch(() => {
            console.log('Biometric authentication failed');
          });
      })
      .catch(error => console.log('Biometric not supported:', error));
  };

  const handleLogin = () => {
    if (phoneNumber.length >= 10) {
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Enter a valid phone number');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Login</Text>
      <TextInput
        style={{width: 250, height: 40, borderBottomWidth: 1, marginBottom: 20}}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
