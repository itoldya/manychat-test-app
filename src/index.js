import React from 'react';
import ReactDOM from 'react-dom';
import {root} from 'baobab-react/higher-order';

import tree from './state';
import App from './App';
import './index.css';

const RootedApp = root(tree, App);

ReactDOM.render(
  <RootedApp />,
  document.getElementById('root')
);
