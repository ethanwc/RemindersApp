import React, {useState} from 'react';
import {
  View,
  Picker,
  FlatList,
  TextInput,
  Button,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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

  const getLoc = () => {
    Geolocation.getCurrentPosition(info => Alert.alert(JSON.stringify(info)));
  };

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  // Launch Camera:
  const lll = () => {
    ImagePicker.launchCamera(options, response => {
      // Same code as in above section!

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
      }
    });
  };

  const ll = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
      }
      // Same code as in above section!
    });
  };

  const pickerItems = DATA.map((i: any) => (
    <Picker.Item label={i.id} value={i.id} />
  ));

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <Button title="loc" onPress={() => getLoc()} />
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
            style={{backgroundColor: 'red', alignItems: 'center'}}
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
            onPress={() => lll()}
          />
          <Icon
            name="photo"
            size={25}
            color={Colors.Colors.three}
            style={{alignItems: 'center'}}
            onPress={() => ll()}
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
    </View>
  );
};

export default CreateItem;
