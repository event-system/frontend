import SidebarLink from "./SidebarLink";

function Sidebar() {
  const page = window.location.pathname.split("/").pop();
  return (
    <aside style={{
      width: 240,
      background: "#F8F8FC",
      minHeight: "100vh",
      padding: "32px 0 0 0",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #EEE"
    }}>
      <div style={{ padding: "0 32px", marginBottom: 32 }}>
        <div style={{ fontWeight: 700, fontSize: 24, color: "#7B61FF", marginBottom: 32, letterSpacing: 1 }}>Ventixe</div>
        <nav>
          <SidebarLink icon="🏠" label="Dashboard" active={page === 'dashboard'}/>
          <SidebarLink icon="📅" label="Bookings" active={page === 'bookings'}/>
          <SidebarLink icon="🎫" label="Events" active={page === 'events'}/>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;