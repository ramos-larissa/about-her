import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './config/routes';

import './styles/index.css';


export default function App() {
    return (
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
