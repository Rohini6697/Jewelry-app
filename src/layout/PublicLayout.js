import React from "react";
import Header from "../components/essential/Header";
import Footer from "../components/essential/FooterPart";
import { Outlet } from "react-router-dom";
function PublicLayout() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    );
}
export default PublicLayout;
