import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TIPS_DATA } from '../data/TipsData';
import { styles } from '../styles/TipsStyle';

const TipsScreen = () => {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');

  const nextTip = () => {
    setIndex(prevIndex => (prevIndex + 1) % TIPS_DATA.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTip();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMessage(`${index + 1} de ${TIPS_DATA.length}`);
    console.log('Cambiando al consejo:', index + 1);
  }, [index]);

  const currentTip = TIPS_DATA[index];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Care Tips!!</Text>

        <View style={styles.card}>
          <View>
            <Image
              source={require('../assets/images/logoTips.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.tipTitle}>{currentTip.title}</Text>
          <Text style={styles.tipDesc}>{currentTip.desc}</Text>

          <Text style={styles.counter}>{message}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={nextTip}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TipsScreen;
