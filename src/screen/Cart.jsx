/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Cart() {
  const isikeranjang = useSelector(state => state.cart.data);
  console.log(isikeranjang);
  return (
    <View>
      <FlatList
        data={isikeranjang}
        renderItem={({item}) => (
          <View style={style.card}>
            <Image style={style.imageProduk} source={{uri: item.thumbnail}} />
            <View>
              <Text>{item.title}</Text>
              <Text>{item.brand}</Text>
              <Text>{item.category}</Text>
              <Text>Harga : {item.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  imageProduk: {
    width: 75,
    height: 75,
  },
});
