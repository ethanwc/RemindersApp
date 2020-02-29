import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, AsyncStorage, Button, Alert} from 'react-native';
import {Typography, Buttons} from '../../styles';
import Item from './Item';
import uuid from 'uuid-random';
import Create from '../../components/Create';

export interface itemsInterface {}

export interface ItemInterface {
  id: string;
  name: string;
  description: string;
  importance: number;
  checked: boolean;
  starred: boolean;
  eventDate: string;
  createdDate: string;
}

const Items = (props: itemsInterface) => {
  const [filter, setFilter] = useState('All');
  const FILTERS = ['All', 'Incomplete', 'Important', 'Date'];
  const [selected, setSelected] = useState('');
  const [items, setItems] = useState();

  /**
   * Load Initial Items, filter towards specific category.
   */
  useEffect(() => {
    const initialLoad = async () => {
      const initalItems = await AsyncStorage.getItem('Items');
      const parsedItems = initalItems != null ? JSON.parse(initalItems) : null;
      //todo: pass category id via props and filter.
      const filteredItems = undefined;
      setItems(parsedItems);
    };
    initialLoad();
  }, []);

  const filterItems = FILTERS.map((f: string) =>
    filter === f ? (
      <Text style={Typography.ActiveFilter}>{f}</Text>
    ) : (
      <Text onPress={() => setFilter(f)} style={Typography.PassiveFilter}>
        {f}
      </Text>
    ),
  );

  const tempAdd = async () => {
    const newItem = {
      id: uuid(),
      name: 'Walk Dog',
      description: 'n/a',
      importance: 1,
      checked: true,
      starred: true,
      eventDate: new Date().getDate().toString(),
      createdDate: new Date().getDate().toString(),
    };

    const updatedItems = items == null ? [newItem] : [...items, newItem];

    await AsyncStorage.setItem('Items', JSON.stringify(updatedItems));

    setItems(updatedItems);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {filterItems}
      </View>
      <Button title={'test add'} onPress={() => tempAdd()} />

      <FlatList
        data={items}
        renderItem={({item}) => (
          <Item item={item} selected={selected} setSelected={setSelected} />
        )}
        keyExtractor={item => item.id}
      />
      <Create navigation={props.navigation} />
    </View>
  );
};

export default Items;
