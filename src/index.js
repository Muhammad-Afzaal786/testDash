import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './Components/Doctor/globally.css'
import "./Components/Doctor/Pages/style.css"
import "./Components/Doctor/Pages/globally.css"
//import "./sidebars.css";
import { BrowserRouter as Router } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'react-toastify/dist/ReactToastify.css';


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
