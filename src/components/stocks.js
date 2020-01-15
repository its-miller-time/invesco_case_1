import React, {Component} from 'react'
import axios from 'axios'


const stocks = [
    'AAPL', 'MSFT', 'AMZN', 'FB', 'GOOGL', 'UBER', 'UBER', 'INTC', 'CMCSA', 'CSCO', 'WORK'
  ]
  
  const stockData = stocks.map(stock => {
   axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/${stock}?period=quarter`)
  });
  

  export default class Stocks extends Component {
      state = {}

      componentDidMount(){
        const stocks = [
            'AAPL', 'MSFT', 'AMZN', 'FB', 'GOOGL', 'UBER', 'UBER', 'INTC', 'CMCSA', 'CSCO', 'WORK'
          ]
          
          const stockData = stocks.map(stock => {
           axios.get(`https://financialmodelingprep.com/api/v3/financials/income-statement/${stock}?period=quarter`)
           .then(data =>{
               console.log(data.data.symbol)
               data.data.financials.forEach(obj=>{
                   console.log(obj['Revenue Growth'])
               })
           })
          });
          
        
      }
        render(){
            return (<>

            </>)
        }
}