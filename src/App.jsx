import Contact from "./componetns/Contact";
import Education from "./componetns/Education";
import Home from "./componetns/Home";
import Navbar from "./componetns/Navbar";
import Projects from "./componetns/Projects";
import Technologies from "./componetns/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar></Navbar>
        <Home></Home>
        <Technologies></Technologies>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
