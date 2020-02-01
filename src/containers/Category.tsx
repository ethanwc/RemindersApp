import React from 'react';
import {View, Text} from 'react-native';
import {Cards, Typography} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface categoryInterface {
  banana: string;
}
const myIcon = <Icon name="rocket" size={100} color="#900" />;

const Category = (props: categoryInterface) => {
  return (
    <View style={Cards.CategoryCard}>
      {myIcon}
      <View style={{flexDirection: 'row'}}>
        <Text style={Typography.Title}>Title</Text>
        <Text style={Typography.Body}>3 items</Text>
      </View>
    </View>
  );
};

export default Category;
