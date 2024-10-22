import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gi from './Menu/menu';
import * as serviceWorker from './service-worker';
import './style.css';
import signIn from './authentication/signIn';
import signUp from './authentication/signUp';

ReactDOM.render(<Router>
    <Routes>
        <Route path="/" element = {<Gi/>}> </Route>
        <Route path="/App" element={<App />} />
        <Route path = "/signUp" element={<signUp/>}/> 
        <Route path = "/signIn" element={<signIn/>}/> 
    </Routes>
</Router>, document.getElementById('root'));
module.hot.accept();
serviceWorker.register();
