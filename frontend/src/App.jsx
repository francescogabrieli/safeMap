import Bar from "./components/Bar";
import Map from "./components/Map";
import FloatingButtons from "./components/FloatingButtons";
import { Routes, Route } from "react-router-dom";
/* import About from "./components/About";
import Contacts from "./components/Contacts";
import Statistics from "./components/Statistics"; */
import { useState } from "react";

function App() {
  const [isFlat, setIsFlat] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Bar isFlat={isFlat}/>
      <main className="h-screen w-full overflow-hidden relative">
        <Routes>
          <Route path="/" element={<Map setIsFlat={setIsFlat} isFlat={isFlat} />} />
{/*           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/statistics" element={<Statistics />} /> */}
        </Routes>
        <FloatingButtons isFlat={isFlat} />
      </main>
    </div>
  );
}

export default App;
