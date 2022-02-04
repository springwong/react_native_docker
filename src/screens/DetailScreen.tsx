import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Entry';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({route, navigation}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.params.title}</Text>
    </View>
  );
}
