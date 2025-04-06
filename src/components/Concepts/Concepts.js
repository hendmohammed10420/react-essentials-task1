import React from "react";
import Concept from "../Concept/Concept";
import { CORE_CONCEPTS } from "../../data";
const Concepts = () => {
  return (
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => (
        <Concept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  );
};

export default Concepts;
