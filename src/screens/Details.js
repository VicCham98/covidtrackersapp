import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import CardStat from '../components/CardStat';
import PickerCountry from '../components/PickerCountry';

const Details = ({navigation, route}) => {
  return (
    <View>
      <Header navigation={navigation} route={route} />
      <View style={styles.picker}>
        <PickerCountry />
      </View>
      <View style={styles.card}>
        <View style={{marginVertical: '3%'}}>
          <CardStat />
        </View>
        <View style={{marginVertical: '3%'}}>
          <CardStat />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    marginVertical: '5%',
    alignItems: 'center',
  },
  picker: {
    marginTop: '5%',
    alignItems: 'center',
  },
});

export default Details;
