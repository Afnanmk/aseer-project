import Hero from "./components/Hero"
import Discover from "./components/Discover";
import Destinations from "./components/Destinations";
import Attractions from "./components/Attractions";
import Rediscover from "./components/Rediscover";
import Travel from "./components/Travel";
import FooterSection from "./components/FooterSection";


function App() {
  return (
    <div className="font-display">
     <Hero/>
     <Discover/>
     <Destinations/>
     <Attractions/>
     <Rediscover/>
     <Travel/>
    <FooterSection/>
    </div>
  );
}

export default App;
