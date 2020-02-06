import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import DatePicker from 'react-native-datepicker';
import GestureRecognizer from 'react-native-swipe-gestures';
import SwipeGesture from './swipe-gesture'


export interface categoryInterface {
  banana: string;
  setSelected: Function;
}
const check = <Icon name="circle-o" size={35} color={Colors.Colors.one} />;
const checked = (
  <Icon name="check-circle-o" size={35} color={Colors.Colors.one} />
);

const quit = <Icon name="close" size={35} color={Colors.Colors.one} />;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Item = (props: categoryInterface) => {
  const [expanded, setExpanded] = useState(false);

  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <GestureRecognizer
      onSwipeLeft={() => console.log('swipe')}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableHighlight onPress={() => changeLayout()}>
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
          <View style={{height: expanded ? null : 0, overflow: 'hidden'}}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </GestureRecognizer>
  );
};

export default Item;
