import React from "react";
// React router dom
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

 // Styling
import './App.css'

// Pages
import HomePage from "./pages/home-page";
import PortfolioPage from "./pages/portfolio-page";
import ContactPage from "./pages/contact-page";

// Components
import NavBar from "./components/navBar/navBar";

function App() {
    return (
        <>
            {/* Setup the routes */}
            <BrowserRouter>
                {/* Navigation bar */}
                <NavBar />
                {/* Routes */}
                <Routes>
                    {/* HomePage Route */}
                    <Route path='/' element={<HomePage />} />
                    {/* PortfolioPage Route */}
                    <Route path='/portfolio' element={<PortfolioPage />} />
                    {/* ContactPage Route */}
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;