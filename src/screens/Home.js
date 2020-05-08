import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import CardStat from '../components/CardStat';
import {DataContext} from '../contexts/DataContext';
import LineChartCountry from '../components/LineChartCountry';

const Home = ({navigation, route}) => {
  const {currentCountry, currentCountryHistory} = useContext(DataContext);

  if (
    typeof currentCountry !== 'undefined' &&
    typeof currentCountryHistory !== 'undefined'
  ) {
    return (
      <View>
        <Header navigation={navigation} route={route} />
        <View style={styles.card}>
          <View style={{marginVertical: '3%'}}>
            <CardStat
              title={`Casos de COVID-19 en ${currentCountry.country}`}
              name1={'Confirmados'}
              name2={'Recuperados'}
              name3={'Muertes'}
              name4={'Activos'}
              confirmed={currentCountry.cases}
              recovered={currentCountry.recovered}
              deaths={currentCountry.deaths}
              active={currentCountry.active}
            />
          </View>
        </View>
        <LineChartCountry currentCountryHistory={currentCountryHistory} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    marginVertical: '5%',
  },
});

export default Home;
