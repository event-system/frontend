import { Link } from "react-router-dom";

function SidebarLink({ icon, label, active }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        color: active ? "#7B61FF" : "#888",
        fontWeight: active ? 700 : 500,
        background: active ? "#F3EFFF" : "none",
        borderRadius: 8,
        marginBottom: 2,
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: 18, marginRight: 16 }}>{icon}</span>
      <Link to={"/" + label.toLowerCase()}>{label}</Link>
    </div>
  );
}

export default SidebarLink;
