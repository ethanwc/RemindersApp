import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

const HeaderInfo = () => {
  return (
    <View>
      <View style={{paddingLeft: 40, flexDirection: 'row'}}>
        <Text style={{fontSize: 40}}>Task </Text>
        <Text style={{fontSize: 40, fontFamily: 'bold', color: 'blue'}}>
          Manager
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 40}}>
        <Text style={{fontFamily: 'bold', color: 'black'}}>Sunday, </Text>
        <Text>12th March</Text>
      </View>
    </View>
  );
};

export default HeaderInfo;
