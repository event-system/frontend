function EventCard({ event }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 8px #F3EFFF44",
      padding: 24,
      minWidth: 260,
      flex: "1 1 260px",
      display: "flex",
      flexDirection: "column",
      marginBottom: 24,
      marginRight: 24,
      maxWidth: 320,
      position: "relative"
    }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <span style={{
          background: "#F8F8FC",
          color: "#7B61FF",
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 600,
          padding: "2px 10px"
        }}>{event.category}</span>
        <span style={{
          background: "#F3EFFF",
          color: "#7B61FF",
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 600,
          padding: "2px 10px"
        }}>{event.status}</span>
      </div>
      <div style={{
        background: "#F8F8FC",
        borderRadius: 12,
        height: 80,
        marginBottom: 16
      }} />
      <div style={{ fontSize: 13, color: "#B7B7C8", marginBottom: 2 }}>{event.date}</div>
      <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 2 }}>{event.title}</div>
      <div
        style={{
          fontSize: 13,
          color: "#B7B7C8",
          marginBottom: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{event.location}</span>
        <span style={{ fontWeight: 700, color: "#7B61FF", fontSize: 16 }}>${event.price}</span>
      </div>
    </div>
  );
}

export default EventCard;