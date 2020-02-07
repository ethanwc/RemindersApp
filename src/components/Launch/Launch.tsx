import React, {useState} from 'react';
import TaskBar from '../../containers/TaskBar';
import {View, TouchableHighlight, Text, Button} from 'react-native';
import Category from '../../containers/Category/Category';
import {FlatList} from 'react-native-gesture-handler';
import Create from '../Create';
import Modal from 'react-native-modal';

const Launch = (props: any) => {
  const [temp, setTemp] = useState(false);
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
    <View style={{flex: 1}}>
      <View style={{paddingLeft: 40, flexDirection: 'row'}}>
        <Text style={{fontSize: 40}}>Task </Text>
        <Text style={{fontSize: 40, fontFamily: 'bold', color: 'blue'}}>
          Manager
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 40}}>
        <Text style={{fontFamily: 'bold', color: 'black'}}>Sunday, </Text>
        <Text>12th March</Text>
      </View>
      <TaskBar />
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
      <Create toggleCreate={setTemp} navigation={props.navigation} />

      <Modal isVisible={temp}>
        <View style={{flex: 1}}>
          <Text>I am the modal content!</Text>
          <Button onPress={() => setTemp(false)} title={'Toggle'} />
        </View>
      </Modal>
    </View>
  );
};

export default Launch;
