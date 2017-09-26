import React from 'react';
import ReactDOM from 'react-dom';

const css = require('./app.css');

import Intro from './components/Intro.js';
import List from './components/List.js';

const App = () => (
    <div>
        <Intro id="title1"/>
        <List />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);