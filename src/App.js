import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import ArticlePage from "./ArticlePage";
//import axios from 'axios';
import Home from "./Home/HomePage";
import { BrowserRouter, Route } from 'react-router-dom'
import Users from "./Users";
import Tags from "./Tags";

//axios
//.get(`https://api.stackexchange.com//2.2/answers?order=desc&sort=activity&site=stackoverflow`)
//.then(data => console.log(data))


const App = () => {
  return (
    <BrowserRouter>
      <div className="about__body">
        <Header />
        <Route path="/ArticlePage" render={() => <ArticlePage/>} />
        <Route path="/HomePage" render={() => <Home/>} />
        <Route path="/Tags" render={() => <Tags/>} />
        <Route path="/Users" render={() => <Users/>} />
        <div id="siteBlock"></div>
        <NavBar />
        <div id="siteAds"></div>
        <div id="siteBlo"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;

