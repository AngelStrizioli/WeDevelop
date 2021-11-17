import 'react-native';
import React from 'react';
import Main from '../Main';
import {fireEvent, render, shallow} from '@testing-library/react-native';

const makeInitialState = ({showTaskToDo}) => ({
  showTaskToDo: showTaskToDo,
});

describe('Render Main', () => {
  it('when the component is called, should render all properties if showTaskToDo is false', () => {
    const {getByTestId} = render(<Main />, {
      initialState: makeInitialState({showTaskToDo: false}),
    });
    expect(getByTestId('main-container')).toBeDefined();
    expect(getByTestId('main-title')).toBeDefined();
    expect(getByTestId('main-upperItems-1')).toBeDefined();
    expect(getByTestId('main-upperButton-1')).toBeDefined();
    expect(getByTestId('main-upperText-1')).toBeDefined();
    expect(getByTestId('main-upperEyeIcon-1')).toBeDefined();
    expect(getByTestId('main-upperCountItemText-1')).toBeDefined();
    expect(getByTestId('main-upperCheckIcon-1')).toBeDefined();
    expect(getByTestId('main-task-container')).toBeDefined();
    expect(getByTestId('main-textInput-container')).toBeDefined();
    expect(getByTestId('main-textInput')).toBeDefined();
    expect(getByTestId('main-addTask')).toBeDefined();
    expect(getByTestId('main-addTask-icon')).toBeDefined();
  });

  it('when the component is called, should render all properties if showTaskToDo is true', () => {
    const {getByTestId} = render(<Main />, {
      initialState: {showTaskToDo: true},
    });
    expect(getByTestId('main-container')).toBeDefined();
    expect(getByTestId('main-title')).toBeDefined();
    const showTaskToDoButton = getByTestId('main-upperButton-1');
    fireEvent.press(showTaskToDoButton);
    expect(getByTestId('main-upperItems-2')).toBeDefined();
    expect(getByTestId('main-upperText-2')).toBeDefined();
    expect(getByTestId('main-upperEyeIcon-2')).toBeDefined();
    expect(getByTestId('main-upperCountItemText-2')).toBeDefined();
    expect(getByTestId('main-upperCheckIcon-2')).toBeDefined();
  });

  it('when the user add a task should render them', () => {
    const {getByTestId} = render(<Main />, {
      initialState: makeInitialState({showTaskToDo: false}),
    });
    const input = getByTestId('main-textInput');
    fireEvent.changeText(input, 'buy coffee');
    const addButton = getByTestId('main-addTask');
    fireEvent.press(addButton);
    const input2 = getByTestId('main-textInput');
    fireEvent.changeText(input2, 'buy milk');
    const addButton2 = getByTestId('main-addTask');
    fireEvent.press(addButton2);
    expect(getByTestId('tasks-containerAll-0')).toBeDefined();
    expect(getByTestId('tasks-containerAll-1')).toBeDefined();
  });

  it('when the user add a task and click "show todo items" should render them', () => {
    const {getByTestId} = render(<Main />, {
      initialState: makeInitialState({showTaskToDo: false}),
    });
    const input = getByTestId('main-textInput');
    fireEvent.changeText(input, 'buy coffee');
    const addButton = getByTestId('main-addTask');
    fireEvent.press(addButton);
    const showTaskToDoButton = getByTestId('main-upperButton-1');
    fireEvent.press(showTaskToDoButton);
    expect(getByTestId('tasks-containerToDo-0')).toBeDefined();
  });

  it('when the user add a task, click check button and then click "show todo items" should not render them', () => {
    const {queryByTestId} = render(<Main />, {
      initialState: makeInitialState({showTaskToDo: false}),
    });
    const input = queryByTestId('main-textInput');
    fireEvent.changeText(input, 'buy coffee');
    const addButton = queryByTestId('main-addTask');
    fireEvent.press(addButton);
    const checkTask = queryByTestId('tasks-check-0');
    fireEvent.press(checkTask);
    const showTaskToDoButton = queryByTestId('main-upperButton-1');
    fireEvent.press(showTaskToDoButton);
    expect(queryByTestId('tasks-containerToDo-0')).toBeNull();
  });

  it('when the user add a task, click delete button should not render them', () => {
    const {queryByTestId} = render(<Main />, {
      initialState: makeInitialState({showTaskToDo: false}),
    });
    const input = queryByTestId('main-textInput');
    fireEvent.changeText(input, 'buy coffee');
    const addButton = queryByTestId('main-addTask');
    fireEvent.press(addButton);
    const deleteTask = queryByTestId('tasks-delete-0');
    fireEvent.press(deleteTask);
    const showTaskToDoButton = queryByTestId('main-upperButton-1');
    fireEvent.press(showTaskToDoButton);
    expect(queryByTestId('tasks-containerToDo-0')).toBeNull();
  });
});
