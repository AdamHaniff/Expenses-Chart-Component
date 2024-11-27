import ExpenseBarDay from "./ExpenseBarDay";
import Total from "./Total";
import { useState, useEffect } from "react";

// VARIABLES
const expenses = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

export default function Spending() {
  // STATE
  const [dayOfWeek, setDayOfWeek] = useState("");

  // EFFECTS
  useEffect(function () {
    // Get today's date
    const today = new Date();

    // Format the date to get the abbreviated weekday and update 'dayOfWeek'
    const formattedDay = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    })
      .format(today)
      .toLowerCase();

    setDayOfWeek(formattedDay);
  }, []);

  return (
    <div className="spending">
      <h2 className="spending__label">Spending - Last 7 days</h2>
      <div className="spending__chart">
        {expenses.map((expense) => (
          <ExpenseBarDay
            key={expense.day}
            expense={expense}
            dayOfWeek={dayOfWeek}
          />
        ))}
      </div>
      <Total />
    </div>
  );
}
