import React from 'react';
import Navigation from './components/Navigation';
import Data from './data/Data.json';
import DataDisplay from './components/DataDisplay';
import 'normalize.css';
import "styles/base/_main.sass"  // Global styles

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

const App = () => {
console.log(Data)
return (
  <div className='App'>
    <Navigation/>
    {
      Data.map ((data, key) => {
        return (
          <DataDisplay key={key} firstName={data.first_name} lastName={data.last_name}/>
        )
      })
    }
  </div>
  )
};

export default App;
