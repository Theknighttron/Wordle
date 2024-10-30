import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [solutions, setSolutions] = useState("");
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
    <>
      <h1>RANDOM WORD: {solutions}</h1>
    </>
  );
}

export default App;
