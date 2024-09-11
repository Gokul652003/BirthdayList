import React from 'react'

const People = ({id,name,age,image}) => {
    
    
  return (
    <div className='peopleList'>
      <div className='peopleimg'>
        <img src={image} alt={name} />
      </div>
      <div className='peopleDetails'>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}

export default People
