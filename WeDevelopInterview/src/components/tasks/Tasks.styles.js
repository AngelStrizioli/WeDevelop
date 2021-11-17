import {StyleSheet} from 'react-native';

const styles = () =>
  StyleSheet.create({
    iconLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 15,
    },
    taskText: {
      maxWidth: '90%',
      fontSize: 16,
      fontWeight: 'normal',
      color: 'black',
    },
    iconRight: {},
  });
export default styles;
