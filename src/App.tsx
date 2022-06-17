import { useState } from "react";
import "./App.sass";
import { ReactComponent as Switch } from "./switch.svg";
import { engToMorse, morseToEng } from "./translations";

const App = () => {
  const [eToM, setEToM] = useState(true);

  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");

  const handleSwitch = () => {
    setEToM(!eToM);
    setBox1(box2.toUpperCase());
    setBox2(box1.toUpperCase());
  };

  const morseToEnglish = (e: any) => {
    const english = e.target.value;
    setBox1(english);
    const morseArr: any = english
      .trim()
      .split("")
      // @ts-ignore
      .map((char: string) => engToMorse[char.toUpperCase()]);
    setBox2(
      morseArr.every((e: string) => e)
        ? morseArr.join(" ")
        : "Error: invalid characters"
    );
  };

  const englishToMorse = (e: any) => {
    const morse = e.target.value;
    setBox1(morse);
    const engArr: any = morse
      .trim()
      .split(" ")
      // @ts-ignore
      .map((char: string) => morseToEng[char.toUpperCase()]);
    setBox2(
      engArr.every((e: string) => e)
        ? engArr.join("")
        : "Error: invalid Morse code"
    );
  };
  return (
    <>
      <h1>Morse Code Converter</h1>
      <div className="switch">
        <p>{eToM ? "English to Morse" : "Morse to English"}</p>
        <button>
          <Switch onClick={handleSwitch} />
        </button>
      </div>
      <div className="textareas">
        <textarea
          onChange={eToM ? morseToEnglish : englishToMorse}
          value={box1}
          cols={30}
          rows={10}
        ></textarea>
        <textarea
          disabled
          onChange={eToM ? englishToMorse : morseToEnglish}
          value={box2}
          cols={30}
          rows={10}
          readOnly={true}
        ></textarea>
      </div>
    </>
  );
};

export default App;
