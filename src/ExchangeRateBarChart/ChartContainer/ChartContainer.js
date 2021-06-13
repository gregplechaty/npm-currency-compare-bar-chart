import React from 'react';
import './ChartContainer.css';

function ChartContainer(props) {
    

  return (
    
    <div className="ExchangeRateChart">
            <div className="ExchangeRateChart-margin-top">
            </div>
            <div className="ExchangeRateChart-title">
                <h3>{props.title ? props.title : 'Exchange Rates'}</h3>
            </div>
            <div className="ExchangeRateChart-margin">
            </div>
        {props.children} 
            <div className="ExchangeRateChart-margin"></div>
        </div>
  );
}

export default ChartContainer;
