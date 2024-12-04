import ExpenseBarDay from "./ExpenseBarDay";
import Total from "./Total";
import Error from "./Error";
import { useState, useEffect } from "react";

export default function Spending() {
  // STATE
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      // Fetch expenses data from JSON server
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/expensesd");

        // Handle non-OK responses
        if (!response.ok) {
          throw new Error("⚠Couldn't fetch the data⚠");
        }

        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="spending">
      <h2 className="spending__label">Spending - Last 7 days</h2>
      {isError ? (
        <Error errorMessage={errorMessage} />
      ) : (
        <div className="spending__chart">
          {expenses.map((expense) => (
            <ExpenseBarDay
              key={expense.day}
              expense={expense}
              dayOfWeek={dayOfWeek}
            />
          ))}
        </div>
      )}
      <Total />
    </div>
  );
}
