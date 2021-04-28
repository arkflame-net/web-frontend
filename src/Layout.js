import { BrowserRouter } from 'react-router-dom';
import Router from "./Router";
import Hero from "./components/layout/hero";
import Navbar from "./components/layout/navbar";
import Sidebar from "./components/layout/sidebar";

import "./style.sass";

export default function Layout (props) {
    return (
        <BrowserRouter>
            <Hero />
            <Navbar {...props} />
            <div className="container">
                <div className="content">
                    <Router {...props} />
                </div>
                <Sidebar />
            </div>
        </BrowserRouter>
    )
}