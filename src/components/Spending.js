import ExpenseBarDay from "./ExpenseBarDay";
import Total from "./Total";
import { useState, useEffect } from "react";

export default function Spending() {
  // STATE
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [expenses, setExpenses] = useState([]);

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

  useEffect(() => {
    const fetchExpenses = async () => {
      // Fetch expenses data
      try {
        const response = await fetch("http://localhost:8000/expenses");
        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExpenses();
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
