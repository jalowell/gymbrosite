import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Workout from "./Workout";
import Nutrition from "./Nutrition";
import ContactUs from "./ContactUs";

const Main = () => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route path="/workout" component={Workout} />
    <Route path="/nutrition" component={Nutrition} />
    <Route path="/contact" component={ContactUs} />
  </Routes>
);
export default Main;