import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import {List} from '../../components/Launch/Launch';

const myIcon = <Icon name="map" size={25} color={Colors.Colors.three} />;

export interface categoryInterface {
  navigation: any;
  category: List;
}

const Category = (props: categoryInterface) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.Colors.three}
      style={Cards.CategoryCard}
      onPress={() => props.navigation.navigate('Items')}>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 5}}>{myIcon}</View>
        <View>
          <Text style={Typography.Title}>{props.category.name}</Text>
          <Text style={Typography.Body}>{props.category.description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Category;
