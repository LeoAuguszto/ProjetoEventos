// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './view/login/';
import NewUser from './view/newUser/';
import Home from './view/home/';
import NewPassword from './view/newPassword/';
import RegisterEventos from './view/registerEvento/';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/NewUser' element={<NewUser />} />
          <Route path='/' element={<Home />} />
          <Route path='/RegisterEventos' element={<RegisterEventos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;