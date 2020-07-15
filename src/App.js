import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';
import PureTaskList from './components/PureTaskList';
import InboxScreen from './components/InboxScreen';
// import Option from './components/Option';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
        {/* <PureTaskList /> */}
        {/* <Option title="Hello Storybook" /> */}
      </Provider>
    );
  }
}

export default App;
