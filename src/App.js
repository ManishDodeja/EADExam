import React, { useState } from 'react';
import AnotherUserParticipation from './components/AnotherUserParticipation';
import PollDisplay from './components/PollDisplay';
import ThankyouMessage from './components/ThankyouMessage';

import UserParticipation from './components/UserParticipation';


const App = () => {
  // for managing poll data and method handle vote for managing data
  const [pollData, setPollData] = useState({
    question: "What is your favorite programming language?",
    choices: [
      { id: 1, label: "JavaScript", votes: 0 },
      { id: 2, label: "Python", votes: 0 },
      { id: 3, label: "Java", votes: 0 },
      { id: 4, label: "C#", votes: 0 }
    ]
  });

  const handleVote = (choiceId) => {
    const updatedPollData = {
      ...pollData,
      choices: pollData.choices.map(choice =>
        choice.id === choiceId ? { ...choice, votes: choice.votes + 1 } : choice
      )
    };
    setPollData(updatedPollData);
  };

  // this is when user selected then avoid voting again
  const [userSelect , setUserSelect]=useState(false)
  const handleUser =(state)=>{
    setUserSelect(state)
  }

  // this is when user want to reset the selected vote 
  const [resetSelect, setResetSelect]=useState(false)
  const handleResetSelect =(state)=>{
    setResetSelect(state)
  }

  
  return (
    <div>
      <h1>Poll App</h1>
      <PollDisplay pollData={pollData} />
      <UserParticipation pollData={pollData} handleVote={handleVote} userSelect={userSelect} handleUser={handleUser} />
      
      {userSelect && (<AnotherUserParticipation />)}
      {userSelect && (<ThankyouMessage/>)}

    </div>
  );
};

export default App;
