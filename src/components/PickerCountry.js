import React, {useState, Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const PickerCountry = () => {
  const [language, setLanguage] = useState('java');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={language}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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
