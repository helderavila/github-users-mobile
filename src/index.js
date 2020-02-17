import React from 'react';
import {Text} from 'react-native';

import './config/ReactotronConfig';

export default function App() {
  console.tron.warn('Hello World');
  return <Text>Olá Mundo</Text>;
}
