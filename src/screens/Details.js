import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../components/Header';
import CardStat from '../components/CardStat';
import PickerCountry from '../components/PickerCountry';
import GetCountries from './../hooks/GetCountries';
import {Avatar} from 'react-native-paper';

const Details = ({navigation, route}) => {
  const [language, setLanguage] = useState('PE');
  const {data, loading} = GetCountries('countries');
  const currentCountry = data.find(
    element => element.countryInfo.iso2 === language,
  );

  if (loading) {
    return (
      <View style={styles.progress}>
        <ActivityIndicator size="large" color="#0033ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <View style={styles.picker}>
        <PickerCountry
          data={data}
          language={language}
          setLanguage={setLanguage}
        />
      </View>
      <ScrollView>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Avatar.Image size={150} source={{uri: currentCountry.countryInfo.flag}} />
        </View>
        <View style={styles.card}>
          <View style={{marginVertical: '3%'}}>
            <CardStat
              title={`Casos de COVID-19 en ${currentCountry.country}:`}
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
          <View style={{marginVertical: '3%'}}>
            <CardStat
              title={'Datos de hoy:'}
              name1={'Casos'}
              name2={'Muertes'}
              name3={'critico'}
              confirmed={currentCountry.todayCases}
              recovered={currentCountry.todayDeaths}
              deaths={currentCountry.critical}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'column',
    marginVertical: '5%',
  },
  picker: {
    marginTop: '5%',
    alignItems: 'center',
  },
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Details;
