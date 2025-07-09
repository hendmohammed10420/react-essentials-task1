import Header from "./components/Header/Header";
import Concepts from "./components/Concepts/Concepts";
import TabContent from "./components/TabContent/TabContent";
function App() {
  return (
    <div>
      <Header />
      <main>
          <Concepts />
          <TabContent />
      </main>
    </div>
  );
}

export default App;
