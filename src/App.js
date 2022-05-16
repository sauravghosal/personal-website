import React, { createContext, useState, useEffect } from "react";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import { HashRouter as Router } from "react-router-dom";
import Project from "./pages/Project";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const handleColorScheme = (e) =>
      e.matches ? setTheme("dark") : setTheme("light");
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
      "change",
      handleColorScheme // listener
    );

    handleColorScheme(window.matchMedia("(prefers-color-scheme: dark)"));

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener(handleColorScheme);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "dark"
    ) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="dark:bg-slate-900 dark:text-slate-300 transition-colors duration-500">
          <Route path="/">
            <Header />
            <div
              className="px-5 sm:px-12 md:px-16 lg:px-60 w-full grid relative"
              style={{ minHeight: "calc(100vh - 3.5rem)" }}
            >
              <Home />
              <Project />
              <About />
            </div>
            <Footer />
          </Route>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
