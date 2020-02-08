import React, {useState} from 'react';
import {
  View,
  Picker,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Buttons, Typography} from '../styles';
import IconBar from '../containers/IconBar';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateItem = (props: any) => {
  const [language, setLaunguage] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
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

  const pickerItems = DATA.map((i: any) => (
    <Picker.Item label={i.id} value={i.id} />
  ));



  const mydate = new Date('2020-06-12T14:42:42');
  const mode = 'date';

  const dayTimePicker = showDatePicker ? (
    <DateTimePicker
      value={mydate}
      mode={mode}
      is24Hour={true}
      display="spinner"
      onChange={() => setShowDatePicker(false)}
    />
  ) : null;

  return (
    <View style={{paddingHorizontal: 20}}>
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
            style={{alignItems: 'center'}}
          />
        </View>

        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput placeholder={'Date & Time'} editable={false} />
        </TouchableOpacity>
        {dayTimePicker}

        <IconBar />
        <View style={Buttons.CreateTask}>
          <Text style={Typography.TaskText}>ADD TASK</Text>
        </View>
    </View>
  );
};

export default CreateItem;
