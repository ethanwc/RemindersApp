import React from 'react';
import {Cards, Colors} from '../styles';
import {View, TouchableHighlight, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface createButton {
  toggleCreate: Function;
}

const Create = (props: any) => {
  return (
    <TouchableHighlight
      onPress={() => props.navigation.navigate("CreateItem")}
      style={Cards.CreateCard}>
      <Icon name="plus" size={30} color={Colors.Colors.one} />
    </TouchableHighlight>
  );
};

export default Create;