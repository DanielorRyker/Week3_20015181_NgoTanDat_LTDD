import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order your favorite!</Text>
      <View style={[styles.imageRow, styles.alternate]}>
        <Image source={require('../assets/images/Image_96.png')} style={styles.image} />
      </View>
      <View style={styles.imageRow}>
        <Image source={require('../assets/images/Image95.png')} style={styles.image} />
      </View>
      <View style={[styles.imageRow, styles.alternate]}>
        <Image source={require('../assets/images/Image97.png')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: '#1dd75b',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  alternate: {
    justifyContent: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    backgroundColor: '#1dd75b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProductsScreen;
