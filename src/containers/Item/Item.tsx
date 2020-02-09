import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  LayoutAnimation,
  Platform,
  UIManager,
  Alert,
  Share,
  Vibration,
} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import {ItemInterface} from './Items';

export interface itemInterface {
  item: ItemInterface;
  selected: string;
  setSelected: Function;
}
const checked = (
  <Icon name="check-circle-o" size={35} color={Colors.Colors.one} />
);

const quit = <Icon name="close" size={35} color={Colors.Colors.one} />;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Item = (props: itemInterface) => {
  const [expanded, setExpanded] = useState(false);
  const [complete, setComplete] = useState(props.item.checked);
  const [editing, setEditing] = useState(false);
  const [star, setStar] = useState(props.item.starred);

  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //off to on
    if (props.selected === props.item.id) {
      props.setSelected('');
    } else props.setSelected(props.item.id);
    //on to off
    if (!editing) setExpanded(!expanded);
  };

  const isExpanded = props.item.id === props.selected;

  const toggleCheck = () => {
    Vibration.vibrate(20);
    setComplete(!complete);
  };

  const check = (
    <Icon
      name="circle-o"
      size={45}
      color={Colors.Colors.one}
      onPress={() => toggleCheck()}
    />
  );

  const checked = (
    <Icon
      name="check-circle-o"
      size={45}
      color={Colors.Colors.one}
      onPress={() => toggleCheck()}
    />
  );

  const checkView = complete ? checked : check;

  return (
    <GestureRecognizer onSwipeLeft={() => console.log('swipe')}>
      <TouchableHighlight onPress={() => changeLayout()}>
        <View>
          <View style={isExpanded ? Cards.ItemCard : Cards.DetailedItemCard}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginHorizontal: 10}}>{checkView}</View>
              {/* <View style={{margin: 5, marginLeft: 0}}>{checked}</View> */}
              <View>
                <Text style={Typography.Title}>{props.item.name}</Text>
                <Text style={Typography.Body}>{props.item.description}</Text>
              </View>
            </View>
            {/* <View style={{margin: 5}}>{quit}</View> */}
          </View>
          <View
            style={{
              height: isExpanded ? null : 0,
              overflow: 'hidden',
              paddingLeft: 65,
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
                <Text>{props.item.eventDate}</Text>
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
                onPress={() => Alert.alert('editme')}
              />
              <Icon
                name="star"
                size={25}
                color={star ? 'gold' : Colors.Colors.three}
                onPress={() => setStar(!star)}
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
                onPress={() =>
                  Share.share(
                    {
                      message:
                        "BAM: we're helping your business with awesome React Native apps",
                      url: 'http://bam.tech',
                      title: 'Wow, did you see that?',
                    },
                    {
                      // Android only:
                      dialogTitle: 'Share BAM goodness',
                      // iOS only:
                      excludedActivityTypes: [
                        'com.apple.UIKit.activity.PostToTwitter',
                      ],
                    },
                  )
                }
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
