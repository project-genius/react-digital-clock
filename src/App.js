import './App.css';
import React, { useState,  useEffect } from 'react';
function App() {
  const [clockState, setClockState] = useState();
  const [day, setday] = useState();

  function updateTime(date) {
    
    let day =date.getDay();
    let a = new Date();
        let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        let r = weekdays[date.getDay()];
        setday(r);
        setClockState(date.toLocaleTimeString());
  } 

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      updateTime(date); 
    }, 1000);
  }, []);
   
  return (
    <div className="out-div">
   
    <div className="App">
          <div className="day-div"> {day} </div>
          <div className="time-div">{clockState}</div> 
    </div>
    </div>
  );
}

export default App;
