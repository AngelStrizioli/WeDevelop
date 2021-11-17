import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import makeStyles from './Main.styles';
import Tasks from '../tasks/Tasks';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  const styles = makeStyles();
  const [taskText, setTaskText] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [editTask, setEditTask] = useState();
  const [editFlag, setEditFlag] = useState(0);
  const [id, setId] = useState(0);
  const [checkTask, setCheckTask] = useState(false);
  const [taskToDo, setTaskToDo] = useState([]);
  const [showTaskToDo, setShowTaskToDo] = useState(false);
  console.log(taskToDo);

  const handleAddTask = () => {
    if (taskText) {
      editTask
        ? taskItems.splice(editFlag, 0, {
            id: editFlag,
            text: taskText,
            done: false,
          })
        : setTaskItems([...taskItems, {id: id, text: taskText, done: false}]);
      editTask ? null : setId(id + 1);
      setTaskText(null);
      Keyboard.dismiss();
      setEditTask(false);
    }
  };

  const deleteTask = index => {
    console.log(index);
    let copyTasks = [...taskItems];
    copyTasks.splice(index, 1);
    setTaskItems(copyTasks);
  };

  const handleEditTask = (itemId, index) => {
    let taskToEdit = taskItems.find(task => task.id === itemId);
    setEditTask(true);
    setEditFlag(itemId);
    setTaskText(taskToEdit.text);
    taskItems.splice(index, 1);
  };

  const handleCheckTask = (itemId, index) => {
    let taskToCheck = taskItems.find(task => task.id === itemId);
    taskItems.splice(index, 1);
    taskItems.splice(itemId, 0, {
      id: itemId,
      text: taskToCheck.text,
      done: !taskToCheck.done,
    });
    setCheckTask(!checkTask);
  };

  const handleOrderByToDo = () => {
    let copyTasks = taskItems.filter(task => !task.done);
    setTaskToDo(copyTasks);
    setShowTaskToDo(!showTaskToDo);
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollViewContainer]}
      keyboardShouldPersistTaps={'handled'}
      testID="main-container">
      <View style={styles.container}>
        <TextInput
          style={styles.title}
          placeholder={'Place a name for the list'}
          testID="main-title"
        />
        {!showTaskToDo ? (
          <View style={styles.cointainerUpperItems} testID="main-upperItems-1">
            <TouchableOpacity
              onPress={() => handleOrderByToDo()}
              testID="main-upperButton-1">
              <View style={styles.orderItems}>
                <Text style={styles.textOrderItems} testID="main-upperText-1">
                  Show Todo items
                </Text>
                <Icon
                  style={styles.eyeIcon}
                  name={'eye-slash'}
                  size={24}
                  testID="main-upperEyeIcon-1"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.orderItems}>
              <Text
                style={styles.textOrderItems}
                testID="main-upperCountItemText-1">
                All items {taskItems.length}
              </Text>
              <Icon
                style={styles.upperCheckIcon}
                name={'check'}
                size={24}
                testID="main-upperCheckIcon-1"
              />
            </View>
          </View>
        ) : (
          <View style={styles.cointainerUpperItems} testID="main-upperItems-2">
            <TouchableOpacity
              onPress={() => handleOrderByToDo()}
              testID="main-upperButton-2">
              <View style={styles.orderItems}>
                <Text style={styles.textOrderItems} testID="main-upperText-2">
                  Show all items
                </Text>
                <Icon
                  style={styles.eyeIcon}
                  name={'eye'}
                  size={24}
                  testID="main-upperEyeIcon-2"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.orderItems}>
              <Text
                style={styles.textOrderItems}
                testID="main-upperCountItemText-2">
                Items left to do {taskToDo.length}
              </Text>
              <Icon
                style={styles.eyeIcon}
                name={'check'}
                size={24}
                testID="main-upperCheckIcon-2"
              />
            </View>
          </View>
        )}
        <View style={styles.tasks} testID="main-task-container">
          {showTaskToDo
            ? taskToDo?.map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={styles.taskStyles}
                    testID={`tasks-containerToDo-${index}`}>
                    <TouchableOpacity
                      style={styles.iconRight}
                      onPress={() =>
                        editTask ? null : handleEditTask(item.id, index)
                      }>
                      <Tasks item={item} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCheck}>
                      <Icon
                        name={'check'}
                        size={24}
                        color={item.done ? 'green' : 'gray'}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })
            : taskItems?.map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={styles.taskStyles}
                    testID={`tasks-containerAll-${index}`}>
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={() => deleteTask(index)}
                      testID={`tasks-delete-${index}`}>
                      <Icon name={'trash'} size={24} color={'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconRight}
                      onPress={() =>
                        editTask ? null : handleEditTask(item.id, index)
                      }>
                      <Tasks item={item} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconCheck}
                      onPress={() => handleCheckTask(item.id, index)}
                      testID={`tasks-check-${index}`}>
                      <Icon
                        name={'check'}
                        size={24}
                        color={item.done ? 'green' : 'gray'}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
        </View>
        {showTaskToDo ? null : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeContainer}
            testID="main-textInput-container">
            <TextInput
              style={styles.taskInput}
              placeholder={'Write a task'}
              value={taskText}
              onChangeText={text => setTaskText(text)}
              autoFocus
              testID="main-textInput"
            />
            <TouchableOpacity
              style={styles.addTaskIcon}
              onPress={() => handleAddTask()}
              testID="main-addTask">
              <Icon
                name={'plus'}
                size={36}
                color={'pink'}
                testID="main-addTask-icon"
              />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </View>
    </ScrollView>
  );
};

export default Main;
