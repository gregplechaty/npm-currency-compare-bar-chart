import React, { useState } from 'react'
import {render} from 'react-dom'
//TODO: SOME KIND OF LOGO 
//import logo from './logo.svg';
//TODO if necessary::::: import './index.css';

import {CurrencyCompareBarChart} from '../../src';

function App() {
  
    return (
    <div>
      <h1>currency-compare-bar-chart Demo</h1>
      <CurrencyCompareBarChart/>
    </div>
      )
  };
  

/*
export default class Demo extends Component {
  render() {
    return <div>
      <h1>currency-compare-bar-chart Demo</h1>
      <CurrencyCompareBarChart/>
    </div>
  }*/


render(<CurrencyCompareBarChart/>, document.querySelector('#demo'))
