import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { ScreenName } from '../../route/ScreenName';

const searchNav = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        console.log('item = ', item);
        navigation.navigate(ScreenName, {item});
      }}>
      {/* <Image style={styles.image} source={item?.image} resizeMode="cover" /> */}
      <View>
        <Text style={styles.Title}>{item?.title}</Text>
        <Text style={styles.Type}>{item?.type}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      height: 70,
      // backgroundColor: 'red',
      margin: '2%',
    },
    image: {
      width: '20%',
      height: '100%',
      borderBottomLeftRadius: 2,
      borderTopLeftRadius: 2,
    },
    Title: {
      margin: '2%',
      marginLeft: '5%',
    },
    Type: {
      color: 'gray',
      margin: '2%',
      marginLeft: '5%',
    },
  });
  
  export default searchNav;
