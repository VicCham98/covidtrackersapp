import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import CardStat from '../components/CardStat';

const Home = ({navigation, route}) => {
  return (
    <View>
      <Header navigation={navigation} route={route} />
      <View style={styles.card}>
        <CardStat />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
  },
});

export default Home;
