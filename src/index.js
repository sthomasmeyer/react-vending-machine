import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Snacks from './routes/Snacks';
import Snack from './routes/Snack';
import Drinks from './routes/Drinks';
import Drink from './routes/Drink';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/snacks' element={<Snacks />}>
          <Route
            // The following 'index' route acts as the default child...
            // route for its parent.
            index
            element={
              <div className='default-message'>
                <p>Choose a snack from the vending machine.</p>
              </div>
            }
          />
          <Route path=':snackId' element={<Snack />} />
        </Route>
        <Route path='/drinks' element={<Drinks />}>
          <Route
            // The following 'index' route acts as the default child...
            // route for its parent.
            index
            element={
              <div className='default-message'>
                <p>Choose a drink from the vending machine.</p>
              </div>
            }
          />
          <Route path=':drinkId' element={<Drink />} />
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
