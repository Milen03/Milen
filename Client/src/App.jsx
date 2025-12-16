import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Nav />
      <Hero />
      <Skills />
      <Summary />
      <Projects />
      <Certificates />
      {/* Тук ще добавим секциите */}
    </div>
  );
}
