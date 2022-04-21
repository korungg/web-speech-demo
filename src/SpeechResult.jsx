import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SpeechResult = (props) => {
  const [resultList, setResultList] = useState([]);
  const [lastResult, setLastResult] = useState({ text: "", isFinal: false });

  useEffect(() => {
    props.recognition.onresult = ({ results }) => {
      console.log(results);
      const last = Array.from(results[results.length - 1]);

      setLastResult({
        text: last.reduce((prev, curr) => prev + " " + curr.transcript, ""),
        isFinal: results[results.length - 1].isFinal,
      });
    };
  }, []);

  useEffect(() => {
    if (lastResult.isFinal) {
      setResultList((prev) => [...prev, lastResult.text]);
    }
  }, [lastResult]);

  return (
    <Container>
      <h4>Recognition Results</h4>
      <div>{lastResult.text}</div>
      <hr />
      <ul>
        {resultList.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div``;

export default SpeechResult;
