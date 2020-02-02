import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Cards, Typography} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../styles';

const myIcon = <Icon name="list" size={25} color="#900" />;

const Category = (props: any) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.Colors.snow}
      style={Cards.CategoryCard}
      onPress={() => props.navigation.navigate('Items')}>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 5}}>{myIcon}</View>
        <View>
          <Text style={Typography.Title}>Grocery List</Text>
          <Text style={Typography.Body}>3 Tasks</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Category;
