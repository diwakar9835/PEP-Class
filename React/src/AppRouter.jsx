import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import WeatherComponent from './components/24_06_EVE/WeatherComponent'
import NavBar from './components/1_07/NavBar'
import ErrorPage from './components/1_07/ErrorPage'
import DynamicRoute from './components/1_07/DynamicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

const AppRouter = () => {
  const navigate = useNavigate();
  const counterValue = useSelector((state) => state.count.value);


  console.log(counterValue);
  const dispatch = useDispatch();


  const navigateToWeather = () => {
    console.log("Navigating to Weather");
    for(let i = 0; i < 10000000000; i++) {}
    console.log("Navigated to Weather");
    navigate("/weather")
  }


  return (
    <div>
    <NavBar />
    <p className='text-4xl'>Counter Value: {counterValue}</p> <br />

    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>


    <button onClick={navigateToWeather}>Click Me to go to Weather</button>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/weather" element={<WeatherComponent />} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="test/:id" element={<DynamicRoute />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default AppRouter