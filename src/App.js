import Header from "./components/Header/Header";
import Concepts from "./components/Concepts/Concepts";
import TabContent from "./components/TabContent/TabContent";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <Concepts />
        </section>
        <section id="examples">
          <TabContent />
        </section>
      </main>
    </div>
  );
}

export default App;
