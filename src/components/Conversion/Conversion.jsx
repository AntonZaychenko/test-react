import s from '../Conversion/Conversion.module.css'
import { Change } from 'components/service/CurrencyExchange';
import { API } from 'components/service/FetchRates';
import { useState, useEffect } from 'react';
import { onClick } from 'components/service/CurrencyExchange';
import { onClickGive } from 'components/service/CurrencyExchange';

export const Conversion = () => {
    const [exchangeRates, setExchangeRates] = useState([])
    useEffect(() => {
        API.FetchRates()
          .then(( response ) => {return response.json()})
          .then((data) => {setExchangeRates(data)})
          .catch(error => console.log(error.message));
      }, []);
	  
	  const usd = exchangeRates.find(option => option.cc === 'USD')
      const eur = exchangeRates.find(option => option.cc === 'EUR')
	//   console.log( usd === undefined ? ' ' : usd.rate)
    return (
        <main className={s.main}>
            <div className={s.content}>
                <div  className={s.row}>
						<div className={s.col}>
						    	<label >Отдаю:</label>
									<select	className={s.form_control} onClick={e => onClickGive(e)}>
										<option id='take'  money={1} value="UAH">UAH — Гривні</option>
										<option id='take'  money={usd === undefined ? ' ' : usd.rate} value="USD">USD — Доллар США</option>
										<option id='take'  money={eur === undefined ? ' ' : eur.rate} value="EUR" >EUR — Евро</option>                                       
									</select>
						</div>
							<div className={s.col}>
								<label >Получаю:</label>
									<select id='test'	className={s.form_control} onClick={e => onClick(e)}>

										<option   money={usd === undefined ? ' ' : usd.rate} value="USD">USD — Доллар США</option>
										<option   money={eur === undefined ? ' ' : eur.rate} value="EUR" >EUR — Евро</option>
                                        <option   money={1} value="UAH">UAH — Гривні</option>

									</select>
							</div>
				</div>

						<div className={s.row}>
							<div className={s.col}>
								<input
										id="input"
										type="number"
										className={s.form_control}							
										autoFocus
									
                                        onChange={e => Change(usd, eur)}										                                        
									/>
								</div>
								<div className={s.col}>
									<input
										id="result"
										type="number"
										disabled
										className={s.form_control}                                        																				
									/>
							</div>
						</div>
            </div>
        </main>
    )
}