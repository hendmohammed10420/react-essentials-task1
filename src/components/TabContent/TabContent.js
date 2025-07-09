import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../../Section";
import Tabs from "./Tabs";
const TabContent = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const topics = ["components", "jsx", "props", "state"];

  return (
    <Section title="Examples" id="examples">
      <Tabs ButtonsContainer="menu"
            buttons={
          <>
        {topics.map((topic) => (
          <TabButton
            key={topic}
            isSelected={selectedTopic === topic}
            onClick={() => handleSelect(topic)}
          >
            {EXAMPLES[topic].title}{" "}
          </TabButton>
        ))}
      </>
      }/>
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
      </Section>
    );
};

export default TabContent;
