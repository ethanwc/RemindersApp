import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Cards, Typography} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface categoryInterface {
  banana: string;
}
const myIcon = <Icon name="headphones" size={35} color="#900" />;

const Item = (props: categoryInterface) => {
  return (
    <View style={Cards.ItemCard}>
      <View style={{margin: 10}}>{myIcon}</View>
      <View>
        <Text style={Typography.Title}>Task Description</Text>
        <Text style={Typography.Body}>3 Tasks</Text>
      </View>
    </View>
  );
};

export default Item;
