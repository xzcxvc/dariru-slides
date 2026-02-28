import "./App.css";
import Welcome from "./pages/welcome";
import Learnings from "./pages/learnings";
import NiceToHaves from "./pages/nice-to-haves";
import Realizations from "./pages/realizations";
import GridBackground from "./components/grid-background";
import Sidebar from "./components/sidebar";
import ClickSpark from "./components/click-spark";

function App() {
  return (
    <>
      <div className="relative pl-[110px] min-h-screen bg-[#FFF8E7] transition-all snap-y snap-mandatory ">
        <ClickSpark sparkColor="#000" sparkRadius={42} sparkCount={8}>
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
        </ClickSpark>
      </div>
    </>
  );
}

export default App;
