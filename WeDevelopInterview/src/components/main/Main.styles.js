import {StyleSheet} from 'react-native';

const styles = () =>
  StyleSheet.create({
    scrollViewContainer: {
      flexGrow: 1,
    },
    container: {
      backgroundColor: '#ECEFF1',
      paddingTop: 20,
      paddingHorizontal: 20,
      height: '100%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    tasks: {
      marginTop: 25,
      paddingBottom: 100,
    },
    writeContainer: {
      flex: 1,
      flexGrow: 1,
      zIndex: 1,
      bottom: 40,
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 20,
    },
    taskInput: {
      paddingVertical: 15,
      width: 300,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      borderColor: '#FBE9E7',
      borderWidth: 1,
    },
    addTaskIcon: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 30,
    },
    addTask: {},
    taskStyles: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 15,
      borderColor: '#FBE9E7',
      borderWidth: 1,
    },
    iconRight: {
      flexWrap: 'wrap',
      marginLeft: 15,
      width: '75%',
      height: 'auto',
    },
    iconCheck: {
      marginLeft: 25,
    },
    orderItems: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderColor: '#FBE9E7',
      borderWidth: 1,
      borderRadius: 15,
      width: 'auto',
      backgroundColor: '#FFF',
      height: 40,
      marginTop: 10,
      paddingHorizontal: 10,
    },
    eyeIcon: {
      marginRight: 10,
    },
    textOrderItems: {
      marginRight: 15,
    },
    upperCheckIcon: {
      marginLeft: 10,
    },
    cointainerUpperItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  });
export default styles;
