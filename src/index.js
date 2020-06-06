import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from './MediaCard';
import Gate from './Gate';

ReactDOM.render(
  <React.StrictMode>
    <div className="center-class">
    <App name="Abubaker Siddiq" />
    <MediaCard
      title="Media Card"
      body={
        <div>
          This is <strong>Website</strong> body
        </div>
      }
      imageURL="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    />
    <Gate isOpen={false} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
