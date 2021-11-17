import React from 'react';
import {StyleSheet} from 'react-native';
import Main from './src/components/main/Main';

const App = () => {
  return <Main style={styles.sectionContainer} />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
