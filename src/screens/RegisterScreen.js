import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerStyle } from '../styles/RegisterStyle';

const RegisterScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (id && name && species && breed && age && weight) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [id, name, species, breed, age, weight]);

  const registerButton = () => {
    Alert.alert(
      'Pet Registered!\n',
      `ID:${id}\nName:${name}\nSpecies:${species}\nBreed:${breed}\nAge:${age}\nWeight:${weight}`,
    );
  };

  const clearButton = () => {
    setId('');
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={registerStyle.header}>
            <Image
              source={require('../assets/images/logo.png')}
              style={registerStyle.logo}
            />
          </View>
          <View style={registerStyle.container}>
            <Text style={registerStyle.textStyle}>Register Your Pet!!</Text>
            <View style={registerStyle.content}>
              <View style={registerStyle.barStyle}>
                <TextInput
                  placeholderTextColor="#aaa"
                  placeholder="ID"
                  value={id}
                  onChangeText={setId}
                />
              </View>
              <View style={registerStyle.barStyle}>
                <TextInput
                  placeholderTextColor="#aaa"
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View style={registerStyle.barStyle}>
                <TextInput
                  placeholderTextColor="#aaa"
                  placeholder="Species"
                  value={species}
                  onChangeText={setSpecies}
                />
              </View>
              <View style={registerStyle.barStyle}>
                <TextInput
                  placeholderTextColor="#aaa"
                  placeholder="Breed"
                  value={breed}
                  onChangeText={setBreed}
                />
              </View>
              <View style={registerStyle.barStyle}>
                <TextInput
                  placeholderTextColor="#aaa"
                  placeholder="Age"
                  value={age}
                  onChangeText={setAge}
                />
              </View>
              <View style={registerStyle.barStyle}>
                <TextInput
                  placeholderTextColor="#aaa"
                  placeholder="Weight"
                  value={weight}
                  onChangeText={setWeight}
                />
              </View>
            </View>

            <View style={registerStyle.buttonContainer}>
              <TouchableOpacity
                onPress={registerButton}
                disabled={!isActive}
                style={[
                  registerStyle.button,
                  !isActive && { backgroundColor: 'gray' },
                ]}
              >
                <Text style={registerStyle.textButton}>Send</Text>
              </TouchableOpacity>
              <View style={registerStyle.buttonClean}>
                <TouchableOpacity onPress={clearButton}>
                  <Text style={registerStyle.textButton}>Clean</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
