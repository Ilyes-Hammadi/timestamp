var moment = require('moment');

exports.getTimestamp = (time) => {
  var date;

  if(/^\d{8,}$/.test(time)) {
    date = moment(time, 'X')
  }else if (/^\d+-\d{2,2}-\d{2,2}$/) {
    date = moment(time, 'YYYY-M-DD')
  } else {
    date = moment(time, 'MMMM DD, YYYY')
  }

  if(date.isValid()){
    return {
      unix: date.format('X'),
      natural: date.format('MMMM DD, YYYY')
    }
  }else {
    return {
      unix: null,
      natural: null
    }
  }
}
