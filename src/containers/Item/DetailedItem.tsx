import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import DatePicker from 'react-native-datepicker';

export interface categoryInterface {
  banana: string;
}
const check = <Icon name="circle-o" size={35} color={Colors.Colors.one} />;
const checked = (
  <Icon name="check-circle-o" size={35} color={Colors.Colors.one} />
);

const quit = <Icon name="close" size={35} color={Colors.Colors.one} />;

const DetailedItem = (props: categoryInterface) => {
  return (
    <View style={{flex: 1}}>
      <View style={Cards.DetailedItemCard}>
        <View style={{flexDirection: 'row'}}>
          {/* <View style={{margin: 5}}>{check}</View> */}
          <View style={{margin: 5, marginLeft: 0}}>{checked}</View>
          <View>
            <Text style={Typography.Title}>Buy food at the store</Text>
            <Text style={Typography.Body}>Im Hungry</Text>
          </View>
        </View>
        <View style={{margin: 5}}>{quit}</View>
      </View>

      <View style={Cards.DetailedItemCard}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="calendar"
            size={25}
            color={Colors.Colors.three}
            style={{alignItems: 'center', marginRight: 10}}
          />
          <Text>12th March</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="clock-o"
            size={25}
            color={Colors.Colors.three}
            style={{alignItems: 'center', marginRight: 10}}
          />
          <Text>10:30 am</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomWidth: 1,
          padding: 10,
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
          style={{alignItems: 'center'}}
        />
      </View>
    </View>
  );
};

export default DetailedItem;
