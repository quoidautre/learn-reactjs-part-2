import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import Parent from './Parent';
import GuineaPigs from './GuineaPigs';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <div className="App">

        <div className="App-header">
            <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
            <div>
                <GuineaPigs />
                <br />
                <Parent />
            </div>
        </p>

    </div>,

    document.getElementById('app')
);

registerServiceWorker();
