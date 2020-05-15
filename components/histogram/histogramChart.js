import { useState, useEffect } from "react";
import { ResponsiveCalendarCanvas } from '@nivo/calendar'

export default (props) => {
  const [dates, setDates] = useState([])
  const getDates = (startDate, stopDate) => {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = addDays(currentDate, 1);
    }
    return dateArray;
  }
  const addDays = (d, days) => {
    let date = new Date(d.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  useEffect(() => {
    let d = getDates(Date.parse(`20${props.timestamp.from[1]}-${props.timestamp.from[0]}-01`), Date.parse(`20${props.timestamp.till[1]}-${props.timestamp.till[0]}-01`))
    let formatDates = d.map(date => { return { day: date.toISOString().split('T')[0], value: 164 } })
    setDates(formatDates)
  }, [])
  return (
    <>
      <p>{`${props.timestamp.from[0] <= 9 ? 0 : ""}${props.timestamp.from[0]}.${props.timestamp.from[1]} - ${props.timestamp.till[0] <= 9 ? 0 : ""}${props.timestamp.till[0]}.${props.timestamp.till[1]} (${props.timestamp.sum[0]} ${props.timestamp.sum[1]})`}</p>

      <ResponsiveCalendarCanvas
        data={dates}
        id={props.id}
        className={props.className}
        from={`20${props.timestamp.from[1]}-${props.timestamp.from[0]}-01`}
        to={`20${props.timestamp.till[1]}-${props.timestamp.till[0]}-01`}
        emptyColor="#eeeeee"
        colors={['#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        labelTextColor={{ theme: 'background' }}

      />
    </>
  );
};
