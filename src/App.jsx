import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Fox from "./components/Fox";
import Deer from "./components/Deer";
import Crow from "./components/Crow";
import Rabbit from "./components/Rabbit";
import NotFound from "./components/NotFound";
import LearnMore from "./components/LearnMore";
import { useState } from "react";

function App() {
  const [isRabbit, setIsRabbit] = useState(false);

  function handleIsRabbit() {
    setIsRabbit(true);
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout isRabbit={isRabbit}/>}>
        <Route index element={<Home />} />
        <Route path="/fox" element={<Fox />} />
        <Route path="/deer" element={<Deer />} />
        <Route path="/crow" element={<Crow />} />
        <Route path="/rabbit" element={<Rabbit onClick={handleIsRabbit}/>} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
    </>
  );
}

export default App;