import React, { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Name from "./components/Name";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Name name="아기사자" nth="11" isFE="true" />
      <Counter />
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  );
}

export default App;
