import "./App.css";
import componentsImage from "../src/assets/images/components.png";
import stateImage from "../src/assets/images/state.png";
import eventsImage from "../src/assets/images/events.png";
import Header from "./components/Header/Header";
import Concept from "./components/Concept/Concept";
import Concepts from "./components/Concepts/Concepts";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];
function App() {
  return (
    <div>
      <Header />
      <Concepts>
        <Concept concepts={concepts[0]} />
        <Concept concepts={concepts[1]} />
        <Concept concepts={concepts[2]} />
      </Concepts>
    </div>
  );
}

export default App;
