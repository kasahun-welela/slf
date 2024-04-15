import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PracticeCard from "./components/PracticeCard";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <>
      <Hero />
      <PracticeCard />
      <NewsCard />
    </>
  );
}

export default App;
