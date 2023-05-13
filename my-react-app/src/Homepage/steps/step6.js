import React, { useState } from "react";

import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";

import "react-date-range/dist/theme/default.css";

import "./Leaves.css";

import Avatar from "@mui/material/Avatar";

// import { useEffect } from "react";

import { useLocation } from "react-router-dom";

// import { parseISO } from "date-fns";

const Leaves = (props) => {
    const {handleNext}=props
  const [calendar, setCalendar] = useState([
    {
      startDate: new Date(),

      endDate: new Date(),

      key: "selection",
    },
  ]);

  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);

  const location = useLocation();

  //   useEffect(() => {
  //     fetch(`http://localhost:8080/profile?userid=${location.state.userid}`)
  //       .then((response) => response.json())

  //       .then((data) => setData(data))

  //       .catch((error) => console.error(error));
  //   }, []);

  //   useEffect(() => {
  //     fetch(`http://localhost:8080/leaveBalance?userid=${location.state.userid}`)
  //       .then((response) => response.json())

  //       .then((data1) => setData1(data1))

  //       .catch((error) => console.error(error));
  //   }, []);

  //   console.log(data1);

  //   console.log(location.state.userid);

  //   console.log(location.state.userid, "userid");

  const formatDate = (calendar) => {
    const year = calendar.getFullYear();

    const month = calendar.getMonth() + 1;

    const day = calendar.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day

      .toString()

      .padStart(2, "0")}`;
  };

  console.log("formDate", formatDate);

  const [fromDate, setFromDate] = useState(new Date());

  const [toDate, setToDate] = useState(new Date());

  const [selectedLeaveType, setSelectedLeaveType] = useState();

  const [noOfDays, setnoOfDays] = useState(null);

  const handleCalendarChange = (ranges) => {
    setCalendar([ranges.selection]);

    setFromDate(ranges.selection.startDate);

    setToDate(ranges.selection.endDate);
  };

  const handleFromDateChange = (e) => {
    const newFromDate = new Date(
      fromDate.getFullYear(),

      fromDate.getMonth(),

      e.target.value
    );

    setFromDate(newFromDate);

    setCalendar([{ ...calendar[0], startDate: newFromDate }]);
  };

  const handleFromMonthChange = (e) => {
    const newFromDate = new Date(
      fromDate.getFullYear(),

      e.target.value,

      fromDate.getDate()
    );

    setFromDate(newFromDate);

    setCalendar([{ ...calendar[0], startDate: newFromDate }]);
  };

  console.log(calendar, "date-cha");

  const handleFromYearChange = (e) => {
    const newFromDate = new Date(
      e.target.value,

      fromDate.getMonth(),

      fromDate.getDate()
    );

    setFromDate(newFromDate);

    setCalendar([{ ...calendar[0], startDate: newFromDate }]);
  };

  console.log(fromDate);

  const handleToDateChange = (e) => {
    const newToDate = new Date(
      toDate.getFullYear(),

      toDate.getMonth(),

      e.target.value
    );

    setToDate(newToDate);

    setCalendar([{ ...calendar[0], endDate: newToDate }]);
  };

  const handleToMonthChange = (e) => {
    const newToDate = new Date(
      toDate.getFullYear(),

      e.target.value,

      toDate.getDate()
    );

    setToDate(newToDate);

    setCalendar([{ ...calendar[0], endDate: newToDate }]);
  };

  const handleToYearChange = (e) => {
    const newToDate = new Date(
      e.target.value,

      toDate.getMonth(),

      toDate.getDate()
    );

    setToDate(newToDate);

    setCalendar([{ ...calendar[0], endDate: newToDate }]);
  };

  const handleLeaveTypeChange = (e) => {
    setSelectedLeaveType(e.target.value);

    setCalendar([{ ...calendar[0], Leavetype: e.target.value }]);
  };

  console.log("selected-leave", selectedLeaveType);

  const handleNoOfDaysChange = (e) => {
    setnoOfDays(e.target.value);

    setCalendar([{ ...calendar[0], NoofDays: e.target.value }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedFromDate = formatDate(fromDate);

    const formattedToDate = formatDate(toDate); // const parsedFromDate=parseISO(formattedFromDate); // const parsedToDate=parseISO(formattedToDate); // setFromDate(formattedFromDate);

    calendar[0].endDate = formattedToDate;

    calendar[0].startDate = formattedFromDate;

    console.log(calendar[0], "date-cha");

    console.log("From date:", formattedFromDate);

    console.log("To date:", formattedToDate); // console.log("parse",parsedToDate,parsedFromDate)

    setCalendar([{ ...calendar[0], userid: 1 }]);

    setCalendar([{ ...calendar[0], empName: data.fullname }]);
    handleNext()

    sendLeaveRequest();
  };

    const sendLeaveRequest = async () => {
      try {
        const response = await fetch("http://localhost:3001/applyLeave", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(calendar[0]),
        });

        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>
           {" "}
      <header>
               {" "}
        <h3
          style={{
            textAlign: "right",

            color: "blue",

            marginBottom: "0",

            marginTop: "5px",
          }}
        >
                    HCLTech        {" "}
        </h3>
             {" "}
      </header>
           {" "}
      <div className="details-container">
               {" "}
        <div>
                   {" "}
          <Avatar
            alt={data.fullname}
            src="/static/images/avatar"
            style={{ color: "black" }}
          />
                 {" "}
        </div>
               {" "}
        <div>
                    <p className="para-container"> {data.fullname}</p>         {" "}
          <p className="para-container1">{data.designation}</p>       {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="app-container">
               {" "}
        <div className="leave-container">
                   {" "}
          <p style={{ marginBottom: "0", fontWeight: "600" }}>
                        Leave application          {" "}
          </p>
                   {" "}
          <div className="leave-data-container">
                       {" "}
            <div className="leaves-from">
                           {" "}
              <div className="from-date-container">
                               {" "}
                <div style={{ marginRight: "60px" }}>
                                    <label>From</label>               {" "}
                </div>
                               {" "}
                <select
                  value={fromDate.getDate()}
                  onChange={handleFromDateChange}
                  className="from-select-container"
                >
                                   {" "}
                  {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                                            {day + 1}                   {" "}
                    </option>
                  ))}
                                 {" "}
                </select>
                                                                    {" "}
                <select
                  value={fromDate.getMonth()}
                  onChange={handleFromMonthChange}
                  className="from-select-container"
                >
                                   {" "}
                  {[
                    "Jan",

                    "Feb",

                    "Mar",

                    "Apr",

                    "May",

                    "June",

                    "July",

                    "Aug",

                    "Sep",

                    "Oct",

                    "Nov",

                    "Dec",
                  ].map((month, index) => (
                    <option key={index} value={index}>
                                            {month}                   {" "}
                    </option>
                  ))}
                                 {" "}
                </select>
                               {" "}
                <select
                  value={fromDate.getFullYear()}
                  onChange={handleFromYearChange}
                  className="from-select-container"
                >
                                   {" "}
                  {[...Array(10).keys()].map((year) => (
                    <option key={year} value={year + new Date().getFullYear()}>
                                            {year + new Date().getFullYear()}   
                                     {" "}
                    </option>
                  ))}
                                 {" "}
                </select>
                             {" "}
              </div>
                           {" "}
              <div className="to-date-container">
                               {" "}
                <div style={{ marginRight: "80px" }}>
                                    <label>To</label>               {" "}
                </div>
                               {" "}
                <select
                  value={toDate.getDate()}
                  onChange={handleToDateChange}
                  className="to-select-container"
                >
                                   {" "}
                  {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                                            {day + 1}                   {" "}
                    </option>
                  ))}
                                 {" "}
                </select>
                               {" "}
                <select
                  value={toDate.getMonth()}
                  onChange={handleToMonthChange}
                  className="to-select-container"
                >
                                   {" "}
                  {[
                    "Jan",

                    "Feb",

                    "Mar",

                    "Apr",

                    "May",

                    "June",

                    "July",

                    "Aug",

                    "Sep",

                    "Oct",

                    "Nov",

                    "Dec",
                  ].map((month, index) => (
                    <option key={index} value={index}>
                                            {month}                   {" "}
                    </option>
                  ))}
                                 {" "}
                </select>
                               {" "}
                <select
                  value={toDate.getFullYear()}
                  onChange={handleToYearChange}
                  className="to-select-container"
                >
                                   {" "}
                  {[...Array(10).keys()].map((year) => (
                    <option key={year} value={year + new Date().getFullYear()}>
                                            {year + new Date().getFullYear()}   
                                     {" "}
                    </option>
                  ))}
                                 {" "}
                </select>
                             {" "}
              </div>
                           {" "}
              <div className="days-container">
                               {" "}
                <div style={{ marginRight: "20px" }}>
                                    <label>No of days</label>               {" "}
                </div>
                               {" "}
                <select
                  className="days-select-container"
                  onChange={handleNoOfDaysChange}
                  value={noOfDays}
                >
                                    <option>-- Select --</option>               
                    <option>1</option>                  <option>2</option>     
                              <option>3</option>                 {" "}
                  <option>4</option>                  <option>5</option>       
                            <option>6</option>                 {" "}
                  <option>7</option>                  <option>8</option>       
                            <option>9</option>                 {" "}
                  <option>10</option>               {" "}
                </select>
                             {" "}
              </div>
                           {" "}
              <div className="leavetype-container">
                               {" "}
                <div style={{ marginRight: "20px" }}>
                                    <label>Leave type</label>               {" "}
                </div>
                               {" "}
                <select
                  className="leave-select-container"
                  onChange={handleLeaveTypeChange}
                >
                                    <option>-- Select --</option>               
                    <option>Casual leave</option>                 {" "}
                  <option>Annual leave</option>                 {" "}
                  <option>Maternity leave</option>                 {" "}
                  <option>Paternity leave</option>                 {" "}
                  <option>Matrimony leave</option>                 {" "}
                  <option>Bereavement leave</option>               {" "}
                </select>
                                                           {" "}
              </div>
                           {" "}
              <div className="reason-container">
                               {" "}
                <input
                  type="text"
                  placeholder="Type reason here..."
                  style={{ height: "80px", width: "250px" }}
                />
                             {" "}
              </div>
                         {" "}
            </div>
                       {" "}
            <div className="calendar-container">
                           {" "}
              <div className="daterangepicker">
                               {" "}
                <DateRange onChange={handleCalendarChange} ranges={calendar} /> 
                           {" "}
              </div>
                           {" "}
              <div className="button-container">
                               {" "}
                <button className="primary-button" onClick={handleSubmit}>
                                    Apply leave                {" "}
                </button>
                               {" "}
                <button className="secondary-button">Reset</button>             {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
               {" "}
        <div className="balance-container">
                   {" "}
          <div>
                       {" "}
            <p style={{ marginBottom: "0", fontWeight: "600" }}>
                            Your leave balance            {" "}
            </p>
                       {" "}
            <div>
                           {" "}
              <ul className="unlist-container">
                               {" "}
                <li>
                                    <p className="list-para">Casual leave</p>   
                                <p className="list-para1">{data1.casual}</p>   
                             {" "}
                </li>
                               {" "}
                <li>
                                    <p className="list-para">Annual leave</p>   
                                <p className="list-para1">{data1.annual}</p>   
                             {" "}
                </li>
                               {" "}
                <li>
                                    <p className="list-para">Maternity leave</p>
                                   {" "}
                  <p className="list-para1">{data1.maternity}</p>               {" "}
                </li>
                               {" "}
                <li>
                                    <p className="list-para">Paternity leave</p>
                                   {" "}
                  <p className="list-para1">{data1.paternity}</p>               {" "}
                </li>
                               {" "}
                <li>
                                    <p className="list-para">Matrimony leave</p>
                                   {" "}
                  <p className="list-para1">{data1.matrimony}</p>               {" "}
                </li>
                               {" "}
                <li>
                                   {" "}
                  <p className="list-para">Bereavement leave</p>               
                    <p className="list-para1">{data1.bereavement}</p>           
                     {" "}
                </li>
                             {" "}
              </ul>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Leaves;
