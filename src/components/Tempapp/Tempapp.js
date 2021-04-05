import React, { useEffect, useState } from 'react';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Dhaka');

    useEffect(() => {
        const fetchApi = async ()=> {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=22d23bbed0a455df45c6d681eb95697c`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json(); 
            // console.log(resJson);
            setCity(resJson.main);
           
        };
        fetchApi();
    }, [search])


    return (
        <>
        <div className='box'>
            <input type="search"
            className="inputFeild"
            onChange={ 
                (event)=>{
                    setSearch(event.target.value)
                }
            }/>   
        </div> 

           {
            !city ?
            (  <p>No Data Found</p>  ) 
            : 
            (
             <div> 
                 <div className="info my-5">
                <h2 className="location my-2">
                    {search}
                </h2>
                <h1 className="tempReport">
                <span>{city.temp}</span>&deg;Celsius
                </h1>
                <h3 className="tempMax_Min">
                {/* <span>{city.temp_min}</span>: 5.25&deg;Celsius | <span>{city.temp_max}</span>: 5.25&deg;Celsius  */}
                </h3>
                </div>
             </div>
            )
        }
     
        </>
    );
};

export default Tempapp;