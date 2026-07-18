import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import Innovation from "./components/sections/Innovation";

function App() {
  return (
    <main className="bg-space min-h-screen">
      <Hero />
      <TrustBar />
      <Services />
      <Innovation />
    </main>
  );
}

export default App;
