import React from "react";
import HomePage from "./components/Pages/homePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetailPage from "./components/Pages/recipeDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe-detail" element={<RecipeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
