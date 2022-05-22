import './styles/app.css';
import './bootstrap';
import ReactDOM from 'react-dom/client';
import Home from './controllers/home';
import React from 'react';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<Home />);

