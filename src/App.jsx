import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import PracticeCard from "./components/PracticeCard";
import NewsCard from "./components/NewsCard";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <Hero />
      <PracticeCard />
      <NewsCard />
      <Teams />
    </>
  );
}

export default App;
