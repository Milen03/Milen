import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Nav />
      <Hero />
      <Skills />
      <Summary />
      <Projects />
      
      {/* Тук ще добавим секциите */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        
      </main>
    </div>
  );
}
