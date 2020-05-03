import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Inicio">
          <Drawer.Screen name="Inicio" component={Home} />
          <Drawer.Screen name="Detalles" component={Details} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
