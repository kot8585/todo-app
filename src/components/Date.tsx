import Calendar, { CalendarTileProperties, Detail } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

import DayButton from './DayButton';

const DateTodo = () => {

  const [value, onChange] = useState(new Date());
  console.log('value', value);
  return (
    <>
    <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar 
            next2Label={null}
            prev2Label={null}
            defaultView='month'
            formatDay={(locale, date) => ''}
            tileContent={({date}) => <DayButton date={date}/>}
            value={value} />
        </main>
      </div>
    </>
  )
}

export default DateTodo;