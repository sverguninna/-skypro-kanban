import * as S from "./Calendar.styled"
import { useState, useEffect } from "react"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
function Calendar({ setFormData, formData }) {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);


  useEffect(()=>{
    if (selectedDate) {
      setFormData({...formData, date: selectedDate})
    } 
  }, [selectedDate])


  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  console.log(selectedDate);

/*   function getDate(date) {
  `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}` }
getDate(selectedDate); */


  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const firstDayWeekday = (firstDay.getDay() + 6) % 7;

    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const calendarDays = [];

    // Предыдущий месяц
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = 0; i < firstDayWeekday; i++) {
      const day = prevMonthLastDay - firstDayWeekday + i + 1;
      calendarDays.push({
        date: new Date(year, month - 1, day),
        isCurrentMonth: false
      });
    }

    // Текущий месяц
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }

    // Следующий месяц
    const totalCells = calendarDays.length > 35 ? 42 : 35;
    const nextMonthDays = totalCells - calendarDays.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      calendarDays.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }

    return calendarDays;
  };

  const handleDateClick = (date) => {
    if (date.getMonth() !== currentDate.getMonth() ||
      date.getFullYear() !== currentDate.getFullYear()) {
      setCurrentDate(new Date(date.getFullYear(), date.getMonth()));
    }
    setSelectedDate(`${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`);
    
  };



  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };



  const calendarDays = generateCalendar(currentDate);

    return (


    <S.PopCardCalendar /*  className="pop-new-card__calendar calendar" */>
      <S.CalendarTtl >Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction onClick={() => setCurrentDate(new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() - 1
            ))} data-action="prev">
              <S.NavActionSVG xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </S.NavActionSVG>
            </S.NavAction>
            <S.NavAction onClick={() => setCurrentDate(new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1
            ))} data-action="next">
              <S.NavActionSVG xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </S.NavActionSVG>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDaysNames>
            {dayNames.map(day => (
              <S.CalendarDayName key={day} >{day}</S.CalendarDayName>
            ))}
          </S.CalendarDaysNames>


          <S.CalendarCells>
            
            <S.CalendarCellWeek  >
                
        {calendarDays.map((day, index) => (
           <S.CalendarCell
            key={index}
            className={`calendar-day 
               
              ${isToday(day.date) ? 'today' : ''}
             `}
            onClick={() => handleDateClick(day.date)}
          >
            {day.date.getDate()}
              </S.CalendarCell>
        ))}
      

            </S.CalendarCellWeek>

          </S.CalendarCells>
       
        </S.CalendarContent>
        <S.CalendarPeriod>
          <S.CalendarP>Выберите срок исполнения <S.CalendarPSpan>{selectedDate} </S.CalendarPSpan>.</S.CalendarP>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.PopCardCalendar>
  )
}

export default Calendar