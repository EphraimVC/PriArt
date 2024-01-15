import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Navbar/menu";

function Base() {
    const [resizing, setResizing] = useState(window.innerWidth);
    useEffect(() => {
        const handleSize = () => {
            setResizing(window.innerWidth);
        };
        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        };
    }, []);

    return (
        <div>
            {resizing < 768 ? <Menu /> : <Navbar />}

            <Outlet />
            <Footer />
        </div>
    );
}
export default Base;
