import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'




import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Nopage from '../pages/Nopage'

import Loan from '../LoanCalculator/Loan'
import NewsWeb from '../NewsApi/NewsWeb'
import WeatherForecast from '../WeatherForecast/WeatherForecast';

const NavbarRouter = () => {
  return (
    <>
     
      <HashRouter>
        <div className='content'>
          <Routes>
            <Route index element={<Home />} />
            
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='*' element={<Nopage />} />
            <Route path='/loan' element={<Loan />} />
            <Route path='/newsweb' element={<NewsWeb />} />
            <Route path='/weatherforecast' element={<WeatherForecast />} />
            
          </Routes>
        </div>
      </HashRouter>
    
     
    </>
  )
}

export default NavbarRouter;