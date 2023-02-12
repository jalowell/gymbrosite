import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Workout from "./Workout";
import Nutrition from "./Nutrition";
import ContactUs from "./ContactUs";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/contact" element={<ContactUs />} />
    </Routes>
);
export default Main;