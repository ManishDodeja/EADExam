import React, { useState } from 'react';
import PollDisplay from './components/PollDisplay';


const App = () => {
  const [pollData, setPollData] = useState({
    question: "What is your favorite programming language?",
    choices: [
      { id: 1, label: "JavaScript", votes: 0 },
      { id: 2, label: "Python", votes: 0 },
      { id: 3, label: "Java", votes: 0 },
      { id: 4, label: "C#", votes: 0 }
    ]
  });

  return (
    <div>
      <h1>Poll App</h1>
      <PollDisplay pollData={pollData} />
    </div>
  );
};

export default App;
