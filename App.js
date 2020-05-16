/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CarouselComponent from './components/Carousel'


const App = () => {
  return (
    <>
      <CarouselComponent />
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  }
});

export default App;
