import logo from './logo.svg';
import './App.css';


function App() {

    const date= new Date();

    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift(PLDate - i);
        }
      }
      
      for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
      }

      const dates = prevDates.concat(thisDates, nextDates);

    dates.forEach((date, i) => {
      dates[i] = `<div class="date">${date}</div>`;
    })

    document.querySelector('.dates').innerHTML = dates.join('');
    return(
      <div class="main">
        <div class="days">
            <div class="day">일</div>
            <div class="day">월</div>
            <div class="day">화</div>
            <div class="day">수</div>
            <div class="day">목</div>
            <div class="day">금</div>
            <div class="day">토</div>
        </div>
        <div class="dates"></div>
        </div>
    );
}

export default App;
