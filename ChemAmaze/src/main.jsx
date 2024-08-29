import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home/Home.jsx';
import Layout from './Layout/Layout.jsx';
import Games from './Pages/Games/Games.jsx';
import About from './Pages/About/About.jsx';
import Eachgame from './Pages/Eachgame/Eachgame.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/about' element={<About />} />
      <Route path='/games/:gameId' element={<Eachgame />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
