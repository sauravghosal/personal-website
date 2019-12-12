import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  const pages = [
    {
      home: {
        title: "Saurav Ghosal",
        body: "CS @ Georgia Tech",
        subtext: "Personal Website"
      },
      about: {
        title: "Get to Know Me!",
        subtext: "Personal Website"
      }
    }
  ];

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <HomePage title={"Saurav Ghosal"} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
