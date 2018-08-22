import React from 'react';
import 'tachyons';

const SearchBox =({searchfield, searchChange}) =>{
  return (
  <div className = 'pa2'>
  <input className = 'p3 bt bl' type = 'search' placeholder = "Search" onChange ={searchChange}></input>
  </div>
  );
}
export default SearchBox;