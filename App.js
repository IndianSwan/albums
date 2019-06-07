/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//Import library to help create component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//Create a Component
const App = () => (
  <View>
    <Header headerText={'Awesom Project'} />
    <AlbumList />
  </View>
);

//Export App - This line solved my issue
export default App;

