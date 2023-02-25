import moment from 'moment';
import { AiOutlineCheck } from 'react-icons/ai';

type Props = {
  date: Date;
}
const DayButton = ({date}:Props) => {
  

  return (
    <>
      <div><AiOutlineCheck/></div>
      <abbr aria-label={moment(date).format('yyyy년 MM월 D일')}>{moment(date).format('D')}</abbr>
    </>
  )
}

export default DayButton;