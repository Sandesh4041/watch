import logo from './logo.svg';
import './App.css';
import './index.css';
import { useEffect, useState } from 'react';

function App() {

const[time,setTime]=useState(0);
const[isrunning,setIsRunning]=useState(false);
const[intervalId,setIntervalId]=useState(null);

useEffect(()=>{
  if(isrunning){
    const id=setInterval(() => {
      setTime(prevTime=>prevTime+1);
    }, 1000);
    setIntervalId(id);
  }
  else{
    if(intervalId){
      clearInterval(intervalId);
    }
  }
  return()=>{
    if(intervalId){
      clearInterval(intervalId);
    }
  }
},[isrunning])




const Start=()=>{
setIsRunning(true);
}

const Stop=()=>{
  setIsRunning(false);
}

const Reset=()=>{
  setIsRunning(false);
  setTime(0);
}



  const hours=Math.floor(time/3600);
  const minutes=Math.floor((time%3600)/60);
  const seconds=Math.floor(time%60);

  const changeHours=hours<10?"0"+hours:hours;
  const changeMinutes=minutes<10?"0"+minutes:minutes;
  const changeSeconds=seconds<10?"0"+seconds:seconds;
  
  return(
    <div className="stopwatchContainer">
      <div className="stylistContainer">
      <h1>STOP WATCH</h1>
      <div className="spanContainer">
      <span>{changeHours}:</span>
    <span>{changeMinutes}:</span>
    <span>{changeSeconds}</span>
      </div>
   <br />
    <button className='btn' onClick={Start}>start</button>
    <button className='btn' onClick={Stop}>stop</button>
    <button className='btn' onClick={Reset}>Reset</button>
      </div>
   
  </div>
)


}

export default App;
