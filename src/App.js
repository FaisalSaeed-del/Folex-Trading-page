import "./App.css";
import CryptoExchange from "./components/cryptocurrency exchange/CryptoExchange";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CryptoExchange />
    </div>
  );
}

export default App;
