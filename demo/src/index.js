import React, { useState } from 'react'
import {render} from 'react-dom'
//TODO: SOME KIND OF LOGO 
//import logo from './logo.svg';

import {ExchangeRateBarChart} from '../../src';

function App() {
  
    return (
    //Note that two optional props are in use
    <div>
      <h1>Exchange Rate bar Chart</h1>
      <ExchangeRateBarChart
      title='Your Custom Title'
      currencyList={['USD', 'EUR', 'JPY', 'GBP', 'HKD',]}/>
    </div>
    
      )
  };
  
render(<App/>, document.querySelector('#demo'))
