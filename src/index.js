import React from 'react';
import ReactDOM from 'react-dom';
import Cardlist from './Cardlist';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './Robots';
import App from './App';
import './index.css';


ReactDOM.render(
<div>
  <App/>
</div>,
document.getElementById('root'));
registerServiceWorker();
