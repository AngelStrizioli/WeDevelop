import React from 'react';
import {Text} from 'react-native';
import makeStyles from './Tasks.styles';

const Tasks = props => {
  const styles = makeStyles();
  console.log(props);
  return <Text style={styles.taskText}>{props?.item?.text} </Text>;
};

export default Tasks;
