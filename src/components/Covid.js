import './Covid.css'
import React, { useEffect, useState } from 'react'

const Covid = () => {

  const[data, setData] =  useState([]);

    const getCovidData = async () => {
      try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);

      }catch(err){
        console.log(err);
      }

    }

    useEffect(() => {
        getCovidData();

    }, [])
  return (
    <div>
      <section>
        <h1 className='grow-heading'>🔴LIVE</h1>
        <h2>COVID-19 CORONA VIRUS TRACKER</h2>
        
        <ul>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> <span>OUR</span> COUNTRY</p>
                <p className='card__total card__smallk'> INDIA</p>
              </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> <span>Total</span> Recovered</p>
                <p className='card__total card__smallk'>{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> <span>Total</span> Confirmed</p>
                <p className='card__total card__smallk'>{data.confirmed} </p>
              </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> <span>Total</span> Death</p>
                <p className='card__total card__smallk'>{data.deaths} </p>
              </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> <span>Total</span> Active</p>
                <p className='card__total card__smallk'>{data.active} </p>
              </div>
            </div>
          </li>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> <span>Last</span> Updated</p>
                <p className='card__total card__smallk'>{data.lastupdatedtime} </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Covid
