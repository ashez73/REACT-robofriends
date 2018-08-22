import React from 'react';

const Scroll = (props) =>{
  return (
    <div style = {{overflowY:'scroll', border:'1px dotted black', height:'400px' }}>
      {props.children}
      </div>
  )
};
export default Scroll;