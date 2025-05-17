import './App.css'
import EventPage from './EventPage/index.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/events" element={<EventPage />} />
        <Route path="*" element={<Navigate to="/events" replace />} />
      </Routes>
    </Router>
  )
}

export default App
