import React, { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";

const TabContent = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const topics = ["components", "jsx", "props", "state"];

  return (
    <>
      <h2>Examples</h2>
      <menu>
        {topics.map((topic) => (
          <TabButton
            key={topic}
            isSelected={selectedTopic === topic}
            onSelect={() => handleSelect(topic)}
          >
            {EXAMPLES[topic].title}{" "}
          </TabButton>
        ))}
      </menu>
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
    </>
  );
};

export default TabContent;
