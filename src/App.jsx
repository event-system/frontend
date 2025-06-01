import "./App.css";
import BookingsPage from "./BookingsPage/index.jsx";
import EventPage from "./EventPage/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<EventPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="*" element={<Navigate to="/events" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
