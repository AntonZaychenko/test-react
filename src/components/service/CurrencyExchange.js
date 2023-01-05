let currency = 'USD'
let currencyGive = 'UAH'
     
export function onClick(e) {
    currency = e.target.value
    Clear()
    return currency
}

export function onClickGive(e) {
    currencyGive = e.target.value
    Clear()    
    return currencyGive
}

export function Change ( usd, eur) {
    const input = document.querySelector('#input')
    const result = document.querySelector('#result')
    let test;
  
    if(currency === 'USD') {
        test = usd.rate
    } 
    if(currency === 'EUR') {
       test = eur.rate
    } 
    if(currency === 'UAH') {
        test = 1
    }
    
    if(currencyGive === 'USD' && currency === 'USD') {
       test = 1
    } 
    if(currencyGive === 'USD' && currency === 'EUR') {
       test = eur.rate / usd.rate
     }
     if(currencyGive === 'USD' && currency === 'UAH') {
        test = 1 / usd.rate
      }
      if(currencyGive === 'EUR' && currency === 'EUR') {
        test = 1
     } 
     if(currencyGive === 'EUR' && currency === 'USD') {
        test = usd.rate / eur.rate
      }
      if(currencyGive === 'EUR' && currency === 'UAH') {
         test = 1 / eur.rate
       }
    const total = input.value / test
    result.value = total.toFixed(2)
}
function Clear () {
    const input = document.querySelector('#input')
    const result = document.querySelector('#result')
    input.value = ''
    result.value= ''
}



