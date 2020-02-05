import React, {useState} from 'react';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import {Cards, Typography} from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../styles';
import Item from './Item';
import DetailedItem from './DetailedItem';

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
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eighth Item',
  },
];

const Items = (props: categoryInterface) => {
  const [filter, setFilter] = useState('All');
  const FILTERS = ['All', 'Incomplete', 'Important', 'Date'];

  const filterItems = FILTERS.map((f: string) =>
    filter === f ? (
      <Text style={Typography.ActiveFilter}>{f}</Text>
    ) : (
      <Text onPress={() => setFilter(f)} style={Typography.PassiveFilter}>
        {f}
      </Text>
    ),
  );
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text style={Typography.Title}>Grocery List</Text>
          <Text style={Typography.Body}>Grocery List</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {filterItems}
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <DetailedItem banana={''} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Items;
