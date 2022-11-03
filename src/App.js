/** @format */

import "./App.css";

// Components
import Header from "../src/components/Header";
import Home from "./pages/Home";
import Stack from "./pages/Stack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Home />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;
