import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = ({navigation, route}) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

export default Header;
