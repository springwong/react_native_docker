import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Entry';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({route, navigation}: Props) {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;
  const buttonStyle = {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{usingHermes ? 'Hermes Enabled' : 'Hermes Disabled'}</Text>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          navigation.navigate('Default');
        }}>
        <Text>To Default Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          navigation.navigate('Detail', {
            title: 'Detail Screen',
          });
        }}>
        <Text>To Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
