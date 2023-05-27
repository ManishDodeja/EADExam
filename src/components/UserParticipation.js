import {useState} from 'react'
export default function UserParticipation({pollData, handleVote, userSelect, handleUser}) {
    
    return (
    <div>
        
        {pollData.choices.map(choice => (
          <li key={choice.id}>
            {!userSelect && <button onClick={() => {
                handleVote(choice.id)
                handleUser(true)
            }}> 
            {choice.label}
            </button>    
            }
            
          </li>
        ))}

    </div>
  )
}
