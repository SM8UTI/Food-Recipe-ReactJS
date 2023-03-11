import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import FullDetails from "./components/FullDetails";
import NotFound from "./components/NotFound";

const app = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Meal/:MealID" element={<FullDetails />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default app;
