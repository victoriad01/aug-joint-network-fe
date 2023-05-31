import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage'
import Navandfooter from './components/NavandFooter/Navandfooter'
import { GenPrayer } from './pages/PrayerGenerator/GenPrayer'
import { Requestprayer } from './pages/RequestPrayer/Requestprayer'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Navandfooter>
                <Homepage />
              </Navandfooter>
            }
          />
          <Route
            path='/pray'
            element={
              <Navandfooter>
                <GenPrayer />
              </Navandfooter>
            }
          />
          <Route
            path='/reqprayer'
            element={
              <Navandfooter>
                <Requestprayer />
              </Navandfooter>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
