import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';

const CardStat = ({
  title,
  confirmed,
  recovered,
  deaths,
  active,
  name1,
  name2,
  name3,
  name4,
}) => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Title>{title}</Title>
        <View style={styles.stats}>
          <View style={{margin: 5, alignItems: 'center'}}>
            <Title style={{color: 'red'}}>{confirmed}</Title>
            <Paragraph style={{color: 'red'}}>{name1}</Paragraph>
          </View>
          <View style={{margin: 5, alignItems: 'center'}}>
            <Title style={{color: 'green'}}>{recovered}</Title>
            <Paragraph style={{color: 'green'}}>{name2}</Paragraph>
          </View>
        </View>
        <View style={styles.stats}>
          <View style={{margin: 5, alignItems: 'center'}}>
            <Title style={{color: 'gray'}}>{deaths}</Title>
            <Paragraph style={{color: 'gray'}}>{name3}</Paragraph>
          </View>
          <View style={{margin: 5, alignItems: 'center'}}>
            <Title style={{color: 'blue'}}>{active}</Title>
            <Paragraph style={{color: 'blue'}}>{name4}</Paragraph>
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
    alignSelf: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CardStat;
