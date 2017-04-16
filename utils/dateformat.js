import Moment from 'moment'

const DateTimeF = d => {
  return d !== undefined && Moment(d).isValid() ? Moment(d).format('YYYY-MM-DD HH:mm:ss') : null;
}

const DateF = d => {
  return d !== undefined && Moment(d).isValid() ? Moment(d).format('YYYY-MM-DD') : null;
}

const TimeF = d => {
  return d !== undefined && Moment(d).isValid() ? Moment(d).format('HH:mm:ss') : null;
}

export default {
  DateTimeF,
  DateF,
  TimeF
}