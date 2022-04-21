import React from "react";
import styled from "styled-components";
import SpeechResult from "./SpeechResult";

const SpeechRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  const startRecognition = () => {
    recognition.start();
  };

  const stopRecognition = () => {
    recognition.abort();
  };

  return (
    <Container>
      <h2>SpeechRecognition</h2>
      <Button onClick={startRecognition}>Start Recognition</Button>
      <Button onClick={stopRecognition}>Stop Recognition</Button>
      <SpeechResult recognition={recognition}></SpeechResult>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
`;

export default SpeechRecognition;
