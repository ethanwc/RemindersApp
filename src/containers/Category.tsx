import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Cards, Typography} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface categoryInterface {
  banana: string;
}
const myIcon = <Icon name="wifi" size={25} color="#900" />;

const Category = (props: categoryInterface) => {
  return (
    <View style={Cards.CategoryCard}>
      <View style={{margin: 5}}>{myIcon}</View>
      <View>
        <Text style={Typography.Title}>Grocery List</Text>
        <Text style={Typography.Body}>3 Tasks</Text>
      </View>
    </View>
  );
};

export default Category;
