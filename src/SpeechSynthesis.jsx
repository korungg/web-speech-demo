import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

function SpeechSynthesis() {
  const inputRef = useRef();
  const selectRef = useRef();
  const rateRef = useRef();
  const pitchRef = useRef();
  const [voices, setVoices] = useState([]);

  const startSynthesis = () => {
    if (!inputRef?.current?.value) {
      return;
    }
    const utterance = new SpeechSynthesisUtterance(inputRef.current.value);
    utterance.voice = voices[selectRef.current.selectedIndex];
    utterance.rate = +rateRef.current.value;
    utterance.pitch = +pitchRef.current.value;
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (voices.length === 0) {
      setVoices(speechSynthesis.getVoices());
    }
  });

  useEffect(() => {
    setVoices(speechSynthesis.getVoices());
  }, []);

  return (
    <Container>
      <h2>SpeechSynthesis</h2>
      <Select name="voice" ref={selectRef}>
        {voices.map((voice, index) => (
          <option data-index={index} id={voice.name}>
            {voice.name}
          </option>
        ))}
      </Select>
      <label htmlFor="rate">Rate</label>
      <Rate
        ref={rateRef}
        type="range"
        step="0.1"
        min="0.1"
        max="10.0"
        id="rate"
        list="ratemarks"
        defaultValue="1.0"
      />
      <datalist id="ratemarks">
        <option value="0.1">0.1</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="10">10</option>
      </datalist>
      <label htmlFor="pitch">Pitch</label>
      <Pitch
        ref={pitchRef}
        type="range"
        step="0.1"
        min="0"
        max="2"
        id="pitch"
        list="ratemarks"
        defaultValue="1.0"
      />
      <datalist id="pitchmarks">
        <option value="0.1">0.1</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="10">10</option>
      </datalist>
      <Input ref={inputRef} placeholder="텍스트를 입력하세요" />
      <Button onClick={startSynthesis}>Start Synthesis</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input`
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
`;

const Select = styled.select`
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0;
`;

const Rate = styled.input`
  width: 300px;
`;

const Pitch = styled.input`
  width: 300px;
`;

export default SpeechSynthesis;
