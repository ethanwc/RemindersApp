import React from 'react';
import {View} from 'react-native';
import Category from '../../containers/Category/Category';
import {FlatList} from 'react-native-gesture-handler';

export interface categoriesInterface {
  navigation: any;
}

const Categories = (props: categoriesInterface) => {
  const DATA = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
    {
      id: '10',
    },
    {
      id: '11',
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row'}}>
          <Category navigation={props.navigation} banana={'hi'} />
          <Category navigation={props.navigation} banana={'hi'} />
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Categories;
