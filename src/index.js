import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';


ReactDOM.render(
<div>
  <App/>
</div>,
document.getElementById('root'));
registerServiceWorker();
