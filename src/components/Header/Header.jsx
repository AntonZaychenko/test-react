import { useState, useEffect } from 'react';
import { API } from 'components/service/FetchRates';
import s from '../Header/Header.module.css'

export const Header = () => {
    const [exchangeRates, setExchangeRates] = useState([])
    useEffect(() => {
        API.FetchRates()
          .then(( response ) => {return response.json()})
          .then((data) => {setExchangeRates(data)})
          .catch(error => console.log(error.message));
      }, []);

      let time = new Date().toLocaleDateString()
      const usd = exchangeRates.find(option => option.cc === 'USD')
      const eur = exchangeRates.find(option => option.cc === 'EUR')
        return(
            <header>
                <div className={s.header}>
                    <h1 className={s.title}>Актуальный курс валют на: <span className={s.span}>{time}</span></h1>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <h2 className={s.subTitle}>1 Доллар США</h2>
                            <p className={s.paragraph}> {usd === undefined ? ' ' : usd.rate.toFixed(2)} UAH</p>
                        </li>
                        <li className={s.item}>
                            <h2 className={s.subTitle}>1 Евро</h2>
                            <p className={s.paragraph}> {eur === undefined ? ' ' : eur.rate.toFixed(2)} UAH</p>
                        </li>
                    </ul>
                </div>
            </header>
        )
    
}