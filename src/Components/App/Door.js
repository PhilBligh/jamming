import { useState } from "react";
import closedDoor from "./lockedDoor.png"
import openDoor from "./unlockedDoor.png"


export const Door = (props) => {
  
  const [doorLocked, updateDoor] = useState(true)

  const handleClick = () => {
    if (props.hasKey) { 
      updateDoor(!doorLocked) 
  }}
  return doorLocked ?  (
    <div className="Door">
      <img src={closedDoor} onClick={handleClick}/>
    </div>
  ) : (
    <div className="Door">
      <img src={openDoor} onClick={handleClick}/>
    </div>)
}

