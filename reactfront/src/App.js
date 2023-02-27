import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowProducts from './Components/ShowProducts';
import CreateProduct from './Components/CreateProduct';
import EditProduct from './Components/EditProduct';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowProducts/>}/>
            <Route path='/create' element={<CreateProduct/>}/>
            <Route path='/edit/:id' element={<EditProduct/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
