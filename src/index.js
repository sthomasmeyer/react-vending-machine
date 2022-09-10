import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Items from './routes/Items';
import Item from './routes/Item';
import DefaultItem from './routes/DefaultItem';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/snacks' element={<Items category={'Snacks'} />}>
          <Route
            // The following 'index' route acts as the default child...
            // route for its parent.
            index
            element={<DefaultItem param={'snack'} />}
          />
          <Route path=':id' element={<Item category={'Snacks'} />} />
        </Route>
        <Route path='/drinks' element={<Items category={'Drinks'} />}>
          <Route
            // The following 'index' route acts as the default child...
            // route for its parent.
            index
            element={<DefaultItem param={'drink'} />}
          />
          <Route path=':id' element={<Item category={'Drinks'} />} />
        </Route>
      </Route>
      {/* The catch-all path ['*'] will match if, and only if none of...
      the other established routes do.  */}
      <Route
        path='*'
        element={
          <main>
            <p>These are not the droids you're looking for.</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
