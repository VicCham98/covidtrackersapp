import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';

const PickerCountry = ({data, language, setLanguage}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={language}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
        {data.map((country, index) => {
          return (
            <Picker.Item
              key={index}
              label={country.country}
              value={country.countryInfo.iso2}/>
            )
          })
        }
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '85%',
    paddingLeft: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
});

export default PickerCountry;
