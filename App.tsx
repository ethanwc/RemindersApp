import React from 'react';
import Category from './src/containers/Category';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import TaskBar from './src/containers/TaskBar';
import Item from './src/containers/Item';
import Items from './src/containers/Items';
import {Colors} from './src/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <TaskBar banana={'hi'} />
      <View style={{flexDirection: 'row'}}>
        <Category banana={'hi'} />
        <Category banana={'hi'} />
      </View>
      <Item banana={'hi'} />
      <View
        style={{
          backgroundColor: Colors.Colors.blue,
          width: 55,
          height: 55,
          borderRadius: 100,
          position: 'absolute',
          right: 10,
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="plus" size={35} color={Colors.Colors.orange} />
      </View>
    </View>
  );
};

export default App;
