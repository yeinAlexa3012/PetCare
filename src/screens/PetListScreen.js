import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { REGISTERED_PETS } from '../data/PetClass';
import { styles } from '../styles/PetlistStyle';
import { petImages } from '../assets/utils/petImages';

const PetListScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    console.log('Starting the loading of pets');
    const timer = setTimeout(() => {
      setPets(REGISTERED_PETS);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  //functions
  const renderPets = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            id: item.id,
            name: item.name,
            species: item.species,
            breed: item.breed,
            age: item.age,
            weight: item.weight,
          });
        }}
      >
        <View style={styles.containerFlatlist}>
          <View style={styles.petImages}>
            <Image source={petImages[item.species]} />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text style={styles.contentText}>{item.species}</Text>
            <Text style={styles.contentText}>{item.breed}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <FlatList
        data={pets}
        renderItem={renderPets}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistStyle}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;
