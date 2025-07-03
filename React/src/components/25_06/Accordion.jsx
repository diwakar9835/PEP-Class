import React, { useState } from "react";

const Accordion = () => {
  const [acc, setAcc] = useState([
    {
      id: 1,
      title: "Accordion 1",
      content: "This is the content of Accordion 1",
      isOpen: false,
    },
    {
      id: 2,
      title: "Accordion 2",
      content: "This is the content of Accordion 2",
      isOpen: false,
    },
  ]);

  const ToggleAcc = (id) => {
    const newAcc = acc.map((ele) => {
      if (ele.id === id) {
        ele.isOpen = !ele.isOpen;
      }
      return ele;
    })

    setAcc(newAcc);
  };
  return (
    <div>
      {acc.map((ele) => {
        return (
          <div>
            <h1 onClick={() => ToggleAcc(ele.id)}>{ele.title}</h1>
            {ele.isOpen && <p>{ele.content}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;


// https://meet.google.com/aco-yduu-qir