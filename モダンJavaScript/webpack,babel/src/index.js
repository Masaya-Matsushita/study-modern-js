import bar from './bar.js';
const foo = require('./foo.js')



import React from "react";
import ReactDOM from 'react-dom';

const App = () => {
  bar();
  foo()
  return <h1>hello!!!!!!</h1>;
}

ReactDOM.render(<App />, document.getElementById("app"))
