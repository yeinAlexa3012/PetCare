import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { petImages } from '../assets/utils/petImages';
import { detailsStyle } from '../styles/DetailsStyle';

const PetDetailsScreen = ({ navigation, route }) => {
  const { id, name, species, breed, age, weight } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      title: `${name}`,
      headerStyle: {
        backgroundColor: '#4d7a5f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    });
  }, [navigation, name]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={detailsStyle.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={detailsStyle.card}>
          <View>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              style={[
                detailsStyle.favoriteBtn,
                { backgroundColor: isFavorite ? '#ff6b6b' : '#ddd' },
              ]}
            >
              <Text
                style={[
                  detailsStyle.favoriteBtnText,
                  { color: isFavorite ? '#fff' : '#333' },
                ]}
              >
                {isFavorite ? 'Favorite' : 'Add to Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={detailsStyle.imageContainer}>
            <Image source={petImages[species]} style={detailsStyle.image} />
            <Text style={detailsStyle.titleText}>
              {name} the {species}
            </Text>
          </View>
          <View style={detailsStyle.infoContainer}>
            <View style={detailsStyle.infoBox}>
              <Text style={detailsStyle.infoText}>
                Species:{'\n'} {species}
              </Text>
            </View>
            <View style={detailsStyle.infoBox}>
              <Text style={detailsStyle.infoText}>
                Breed: {'\n'}
                {breed}
              </Text>
            </View>
            <View style={detailsStyle.infoBox}>
              <Text style={detailsStyle.infoText}>
                Age: {'\n'}
                {age}
              </Text>
            </View>
            <View style={detailsStyle.infoBox}>
              <Text style={detailsStyle.infoText}>
                Weight: {'\n'}
                {weight}
              </Text>
            </View>
          </View>
          <View style={detailsStyle.buttonBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={detailsStyle.textButton}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetDetailsScreen;
