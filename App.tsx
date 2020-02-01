import React from 'react';
import Category from './src/containers/Category';
import {View, Text, TouchableHighlight} from 'react-native';
import TaskBar from './src/containers/TaskBar';
import Item from './src/containers/Item';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>My Tasks</Text>
      <TaskBar banana={'hi'} />
      <View style={{flexDirection: 'row'}}>
        <Category banana={'hi'} />
        <Category banana={'hi'} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Category banana={'hi'} />

        <Category banana={'hi'} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Category banana={'hi'} />
        <Category banana={'hi'} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Category banana={'hi'} />
        <Category banana={'hi'} />
      </View>
      <Item banana={'hi'} />
    </View>
  );
};

export default App;
