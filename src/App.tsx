import React, { useState } from "react";
import {
  LetterFreqType,
  calculateLetterFrequencies,
} from "./helpers/calculate";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [frequencies, setFrequencies] = useState<LetterFreqType>({});

  const handleButtonClcik = (someText: string) => {
    setFrequencies(calculateLetterFrequencies(someText));
  };

  return (
    <div className="container wrapper">
      <div className="row center-xs">
        <div className="col-xs-12 flex dir-col middle-xs">
          <h1>Letter Frequencies</h1>
          <textarea
            className="textarea"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button" onClick={() => handleButtonClcik(text)}>
            CALCULATE
          </button>
          <div className="output-wrapper">
            <h1>Results</h1>
            <div className="row">
              {Object.entries(frequencies).length ? (
                Object.entries(frequencies).map(([key, value]) => {
                  return (
                    <div className="col-xs-3 col-md-2" key={key}>
                      <div key={key} className="pair">
                        {key} : {value}
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1>No text entered or text does not include any alphabetic letter</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
