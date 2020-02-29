import React from 'react';
import {View} from 'react-native';
import Create from '../Create';
import TaskBar from '../../containers/TaskBar';
import HeaderInfo from '../../containers/HeaderInfo';
import Categories from '../Category/Categories';

export interface List {
  id: string;
  name: string;
  description: string;
}


const Launch = (props: any) => {
  const CATEGORIES: List[] = [
    {
      id: 'asdf',
      name: 'pizzatime',
      description: 'i like piza',
    },
    {
      id: 'asdf',
      name: 'party time',
      description: 'i like party',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <HeaderInfo />
      <TaskBar />
      <Categories navigation={props.navigation} categories={CATEGORIES} />
      <Create navigation={props.navigation} />
    </View>
  );
};

export default Launch;
