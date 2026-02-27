import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./pages/welcome";
import Learnings from "./pages/learnings";
import NiceToHaves from "./pages/nice-to-haves";
import Realizations from "./pages/realizations";
import GridBackground from "./components/grid-background";
import Sidebar from "./components/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative pl-[110px] min-h-screen bg-[#FFF8E7] transition-all snap-y snap-mandatory ">
      <GridBackground />
      <Sidebar />
      <main>
        <section className="snap-start">
          <Welcome />
          <Learnings />
          <NiceToHaves />
          <Realizations />
        </section>
      </main>
    </div>
  );
}

export default App;
