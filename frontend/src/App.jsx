import Navbar from "./components/Bar";
import Map from "./components/Map";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <main className="h-screen w-full overflow-hidden"> {/* Tolto il padding e forzato il full-screen */}
        <Map />
      </main>
    </div>
  );
}

export default App;
