const moment = require("moment/moment");

const formDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export default formDate;
