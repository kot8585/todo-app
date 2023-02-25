import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

import DayButton from './DayButton';

type Props = {
  value: Date,
  onChange: React.Dispatch<React.SetStateAction<Date>>,
}
const DateTodo = ({value, onChange}:Props) => {

  return (
    <>
    <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar 
            next2Label={null}
            prev2Label={null}
            defaultView='month'
            formatDay={() => ''}
            tileContent={({date}) => <DayButton date={date}/>}
            onChange={onChange}
            value={value} />
        </main>
      </div>
    </>
  )
}

export default DateTodo;