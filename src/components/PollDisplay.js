import React, { useState } from 'react';

const PollDisplay = ({pollData}) => {
  
  return (
    <div>
      <h2 className="question">{pollData.question}</h2>
      <ul>
        {pollData.choices.map(choice => (
          <li key={choice.id}>
            <h3>
              {choice.label} ({choice.votes} votes)
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollDisplay;
