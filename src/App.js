/** @format */

import "./App.css";

// Components
import Header from "../src/components/Header";
import Home from "./pages/Home";
import Stack from "./pages/Stack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
    </div>
  );
}

export default App;
