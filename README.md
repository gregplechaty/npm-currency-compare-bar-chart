# react-currency-compare-bar-chart

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

![logo](https://github.com/gregplechaty/npm-currency-compare-bar-chart/blob/main/demo/src/logo.png)

## Thanks for checking out react-exchange-rate-bar-chart.

Demo: https://gregplechaty.github.io/npm-currency-compare-bar-chart/

- Compare exchange rates between currencies
- Return data across several months
- Users can choose currencies and number of months to return data for

![component screenshot](https://github.com/gregplechaty/npm-currency-compare-bar-chart/blob/main/demo/componentScreenshot.png)



## Installation & Usage
```
npm install react-exchange-rate-bar-chart --save
```

### **Including the Component**
```
import React from 'react'
import { ExchangeRatebarChart } from 'react-exchange-rate-bar-chart'
function App() {
    return (
    <div>
      <ExchangeRateBarChart />
    </div>
    )
  };
export default App;
```
### **Optional Properties**
- **title**: Sets the chart title.
   -If omitted, defaults to: 'Exchange Rates'
- **currencyList**: Accepts an array of currency symbols. This is used for both the base currency and the currency it is compared to. For the complete list, go here: https://api.exchangerate.host/symbols
   - If omitted, defaults to: ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'HKD',]


## About the API used
Data comes from the "exchangerate.host" API. Documentation can be found here: https://exchangerate.host/. This is rather useful if you're interestred in customizing the chart further.
If you use this component in your project, feel free to give them a shoutout!

#### Questions? Ideas? Feel free to reach out. Contact info tbd.


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
