import React, { useState } from "react";
import Header from "../header/header";

function List() {
  const [value, setValue] = useState(0);
  const [for_Loop, setFor_Loop] = useState(0);
  const [while_Loop, setWhile_Loop] = useState(0);
  const [do_Loop, setDo_Loop] = useState(0);

  const handleFor = () => {
    var num = [];
    for (let i = 1; i < value; i++) {
      num.push(i);
      setFor_Loop(num);
    }
  };

  const handleWhile = () => {
    var num = [];
    let i = 1;
    while (i < value) {
      num.push(i);
      setWhile_Loop(num);
      i++;
    }
  };

  const handleDoWhile = () => {
    var num = [];
    let i = 1;
    do {
      num.push(i);
      setDo_Loop(num);
      i++;
    } while (i < value);
  };

  const handleLoop = () => {
    handleFor();
    handleWhile();
    handleDoWhile();
  };

  return (
    <div className="list-page">
      <Header />
      <h1>Abhishek Dhandhukiya</h1>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => handleLoop()}>try it!</button>

      <div className="loop">
        <div className="space">
          {for_Loop.length &&
            for_Loop?.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </div>

        <div className="space">
          {while_Loop.length &&
            while_Loop?.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </div>

        <div className="space">
          {do_Loop.length &&
            do_Loop?.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default List;
