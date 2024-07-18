import React, { useState, useEffect } from "react";

const Body = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timer = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    const date = `1 January ${year + 1}`;
    const newDate = new Date(date);

    const diff = (newDate - currentDate) / 1000;

    setDays(Math.floor(diff / 3600 / 24));
    setHours(Math.floor(diff / 3600) % 24);
    setMinutes(Math.floor(diff / 60) % 60);
    setSeconds(Math.floor(diff) % 60);
  };
  useEffect(() => {
    setTimeout(() => {
      timer();
    }, 1000);
  });
  let colStyle = { fontSize: "3rem" };
  let pStyle = { fontSize: "1.2rem" };
  return (
    <div className="container d-flex align-items-center flex-column justify-content-center">
      <h1 style={{ marginBottom: "10vh", marginTop: "20vh", fontSize: "4rem" }}>
        Time until new year.
      </h1>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col mr-1" style={colStyle}>
          {days}
          <p style={pStyle}>Days</p>
        </div>
        <div className="col mr-1" style={colStyle}>
          {hours}
          <p style={pStyle}>Hours</p>
        </div>
        <div className="col mr-1" style={colStyle}>
          {minutes}
          <p style={pStyle}>Minutes</p>
        </div>
        <div className="col mr-1" style={colStyle}>
          {seconds}
          <p style={pStyle}>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
