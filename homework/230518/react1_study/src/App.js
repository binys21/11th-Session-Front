import React, { useState } from "react";
import Modal from "./components/Modal";
import styled from "styled-components";
import figma from "../src/images/figma.png";
import front from "../src/images/front.png";
import back from "../src/images/back.png";
function App() {
  const [text, setText] = useState("");
  const [track, setTrack] = useState("");
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  //기디 트랙
  const setGidi = () => {
    setTrack("기획 & 디자인");
  };

  //프론트엔드 트랙
  const setFront = () => {
    setTrack("프론트엔드");
  };

  //백엔드 트랙
  const setBack = () => {
    setTrack("백엔드");
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title>
            <p>Create a nameModal</p>
            <p id="title">이름 모달 만들기</p>
            <div className="line" />
          </Title>
          <InputWrapper>
            <p>아기사자의 이름을 입력해 주세요</p>
            <input placeholder="아기사자" onChange={onChange} value={text} />
          </InputWrapper>
          <TrackWrapper>
            <p>트랙을 선택해주세요.</p>
            <ButtonWrapper>
              <button onClick={setGidi} value={track}>
                <img src={figma} />
                <span>기획 & 디자인</span>
              </button>
              <button onClick={setFront} value={track}>
                <img src={front} />
                <span>프론트엔드</span>
              </button>
              <button onClick={setBack} value={track}>
                <img src={back} />
                <span>백엔드</span>
              </button>
            </ButtonWrapper>
          </TrackWrapper>
          <RegisterBtn onClick={openModal}>이름 모달 만들기</RegisterBtn>
          {modal ? (
            <Modal setModal={setModal} name={text} track={track} /> //props로 전달할 때 text의 이름을 name으로 설정
          ) : null}
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2e7f7;
`;

const Container = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
`;

const Title = styled.div`
  height: 17%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 5px;
    color: #333333;
    font-weight: 300;
    font-size: 15px;
  }
  .line {
    width: 240%;
    border: 0.5px solid #d7d7d7;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  #title {
    font-weight: bold;
    font-size: 40px;
  }
  @media (max-width: 1100px) {
    #title {
      font-size: 25px;
    }
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    #title {
      font-size: 30px;
    }
  }
`;

const InputWrapper = styled.div`
  width: 50%;
  p {
    margin-left: 0;
    text-align: left;
    font-size: 16px;
    font-weight: 550;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 40px;
    border: 0.8px solid #979797;
    box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
    border-radius: 5px;
    outline: none;
    font-size: 15px;
    @media (max-width: 1100px) {
      font-size: 10px;
    }
    @media (min-width: 1100px) and (max-width: 1700px) {
      font-size: 13px;
    }
  }
`;

const TrackWrapper = styled.div`
  width: 50%;
  p {
    text-align: left;
    font-size: 20px;
    font-weight: 550;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  button {
    border: none;
    background: none;
    margin: 40px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 120%;
    border-radius: 70px;
    margin-bottom: 15px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
  }
  span {
    font-size: 12px;
    width: 340%;
  }
`;

const RegisterBtn = styled.button`
  width: 50%;
  aspect-ratio: 7.6/1;
  color: #ffffff;
  background-color: #81a7d3;
  border-radius: 30px;
  border: none;
  margin-bottom: 30px;
  font-size: 25px;
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 20px;
  }
`;
