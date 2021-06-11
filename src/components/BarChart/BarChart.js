import React from 'react';
import './BarChart.css';
import Bar from '../Bar/Bar.js';

function BarChart(props) {
    
  return (
    <div className="ExchangeRateChart-display">
        {props.stateObjects
        .map (bar => (
            <Bar 
            key={bar.rate}
            bar={bar}
            calcBarWidth={props.calcBarWidth(bar.rate)}
            barLength={props.stateObjects.length}
            />
        ))
        }
    </div>
  );
}

export default BarChart;