import React, {useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
import { useEffect } from 'react';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2, // optional
    },
  ],
};

const LineChartCountry = ({currentCountryHistory}) => {
  console.log(currentCountryHistory.timeline.cases);
  // useEffect(() => {
  //   currentCountryHistory.map((country))
  //   alert("mens")
  // }, [])

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          // borderRadius: 16
        }}
      />
    </View>
  );
};

export default LineChartCountry;
