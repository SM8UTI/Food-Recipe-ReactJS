import React from "react";

const IndexPart = ({ setIndex }) => {
  const alphIndex = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <>
      {alphIndex.map((elem) => (
        <div
          className="indexBox"
          key={elem}
          onClick={() => setIndex(elem.toLowerCase())}
        >
          <h4>{elem}</h4>
        </div>
      ))}
    </>
  );
};

export default IndexPart;
