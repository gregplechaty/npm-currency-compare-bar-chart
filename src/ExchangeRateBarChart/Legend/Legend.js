import React from 'react';
import './Legend.css';
import StartMonth from '../StartMonth/StartMonth.js';

function Legend(props) {
    let currencies = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'HKD',];
    if (props.currencyList) {currencies = props.currencyList};

  return (
    <div className="ExchangeRateChart-legend">
                <StartMonth
                startMonth={props.startMonth}
                onChange={props.onChange}
                startYear={props.startYear}
                onChange={props.onChange}
                onSetStartYear={props.onSetStartYear}
                //dropdownYears={props.dropdownYears}
                //dropdownStartMonths={props.dropdownStartMonths}
                />
                <div>
                    <label for="numOfMonths">Number of months (up to 12): </label>
                        <input type="number" id="numOfMonths" min="1" max="12"
                            value={props.numMonths} 
                            onChange={props.onSetNumMonths}/>
                </div>
                <div>
                    <label for="currency_select">Currency: </label>
                    <select id="currency_select"
                        value={props.exchangeCurrency} 
                        onChange={props.onSetExchangeCurrency}>
                        {currencies.map(currency =>(
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="base_currency_select">Base Currency: </label>
                    <select id="base_currency_select"
                        value={props.baseCurrency} 
                        onChange={props.onSetBaseCurrency}>
                        {currencies.map(currency =>(
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
  );
}

export default Legend;