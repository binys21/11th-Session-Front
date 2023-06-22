import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState({
    name: "",
    nth: "",
  });
  const { name, nth } = inputs;

  const onChange = (e) => {
    //setText로 입력받은 input값의 value로 state 변경
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <hr />
      <input onChange={onChange} value={text}></input>
      <button onClick={onReset}>초기화</button>
      <h2>값:{text}</h2>
    </div>
  );
};
export default Input;
