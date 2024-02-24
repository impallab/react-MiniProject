import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [scoreList, setScoreList] = useState([]);

  const addSix = () => {
    setScore(score + 6);
  }

  const addFour = () => {
    setScore(score + 4);
  }

  const add = () => {
    setScore(score + 1);
  }

  const sub = () => {
    if(score==0){
      setScore(score-0);
    }
    else{
      setScore(score - 1);
    }
  }

  const reset = () => {
    setScore(0);
  }

  const save = () => {
    if (playerName && score >=0 ) {
      // Create a new entry with playerName and score, and add it to the scoreList
      const newScoreEntry = { player: playerName, score };
      setScoreList([...scoreList, newScoreEntry]);
      // Clear the playerName and reset the score
      setPlayerName('');
      setScore(0);
    }
  }

  return (
    <>
      <h2>COUNT THE SCORE</h2>
      <h4>score: {score}</h4>
      <input
        type="text"
        placeholder="Enter player name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={addSix}>Increase by 6</button>
      <button onClick={addFour}>Increase by 4</button>
      <button onClick={add}>Increase by 1</button>
      <button onClick={sub}>Decrease by 1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={save}>Save</button>
      <table>
        <thead>
          <tr>
            <th id='player'>Player</th>
            <th id='score'>Score</th>
          </tr>
        </thead>
        <tbody>
          {scoreList.map((entry, index) => (
            <tr key={index}>
              <td>{entry.player}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
