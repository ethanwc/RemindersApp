import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Cards, Typography} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../styles';
import DatePicker from 'react-native-datepicker';

export interface categoryInterface {
  banana: string;
}
const check = <Icon name="circle-o" size={35} color={Colors.Colors.blue} />;
const checked = (
  <Icon name="check-circle-o" size={35} color={Colors.Colors.blue} />
);

const quit = <Icon name="close" size={35} color={Colors.Colors.dark} />;

const Item = (props: categoryInterface) => {
  return (
    <View style={Cards.ItemCard}>
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 5}}>{check}</View>
        <View style={{margin: 5, marginLeft: 0}}>{checked}</View>
        <View>
          <Text style={Typography.Title}>Buy food at the store</Text>
          <Text style={Typography.Body}>Im Hungry</Text>
        </View>
      </View>
      <View style={{margin: 5}}>{quit}</View>
    </View>
  );
};

export default Item;
