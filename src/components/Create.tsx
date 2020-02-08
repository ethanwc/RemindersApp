import React from 'react';
import {Buttons, Colors} from '../styles';
import {TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface createButton {
  navigation: any;
}

const Create = (props: any) => {
  return (
    <TouchableHighlight
      onPress={() => props.navigation.navigate('CreateItem')}
      style={Buttons.CreateFab}>
      <Icon name="plus" size={30} color={Colors.Colors.three} />
    </TouchableHighlight>
  );
};

export default Create;
