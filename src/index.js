import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import Register from './components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App background'>
      <div className='outer'>
        <div className='inner'>
         <Register />  
        </div>
      </div>
    </div>
  </React.StrictMode>
);

