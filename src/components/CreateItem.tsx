import React, {useState} from 'react';
import {View, Picker, FlatList, TextInput, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateItem = (props: any) => {
  const [language, setLaunguage] = useState('');
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

  const mydate = new Date('2020-06-12T14:42:42');
  const mode = 'date';

  const pickerItems = DATA.map((i: any) => (
    <Picker.Item label={i.id} value={i.id} />
  ));
  return (
    <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
      <Picker
        selectedValue={language}
        onValueChange={(itemValue, itemIndex) => setLaunguage(itemValue)}>
        {pickerItems}
      </Picker>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput value={''} placeholder={'Task Name'} style={{flex: 9}} />
        <Icon
          name="close"
          size={25}
          color={Colors.Colors.three}
          style={{flex: 1, backgroundColor: 'red', alignItems: 'center'}}
        />
      </View>
      <TextInput value={''} placeholder={'Date & Time'} />
      {/* <DateTimePicker
        value={mydate}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={() => console.log()}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <Icon
          name="camera"
          size={25}
          color={Colors.Colors.three}
          style={{alignItems: 'center'}}
        />
        <Icon
          name="photo"
          size={25}
          color={Colors.Colors.three}
          style={{alignItems: 'center'}}
        />
        <Icon
          name="map"
          size={25}
          color={Colors.Colors.three}
          style={{alignItems: 'center'}}
        />
        <Icon
          name="star"
          size={25}
          color={Colors.Colors.three}
          style={{alignItems: 'center'}}
        />
        <Icon
          name="user"
          size={25}
          color={Colors.Colors.three}
          style={{alignItems: 'center'}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'red',
          width: 300,
          height: 75,
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>ADD TASK</Text>
      </View>
    </View>
  );
};

export default CreateItem;
