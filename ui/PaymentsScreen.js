import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { data: initialData } = route.params;
  const [data, setData] = useState(initialData.map(item => ({ ...item, quantity: item.quantity || 0 })));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [data]);

  const increaseQuantity = (index) => {
    let newData = [...data];
    newData[index].quantity += 1;
    setData(newData);
  };

  const decreaseQuantity = (index) => {
    let newData = [...data];
    if (newData[index].quantity > 0) {
      newData[index].quantity -= 1;
    }
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
        <Image source={require('../assets/images/Image183.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>My Basket</Text>
      <ScrollView>
        {data.map((item, index) => (
          <View key={item.key} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
              <Text style={{ color: '#1fd75c', fontSize: 18, fontWeight: '500' }}>${item.price}</Text>
              <Text>{item.name}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Image source={require('../assets/images/Image180.png')} style={styles.icon} />
              </View>
            </View>
            <View style={{marginLeft: '30%', flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                <Image source={require('../assets/images/Image176.png')} style={styles.iconLevel} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(index)}>
                <Image source={require('../assets/images/Image175.png')} style={styles.iconLevel} />
              </TouchableOpacity>
            </View>
           
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ fontSize: 18 }}>Total: </Text>
          <Text style={styles.totalText}>${totalPrice.toFixed(2)}</Text>
        </View>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Products')}
          disabled={totalPrice === 0
        } style={styles.checkoutButton}>
          <Text style={styles.buttonText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1fd75c',
  },
  item: {
    flexDirection: 'row',
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
    width: 90,
    height: 90,
    borderRadius: 5,
    marginRight: 5,
  },
  icon: {
    width: 15,
    height: 15,
  },
  iconLevel: {
    width: 20,
    height: 20,
  },
  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#1fd75c',
    padding: 10,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default PaymentScreen;
