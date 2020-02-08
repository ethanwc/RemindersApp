import React from 'react';
import {View} from 'react-native';
import {Colors} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

export interface iconBar {}

const IconBar = (props: iconBar) => {
  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  // Launch Camera:
  const launchCamera = () => {
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

  const launchImageLibrary = () => {
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
    });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
      }}>
      <Icon
        name="camera"
        size={25}
        color={Colors.Colors.three}
        onPress={() => launchCamera()}
      />
      <Icon
        name="photo"
        size={25}
        color={Colors.Colors.three}
        onPress={() => launchImageLibrary()}
      />
      <Icon name="map" size={25} color={Colors.Colors.three} />
      <Icon name="star" size={25} color={Colors.Colors.three} />
    </View>
  );
};

export default IconBar;
