import React from 'react';
import ReactDOM from 'react-dom';
import MessageComponent from './components/MessageComponent';

ReactDOM.render(
  <MessageComponent message="Hello from react" />,
  document.getElementById('app')
);
