import React,{useState} from 'react';


function Room() {

    let[isLit,setLit]=useState(false);
    let[age,setAge]=useState(23);
    
    const increaseAge = ()=>{
        console.log("increasing age");
        setAge(++age);
    }
    
  return (
    <div>
      This is a Room is {isLit ? "lit":"dark"}
      <br />
      Age : {age}
      <br />
      <button onClick={()=>setLit(!isLit)}>Toggle Light</button>
      <br />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default Room;
