/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {getDataUser} from '../reducers/cardUser';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const loading = useSelector(state => state.user.loading);

  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading .... </Text>
      ) : (
        <View>
          <Text>
            Nama : {user[0]?.firstName} {user[0]?.firstName}
          </Text>
          <Text>Umur : {user[0]?.age}</Text>
          <Text>Alamat : {user[0]?.address.address}</Text>
        </View>
      )}
    </View>
  );
}
