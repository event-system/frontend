import { FaSearch, FaThLarge, FaList, FaCog, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
import EventCard from "./EventCards";
import { useEffect, useState } from "react";
import { getEvents } from "../api";

const categories = [
  "All Category",
  "Outdoor & Adventure",
  "Music",
  "Fashion",
  "Health & Wellness",
  "Art & Design",
  "Food & Culinary",
  "Technology",
];




export default function EventPage() {
  const [baseEvents, setBaseEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate async fetch
  useEffect(() => {
    setLoading(true);
    // Replace this with your real async fetch, e.g. fetch('/api/events')
    getEvents().then(data => {
      setEvents(data);
      setBaseEvents(data);
      setLoading(false);
    })
  }, []);
  
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8F8FC" }}>
      <Sidebar/>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <main style={{ padding: "32px 40px", flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 28, marginBottom: 24 }}>Events</div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32
          }}>
            <div style={{
              flex: 1,
              background: "#fff",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              height: 44,
              boxShadow: "0 1px 4px #F3EFFF22"
            }}>
              <FaSearch color="#B7B7C8" />
              <input
                type="text"
                placeholder="Search event, location, etc"
                style={{
                  border: "none",
                  outline: "none",
                  marginLeft: 8,
                  fontSize: 15,
                  background: "transparent",
                  flex: 1
                }}
              />
            </div>
            <select style={{
              background: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "0 16px",
              height: 44,
              fontSize: 15,
              color: "#7B61FF",
              fontWeight: 600,
              boxShadow: "0 1px 4px #F3EFFF22"
            }}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "All Category") {
                setEvents(baseEvents);
                return;
              }
              const newEvents = [...baseEvents].filter(event => event.category === e.target.value);
              setEvents(newEvents);
            }}>
              {categories.map(cat => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <select style={{
              background: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "0 16px",
              height: 44,
              fontSize: 15,
              color: "#7B61FF",
              fontWeight: 600,
              boxShadow: "0 1px 4px #F3EFFF22"
            }}>
              <option>This Month</option>
              <option>Next Month</option>
              <option>This Year</option>
            </select>
            <div style={{
              display: "flex",
              gap: 8,
              background: "#fff",
              borderRadius: 12,
              padding: "0 8px",
              height: 44,
              alignItems: "center",
              boxShadow: "0 1px 4px #F3EFFF22"
            }}>
              <FaThLarge color="#7B61FF" size={18} style={{ background: "#F3EFFF", borderRadius: 6, padding: 2 }} />
              <FaList color="#B7B7C8" size={18} />
            </div>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            marginBottom: 24
          }}>
            {events.map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 16
          }}>
          </div>
        </main>
      </div>
    </div>
  );
}