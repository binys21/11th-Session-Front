import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { setModal } = props;
  const style = {
    width: "100px",
    height: "100px",
    display: "flex",
    backgroundColor: "orange",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  const deleteModal = () => {
    setModal(false);
  };

  return (
    <>
      <div style={style}>
        <button onClick={deleteModal}>모달 삭제</button>
      </div>
    </>
  );
};
export default Modal;

<button>커스텀 버튼</button>;
const Button = styled.button`
  display: inline-block;
  color: purplr;
  background-color: pink;
  font-size: 1em;
  font-wright: bolder;
  margin: 1em;
  padding: 1em;
  border: none;
  border-radius: 3px;
`;
