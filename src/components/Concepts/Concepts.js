import Concept from "../Concept/Concept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../../Section";
const Concepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts" >
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Concept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default Concepts;
