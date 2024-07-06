import React from 'react';
import "./app.css";
import Todoinput from './components/Todoinput';

function app() {
  return (
    <div className="main-container">
        <div className="center-container">
            <Todoinput/>
        </div>
    </div>
  )
}

export default app
