import React from 'react';
import './Bar.css';

function Bar(props) {
    
    

  return (
    <div className="ExchangeRateChart-bar"
        key={props.bar.rate} 
        style={{width: props.calcBarWidth + '%', height: 95/props.barLength + '%' }}>
            <div className="ExchangeRateChart-bar-text" >
                <p>{props.bar.date}: <strong>{props.bar.rate}</strong> {props.bar.currency}</p>
            </div>
    </div>
  );
}

export default Bar;