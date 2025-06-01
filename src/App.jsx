import "./App.css";
import BookingsPage from "./BookingsPage/index.jsx";
import EventPage from "./EventPage/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GalleryPage from "./GalleryPage/index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<EventPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Navigate to="/events" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
