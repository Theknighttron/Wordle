const WORD_LENGTH = 5;

export default function Line(guess = " ") {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i] || "";
    tiles.push(
      <div key={i} className="tile">
        {char}
      </div>,
    );
  }
  return (
    <>
      <div className="tile">{tiles}</div>
    </>
  );
}
