import React, {useState} from 'react';
import {View, Text, TouchableHighlight, FlatList, Alert} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import Item from './Item';
import DetailedItem from './DetailedItem';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export interface categoryInterface {
  banana: string;
}
const check = <Icon name="circle-o" size={35} color={Colors.Colors.one} />;
const checked = (
  <Icon name="check-circle-o" size={35} color={Colors.Colors.one} />
);

const quit = <Icon name="close" size={35} color={Colors.Colors.one} />;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d80',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d81',
    title: 'Eighth Item',
  },
];

const Items = (props: categoryInterface) => {
  const [filter, setFilter] = useState('All');
  const FILTERS = ['All', 'Incomplete', 'Important', 'Date'];
  const [bg, Setbg] = useState('black');
  const [selected, setSelected] = useState('');

  const onSwipeLeft = (gestureState: any) => {
    if (FILTERS.indexOf(filter) > 0)
      setFilter(FILTERS[FILTERS.indexOf(filter) - 1]);
  };
  const onSwipeRight = (gestureState: any) => {
    if (FILTERS.indexOf(filter) < FILTERS.length - 1)
      setFilter(FILTERS[FILTERS.indexOf(filter) + 1]);
  };

  const filterItems = FILTERS.map((f: string) =>
    filter === f ? (
      <Text style={Typography.ActiveFilter}>{f}</Text>
    ) : (
      <Text onPress={() => setFilter(f)} style={Typography.PassiveFilter}>
        {f}
      </Text>
    ),
  );

  const config = {
    velocityThreshold: 0.05,
    directionalOffsetThreshold: 20,
  };
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text style={Typography.Title}>Grocery List</Text>
          <Text style={Typography.Body}>Grocery List</Text>
        </View>
        <GestureRecognizer
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {filterItems}
        </GestureRecognizer>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item banana={item.id} setSelected={setSelected} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Items;
