import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/about/about';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Cats from './pages/cats/cats';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/contact';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={App} />
        <Route path="pages/about" Component={About} />
        <Route path="pages/cats" Component={Cats} />
        <Route path="pages/skills" Component={Skills} />
        <Route path="pages/contact" Component={Contact} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
