import React from 'react';
import {View, Text} from 'react-native';
import {Cards, Typography} from '../styles';

const TaskBar = (props: any) => {
  return (
    <View style={Cards.TaskCard}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: 10,
        }}>
        <Text style={Typography.TaskNumber}>44</Text>
        <Text style={{marginLeft: 10}}>Created Tasks</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: 10,
        }}>
        <Text style={Typography.TaskNumber}>333</Text>
        <Text style={{marginLeft: 10}}>Completed Tasks</Text>
      </View>
    </View>
  );
};

export default TaskBar;
