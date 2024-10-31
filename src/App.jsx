import { useEffect, useState } from "react";
import Line from "./components/Line";

function App() {
  const [solutions, setSolutions] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    const handleType = (event) => {
      if (event.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5) return;
      if (event.key.match(/^[a-zA-Z]$/)) {
        setCurrentGuess((prev) => prev + event.key.toLowerCase());
      }
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess]);

  // Fetch data on mounts
  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch("/wordle-words");
      const words = await response.json();
      const rand = Math.floor(Math.random() * words.length);
      const randomWord = words[rand];
      setSolutions(randomWord);
    };

    fetchWord();
  }, []);
  return (
    <div className="board">
      {guesses.map((guess, index) => {
        const isCurrentGuess =
          index === guesses.findIndex((val) => val === null);
        return (
          <Line
            key={index}
            guess={isCurrentGuess ? currentGuess : (guess ?? "")}
          />
        );
      })}
    </div>
  );
}

export default App;
