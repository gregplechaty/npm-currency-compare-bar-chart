import React, { useState, useEffect } from 'react';
import Legend from '../Legend/Legend.js';
import BarChart from '../BarChart/BarChart.js';
import ChartContainer from '../ChartContainer/ChartContainer.js';
import './ExchangeRateBarChart.css';

function ExchangeRateBarChart(props) {
  
    const [stateObjects, setStateObjects] = useState([]);
    const [numMonths, setNumMonths] = useState('4')
    const [startMonth, setStartMonth] = useState('01')
    const [startYear, setStartYear] = useState('2019')
    const [exchangeCurrency, setExchangeCurrency] = useState('GBP')
    const [baseCurrency, setBaseCurrency] = useState('EUR')
  
     useEffect(doFetch, [startMonth, startYear, numMonths, exchangeCurrency, baseCurrency]);
  
     function calculateDateArray() {
        const startDate = new Date(startYear, startMonth, 1);
        let dateArray = [];
        for (let i = 0; i < numMonths; i++) {
            dateArray.push(new Date (startDate));
            startDate.setMonth(startDate.getMonth() + 1);
          }
        let dateArrayFormatted = [];
        for (let date of dateArray) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            if (month < 10) {
                month = '0' + month.toString();
            }
            if (day < 10) {
                day = '0' + day.toString();
            }
            dateArrayFormatted.push(year + '-' + month + '-' + day);
        };
        return dateArrayFormatted; 
    };  
    function getFetches() {
      let fetchRequests = [];
      let dates = calculateDateArray();
      for (let date of dates) {
          let url = 'https://api.exchangerate.host/' + date + '?symbols=' + exchangeCurrency + '&base='+ baseCurrency;
          let fetchRequest = fetch(url)
          fetchRequests.push(fetchRequest)
      };
      return Promise.all(fetchRequests)
    };
  
    function dataToStateObjects(responses) {
      for (let response of responses) {
          response.then(data => {
              let barData = {
                  'date': data.date,
                  'currency': exchangeCurrency,
                  'rate': data.rates[exchangeCurrency]
              };
          setStateObjects(stateObjects => [...stateObjects, barData])
          })
      }
    };
  
    function doFetch() {
        setStateObjects([]);
        getFetches()
        .then(responses => responses.map(response => response.json()))
        .then(responses => {
          dataToStateObjects(responses);
      })
    };
  
      function calcBarWidth(currentRate) {
          let rateArray = []
          for (let item of stateObjects) {
              rateArray.push(item.rate)
          };
          const maxRate = Math.max(...rateArray);
          const minrate = Math.min(...rateArray);
          const minPercent = 20;
          return (((100-minPercent)/(maxRate - minrate))*(currentRate - maxRate))+100
      };
    

  return (
    
    <div className="ExchangeRate">
        <ChartContainer
        title={props.title}>
            <Legend
                currencyList={props.currencyList}
                startMonth={startMonth}
                onChange={ev => setStartMonth(ev.target.value)}
                startYear={startYear}
                onSetStartYear={ev => setStartYear(ev.target.value)}
                numMonths={numMonths}
                onSetNumMonths={ev => setNumMonths(ev.target.value)}
                exchangeCurrency={exchangeCurrency}
                baseCurrency={baseCurrency}
                onSetExchangeCurrency={ev => setExchangeCurrency(ev.target.value)}
                onSetBaseCurrency={ev => setBaseCurrency(ev.target.value)} />
            <BarChart 
                stateObjects={stateObjects}
                calcBarWidth={calcBarWidth} />
        </ChartContainer>
        
    </div>
  );
}

export default ExchangeRateBarChart;
