import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';

const CardStat = () => {
  const data = {
    id: 1,
    pais: 'Peru',
    confirmado: '3152000',
    recuperado: '151156',
    muertes: '61611',
  };

  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Title>Casos de COVID-19 en el mundo {data.pais}</Title>
        <View style={styles.stats}>
          <View>
            <Title style={{color: 'red'}}>{data.confirmado}</Title>
            <Paragraph style={{color: 'red'}}>Confirmados</Paragraph>
          </View>
          <View>
            <Title style={{color: 'green'}}>{data.recuperado}</Title>
            <Paragraph style={{color: 'green'}}>Recuperados</Paragraph>
          </View>
        </View>
        <View style={styles.stats}>
          <View>
            <Title style={{color: 'gray'}}>{data.muertes}</Title>
            <Paragraph style={{color: 'gray'}}>Muertes</Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '85%',
    height: 'auto',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CardStat;
