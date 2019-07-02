import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react';

let appState = observable({ timer: 0});

setInterval(
  action(() => {
    appState.timer += 1;
}), 1000);

appState.resetTimer = action(() => {
  appState.timer = 0;
})

let App = observer(({ appState }) => {
  return (
    <div className="App">
      <h1>Time passed: {appState.timer}</h1>
      <button onClick={appState.resetTimer}>reset timer</button>
    </div>
  );
});

const root = document.getElementById('root');
ReactDOM.render(<App appState={appState} />, root);
