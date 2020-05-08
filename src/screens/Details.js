import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import CardStat from '../components/CardStat';
import PickerCountry from '../components/PickerCountry';
import {Avatar} from 'react-native-paper';
import {DataContext} from '../contexts/DataContext';

const Details = ({navigation, route}) => {
  const {currentCountry, data, country, handleCountry} = useContext(DataContext);

  if (typeof currentCountry !== 'undefined'){
    return (
      <View style={styles.container}>
        <Header navigation={navigation} route={route} />
        <View style={styles.picker}>
          <PickerCountry
            data={data}
            country={country}
            handleCountry={handleCountry}
          />
        </View>
        <ScrollView>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Avatar.Image
              size={150}
              source={{uri: currentCountry.countryInfo.flag}}
            />
          </View>
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
  } else {
    return null;
  }
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
