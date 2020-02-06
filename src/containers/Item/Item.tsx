import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation,
  Platform,
  UIManager,
  Alert,
} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import DatePicker from 'react-native-datepicker';
import GestureRecognizer from 'react-native-swipe-gestures';
import SwipeGesture from './swipe-gesture';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface categoryInterface {
  id: string;
  selected: string;
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
    //off to on
    if (props.selected === props.id) {
      props.setSelected('');
    } else props.setSelected(props.id);
    //on to off
    setExpanded(!expanded);
  };

  const isExpanded = props.id === props.selected;

  return (
    <GestureRecognizer onSwipeLeft={() => console.log('swipe')}>
      <TouchableHighlight onPress={() => changeLayout()}>
        <View>
          <View style={isExpanded ? Cards.ItemCard : Cards.DetailedItemCard}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginHorizontal: 10}}>{check}</View>
              {/* <View style={{margin: 5, marginLeft: 0}}>{checked}</View> */}
              <View>
                <Text style={Typography.Title}>Buy food at the store</Text>
                <Text style={Typography.Body}>Im Hungry</Text>
              </View>
            </View>
            {/* <View style={{margin: 5}}>{quit}</View> */}
          </View>
          <View
            style={{
              height: isExpanded ? null : 0,
              overflow: 'hidden',
              paddingLeft: 55,
            }}>
            <View style={Cards.ItemCardTime}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 10,
                }}>
                <Icon
                  name="calendar"
                  onPress={() => Alert.alert('hi')}
                  size={25}
                  color={Colors.Colors.two}
                  style={{alignItems: 'center', marginRight: 10}}
                />
                <Text>12th March</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 10,
                }}>
                <Icon
                  name="clock-o"
                  size={25}
                  color={Colors.Colors.two}
                  style={{alignItems: 'center', marginRight: 10}}
                />
                <Text>10:30 am</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                paddingVertical: 10,
                paddingRight: 10,
              }}>
              <Icon
                name="pencil"
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
                name="paperclip"
                size={25}
                color={Colors.Colors.three}
                style={{alignItems: 'center'}}
              />
              <Icon
                name="share"
                size={25}
                color={Colors.Colors.three}
                style={{
                  alignItems: 'center',

                  paddingRight: 5,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </GestureRecognizer>
  );
};

export default Item;
