import React from 'react';
import {View} from 'react-native';
import Create from '../Create';
import TaskBar from '../../containers/TaskBar';
import HeaderInfo from '../../containers/HeaderInfo';
import Categories from '../Category/Categories';

const Launch = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <HeaderInfo />
      <TaskBar />
      <Categories navigation={props.navigation}/>
      <Create navigation={props.navigation} />
    </View>
  );
};

export default Launch;
