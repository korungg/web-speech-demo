import SpeechRecognition from "./SpeechRecognition";
import SpeechSynthesis from "./SpeechSynthesis";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <SpeechRecognition></SpeechRecognition>
      <SpeechSynthesis></SpeechSynthesis>
    </div>
  );
};

export default App;
