import React from 'react';
const Card = ({id, username, email}) => {
  return (
    <div className ='w5 bg-light-gray tc dib br3 pa3 ma2 grow bw2 shadow-3'>
      <img alt='robo' src = {`https://robohash.org/${id}?size=170x170`}/>
      <div>
        <h2 >{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;