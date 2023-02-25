import moment from 'moment';

type Props = {
  date: Date;
}
const DayButton = ({date}:Props) => {
  return (
    <button>
      <div>1</div>
      <abbr aria-label={moment(date).format('yyyy년 MM월 D일')}>{moment(date).format('D')}</abbr>
    </button>
  )
}

export default DayButton;