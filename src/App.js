import React, { useState } from 'react';
import AnotherUserParticipation from './components/AnotherUserParticipation';
import PollDisplay from './components/PollDisplay';

import UserParticipation from './components/UserParticipation';


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
  
  const [userSelect , setUserSelect]=useState(false)

  const handleUser =(state)=>{
    setUserSelect(state)
  }

  const [resetSelect, setResetSelect]=useState(false)
  const handleResetSelect =(state)=>{
    setResetSelect(state)
  }

  const handleVote = (choiceId) => {
    const updatedPollData = {
      ...pollData,
      choices: pollData.choices.map(choice =>
        choice.id === choiceId ? { ...choice, votes: choice.votes + 1 } : choice
      )
    };
    setPollData(updatedPollData);
  };

  return (
    <div>
      <h1>Poll App</h1>
      <PollDisplay pollData={pollData} />
      <UserParticipation pollData={pollData} handleVote={handleVote} userSelect={userSelect} handleUser={handleUser} />
      
      {userSelect && (<AnotherUserParticipation />)}

    </div>
  );
};

export default App;
