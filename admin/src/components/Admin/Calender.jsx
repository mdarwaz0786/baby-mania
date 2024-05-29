const Calendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysArray = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const renderCalendarRows = () => {
    const rows = [];
    let cells = [];

    daysArray.forEach((day, index) => {
      if (index % 7 !== 0) {
        cells.push(
          <td
            key={index}
            className="text-center align-middle border"
            style={{ height: "60px", width: "60px" }}
          >
            {day === currentDate ? (
              <span className="badge bg-primary" style={{ fontSize: "1.2em" }}>
                {day}
              </span>
            ) : (
              day
            )}
          </td>
        );
      } else {
        rows.push(<tr key={index}>{cells}</tr>);
        cells = [];
        cells.push(
          <td
            key={index}
            className="text-center align-middle border"
            style={{ height: "60px", width: "60px" }}
          >
            {day === currentDate ? (
              <span className="badge bg-primary" style={{ fontSize: "1.2em" }}>
                {day}
              </span>
            ) : (
              day
            )}
          </td>
        );
      }
      if (index === daysArray.length - 1) {
        rows.push(<tr key={index}>{cells}</tr>);
      }
    });
    return rows;
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">
        {monthNames[currentMonth]} {currentYear}
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <th key={index} className="text-center">
                  {day}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>{renderCalendarRows()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
