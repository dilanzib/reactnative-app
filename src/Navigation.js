import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ImageList from './ImageList';
import ImageDetail from './ImageDetail';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageList" component={ImageList} />
      <Stack.Screen name="ImageDetail" component={ImageDetail} />
    </Stack.Navigator>
  );
};

export default Navigation;
