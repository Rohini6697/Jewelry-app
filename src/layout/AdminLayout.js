import React from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "../components/DashBoard";
function AdminLayout() {
    return (
        <div style={{ display: "flex" }}>
        {/* <DashBoard /> sidebar + topbar */}
        <main style={{ flex: 1, padding: "20px" }}>
            <Outlet /> {/*nested admin pages*/}
        </main>
        </div>
    );
}
export default AdminLayout;









