import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import moment, { Moment as MomentTypes } from 'moment';


function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value}  />
      <hr></hr>
      <div className="text-gray-500 mt-4">
        
           {moment(value).format("YYYY.MM.DD")} 
           
         </div>
         
    </div>
    
  );

}

export default App;
