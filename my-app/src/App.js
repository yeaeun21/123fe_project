import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import moment, { Moment as MomentTypes } from 'moment';

function Tap(){
  return(
    <div>
      <button class="b" id="b1"></button>
      <button class="b" id="b2"></button>
      <button class="b" id="b3"></button>
    </div>
  )
}

function App() {

  const [value, onChange] = useState(new Date());
  //하이라이트가 들어갈 날짜를 배열로 작성
  const marks = [
    "2022-05-15",
    "2022-05-03",
    "2022-05-07",
    "2022-05-12",
  ];
  
 
  return (
    
    <div>
      <Tap></Tap>
      <Calendar 
        onChange={onChange} 
        value={value} 
        //date와 marks를 비교하며 해당되는 날짜에 highlight를 클래스명으로 줌
        //maxDate={new Date()}
        // formatDay={(locale, date) =>
        //   date.toLocaleString("en", { day: "numeric" })
        // }
        formatDay={(locale, date) => moment(date).format("DD")} 
        // formatMonth={(locale, date) => moment(date).format("MM")} 
        //className="mx-auto w-full text-sm border-b"
        tileClassName={({ date, view }) => {// 날짜 타일에 컨텐츠 추가하기
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
        }}
        tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="todo"></div>);
          }
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div className="flex justify-center items-center absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
      />
      <hr></hr>
      <div>
           {moment(value).format("YYYY.MM.DD")} 
         </div>
         
    </div>
    
  );

}

export default App;
