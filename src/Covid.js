import React, { useEffect, useState } from 'react'
import './App.css';

export const Covid = () => {
    
    const[data,update]=useState([]);

    const getCovidData=async()=>{
        try{
            const res=await fetch('https://data.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            update(actualData.statewise[0]);

        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[])

  return (
    <>
    <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 COROVIRUS TRACKER</h2>

        <ui>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className="card_name"><span>OUR</span></p>
                        <p className="card_total class_small"><span>India</span></p>
                    </div>
                </div>

            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className="card_name"><span>Total</span>RECOVERED</p>
                        <p className="card_total class_small"><span>{data.recovered}</span></p>
                    </div>
                </div>

            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className="card_name"><span>Total</span>CONFIRMED</p>
                        <p className="card_total class_small"><span>{data.confirmed}</span></p>
                    </div>
                </div>

            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className="card_name"><span>Total</span>DEATHS</p>
                        <p className="card_total class_small"><span>{data.deaths}</span></p>
                    </div>
                </div>

            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className="card_name"><span>Total</span>ACTIVE</p>
                        <p className="card_total class_small"><span>{data.active}</span></p>
                    </div>
                </div>

            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className="card_name"><span>LAST</span>UPDATE</p>
                        <p className="card_total class_small"><span>{data.lastupdatetime}</span></p>
                    </div>
                </div>

            </li>
        </ui>
    </section>
    </>
  )
}
