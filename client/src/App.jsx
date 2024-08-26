import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import "./transition.css"; // Import the transitions CSS

// Theme Provider for MUI
const theme = createTheme();

function App() {
  const location = useLocation();
  const [currentKey, setCurrentKey] = useState(location.pathname);
  const [transitionClass, setTransitionClass] = useState("active-page");

  useEffect(() => {
    // On route change, set exit class and then active class
    setTransitionClass("exit-page");

    const timeoutId = setTimeout(() => {
      setCurrentKey(location.pathname);
      setTransitionClass("active-page");
    }, 500); // Match this duration with your transition duration

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <div className="background-container">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`page-container ${transitionClass}`}>
          <Header />
          <main key={currentKey}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
