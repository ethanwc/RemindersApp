import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Typography} from '../../styles';
import Item from './Item';

export interface itemsInterface {}

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

const Items = (props: itemsInterface) => {
  const [filter, setFilter] = useState('All');
  const FILTERS = ['All', 'Incomplete', 'Important', 'Date'];
  const [selected, setSelected] = useState('');

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {filterItems}
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item id={item.id} selected={selected} setSelected={setSelected} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Items;
