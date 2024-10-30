import { useEffect, useState } from "react";
import Line from "./components/Line";

function App() {
  const [solutions, setSolutions] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
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
    <div className="board flex items-center justify-center bg-sky-50">
      <h1 className="text-red-50">Hi</h1>
      {guesses.map((guess, index) => {
        return <Line key={index} guess={guess} />;
      })}
    </div>
  );
}

export default App;
