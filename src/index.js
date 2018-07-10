import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. This component should pproduce some HTML

const App = () => { //class
  return <div>HI!</div>
}

ReactDOM.render(<App/>//instance
, document.querySelector('.container'));