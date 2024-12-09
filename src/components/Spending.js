import ExpenseBarDay from "./ExpenseBarDay";
import Total from "./Total";
import ErrorMsg from "./ErrorMsg";
import Spinner from "./Spinner";
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

  // useEffect(() => {
  //   const fetchExpenses = async () => {
  //     // Fetch expenses data from JSON server
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:8000/expenses");

  //       // Handle non-OK responses
  //       if (!response.ok) {
  //         throw new Error("🚨 Couldn't fetch the data 🚨");
  //       }

  //       const data = await response.json();
  //       setExpenses(data);
  //     } catch (err) {
  //       setIsError(true);
  //       setErrorMessage(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchExpenses();
  // }, []);

  return (
    <div className="spending">
      <h2 className="spending__label">Spending - Last 7 days</h2>
      {isLoading ? (
        // Display the Spinner while loading
        <Spinner />
      ) : isError ? (
        // Display the error message if there is an error
        <ErrorMsg errorMessage={errorMessage} />
      ) : (
        // Display the expenses chart if data is successfully loaded
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
