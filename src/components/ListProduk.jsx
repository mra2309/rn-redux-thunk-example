/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../reducers/cartSlice';

export default function ListProduk() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function getDataApi() {
    setLoading(true);
    Axios.get('https://dummyjson.com/products')
      .then(res => {
        setData(res.data.products);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getDataApi();
  }, []);

  const tambahKeKeranjang = data => {
    console.log('berhasil tambahkan data :', data);
    dispatch(addToCart(data));
  };

  return (
    <View>
      {loading ? (
        <View>
          <Text>Loading Data .. </Text>
        </View>
      ) : (
        <View>
          <View>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({item}) => (
                <View style={style.card}>
                  <Image
                    style={style.imageProduk}
                    source={{uri: item.thumbnail}}
                  />
                  <Text style={{fontWeight: 700}}>{item.title}</Text>
                  <Text style={{fontWeight: 500, color: 'green'}}>
                    $ {item.price}
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      padding: 3,
                    }}>
                    {item.category}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <TouchableHighlight
                      style={{
                        padding: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FF9843',
                        width: '50%',
                      }}>
                      <Text style={{margin: 'auto', color: 'white'}}>
                        Detail
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => {
                        tambahKeKeranjang(item);
                      }}
                      style={{
                        padding: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#86A7FC',
                        width: '50%',
                      }}>
                      <Text style={{margin: 'auto', color: 'white'}}>
                        Keranjang
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  imageProduk: {
    width: '100%',
    height: '100%',
    maxHeight: 200,
  },
  card: {
    width: '49%',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    padding: 5,
    margin: 2,
    height: 310,
  },
});
