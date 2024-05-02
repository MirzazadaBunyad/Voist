import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../Icon/Calendar";
import styles from "./index.module.scss";

function DatePickerComponent({
  startDateFilter,
  endDateFilter,
  setStartDateFilter,
  setEndDateFilter,
}) {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDateFilter(date);
    if (date > endDateFilter) {
      setEndDateFilter(date);
    }
    setOpen(false);
  };

  const handleEndDateChange = (date) => {
    setEndDateFilter(date);
    setOpen(false);
  };

  return (
    <div className={styles.date}>
      <CalendarIcon color={open ? "#2BB534" : "#1D2B21"} />
      <DatePicker
        selected={startDateFilter}
        onChange={handleStartDateChange}
        dateFormat="MMM dd, yyyy"
        customInput={<></>}
        onClickOutside={() => {
          startDateRef.current.setOpen(false);
          setOpen(false);
        }}
        ref={startDateRef}
      />
      <div className={styles.currentDate}>
        <p
          onClick={() => {
            startDateRef.current.setOpen(true);
            setOpen(true);
          }}
        >
          {startDateFilter.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
        <p>-</p>
        <p
          onClick={() => {
            endDateRef.current.setOpen(true);
            setOpen(true);
          }}
        >
          {endDateFilter.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>

      <DatePicker
        selected={endDateFilter}
        onChange={handleEndDateChange}
        dateFormat="MMM dd, yyyy"
        minDate={startDateFilter}
        customInput={<></>}
        ref={endDateRef}
        onClickOutside={() => {
          endDateRef.current.setOpen(false);
          setOpen(false);
        }}
      />
    </div>
  );
}

export default DatePickerComponent;
