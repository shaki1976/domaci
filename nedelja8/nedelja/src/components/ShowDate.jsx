import "./ShowDate.css";

const ShowDate = ({ date }) => {
  let getMonth = (date) => {
    //let date = new Date();
    let month = date.getMonth();

    switch (month) {
      case 0:
        return "Januaru";
      case 1:
        return "Februaru";
      case 2:
        return "Martu";
      case 3:
        return "Aprilu";
      case 4:
        return "Maju";
      case 5:
        return "Junu";
      case 6:
        return "Julu";
      case 7:
        return "Augustu";
      case 8:
        return "Septembru";
      case 9:
        return "Oktobru";
      case 10:
        return "Novembru";
      case 11:
        return "Decembru";
      default:
        return -1;
    }
  };

  let getYear = (date) => {
    return date.getFullYear();
  };

  return (
    <div className="budget__title">
      Dostupan budžet u {getMonth(date)} {getYear(date)}
    </div>
  );
};

export default ShowDate;
