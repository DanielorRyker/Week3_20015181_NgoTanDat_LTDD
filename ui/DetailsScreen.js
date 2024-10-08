import React, {useState} from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function DetailsScreen({ navigation }) {
  const [data, setData] = useState([
    {key: '1', type: 'vegetable', name: 'Apple', price: 20, image: require('../assets/images/Image 101.png')},
    {key: '2', type: 'vegetable', name: 'Pear', price: 20, image: require('../assets/images/Image 102.png')},
    {key: '3', type: 'vegetable', name: 'Coconut', price: 20, image: require('../assets/images/Image 103.png')},
    {key: '4', type: 'vegetable', name: 'Pear', price: 20, image: require('../assets/images/Image 105.png')},
    {key: '5', type: 'vegetable', name: 'Coconut', price: 20, image: require('../assets/images/Image 106.png')},
    {key: '6', type: 'vegetable', name: 'Coconut', price: 20, image: require('../assets/images/Image 107.png')},
    {key: '7', type: 'vegetable', name: 'Pear', price: 20, image: require('../assets/images/Image 105.png')},

    {key: '8', type: 'seafood', name: 'Seafood 1', price: 20, image: require('../assets/images/Image 95.png')},
    {key: '9', type: 'seafood', name: 'Seafood 2', price: 20, image: require('../assets/images/Image 95.png')},
    {key: '10', type: 'seafood', name: 'Seafood 3', price: 20, image: require('../assets/images/Image 95.png')},
    {key: '11', type: 'seafood', name: 'Seafood 4', price: 20, image: require('../assets/images/Image 95.png')},
    {key: '12', type: 'seafood', name: 'Seafood 5', price: 20, image: require('../assets/images/Image 95.png')},

    {key: '13', type: 'drink', name: 'Drink 1', price: 20, image: require('../assets/images/Image_96.png')},
    {key: '14', type: 'drink', name: 'Drink 2', price: 20, image: require('../assets/images/Image_96.png')},
    {key: '15', type: 'drink', name: 'Drink 3', price: 20, image: require('../assets/images/Image_96.png')},
    {key: '16', type: 'drink', name: 'Drink 4', price: 20, image: require('../assets/images/Image_96.png')},
    {key: '17', type: 'drink', name: 'Drink 5', price: 20, image: require('../assets/images/Image_96.png')},
  ]);

  const [type, setType] = useState('vegetable');
  const [selectedBtn, setSelectedBtn] = useState('vegetable');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
            <Image source={require('../assets/images/Image 183.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}
            onPress={() => navigation.navigate('Payments', { data })}
          >
            <Image source={require('../assets/images/Image 182.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <View style={styles.categoryButtons}>
        <TouchableOpacity style={[styles.categoryButton, selectedBtn === 'vegetable' && styles.selectedButton]} onPress={() => { setType('vegetable'); setSelectedBtn('vegetable'); }}>
          <Text style={[styles.buttonText, selectedBtn === 'vegetable' && styles.selectedButtonText]}>Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryButton, selectedBtn === 'seafood' && styles.selectedButton]} onPress={() => { setType('seafood'); setSelectedBtn('seafood'); }}>
          <Text style={[styles.buttonText, selectedBtn === 'seafood' && styles.selectedButtonText]}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.categoryButton, selectedBtn === 'drink' && styles.selectedButton]} onPress={() => { setType('drink'); setSelectedBtn('drink'); }}>
          <Text style={[styles.buttonText, selectedBtn === 'drink' && styles.selectedButtonText]}>Drink</Text>
        </TouchableOpacity>

        </View>
        <View style={styles.orderSection}>
          <Text style={styles.sectionTitle}>Order your favorite!</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageGrid}>
          {data.filter(item => item.type === type).map(item => (
            <TouchableOpacity key={item.key} style={styles.imageItem} onPress={() => console.log(`${item.name} selected`)}>
              <Image source={item.image} style={styles.image} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  cartIcon: {
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#9095a0',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonText: {
    color: '#16c2d9', // Default text color
  },
  selectedButtonText: {
    color: '#fff', 
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 50,
    borderColor: '#bcc1ca',
    borderWidth: 1,
    width: '30%',
    alignItems: 'center',

  },
  selectedButton: {
    backgroundColor: '#1dd75b', // Selected button color
  },
  orderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 500,
    color: '#2dd966',
  },
  seeAll: {
    color: '#ed7d2d',
    fontSize: 22,
    fontWeight: 500,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default DetailsScreen;
