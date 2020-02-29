import React from 'react';
import {View} from 'react-native';
import Category from '../../containers/Category/Category';
import {FlatList} from 'react-native-gesture-handler';
import {List} from '../Launch/Launch';

export interface categoriesInterface {
  navigation: any;
  categories: List[];
}

const Categories = (props: categoriesInterface) => {

  return (
    <FlatList
      data={props.categories}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row'}}>
          <Category navigation={props.navigation} category={item} />
          <Category navigation={props.navigation} category={item} />
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Categories;
