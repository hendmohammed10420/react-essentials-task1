import React from "react";
import Concept from "../Concept/Concept";
import { CORE_CONCEPTS } from "../../data";
const Concepts = () => {
  return (
    <>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Concept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </>
  );
};

export default Concepts;
