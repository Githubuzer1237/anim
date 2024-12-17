import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Anim from "./components/Anim/Anim";
import Animation from "./components/Animation/Animation";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Имитация загрузки 3 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Animation />}
    </>
  );
};

export default App;
