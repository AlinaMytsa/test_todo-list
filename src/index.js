import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const initialData = [
  {id:`${Date.now().toString()}`, name:'Study', description:'all the time', completed:true},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={initialData}/>
  </React.StrictMode>
);
