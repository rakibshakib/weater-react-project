import React from 'react';
import { useForm } from 'react-hook-form';
import WeatherCity from '../WeatherCity/WeatherCity';
import './Home.css';

const Home = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => console.log(data.cityName);
    return (
        <div className='home'>
            <h2>Current Weather Your City</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='weatherInput' type="search" placeholder="Enter a city name" {...register("cityName", { required: true })} />
                {errors.cityName && <span className="error">please enter a city name</span>}

                
                <button type="submit">See Weather Report</button>
            </form>

            <WeatherCity />

        </div>
    );
};

export default Home;