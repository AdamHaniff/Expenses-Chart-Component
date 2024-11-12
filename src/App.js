import { useEffect } from "react";

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

export default function App() {
  return (
    <div className="app">
      <Balance />
      <Spending />
    </div>
  );
}

function Balance() {
  return (
    <div className="balance">
      <div className="balance__info">
        <span className="balance__label">My balance</span>
        <span className="balance__number">$921.48</span>
      </div>
      <img className="balance__logo" src="images/logo.svg" alt="Logo" />
    </div>
  );
}

function Spending() {
  // EFFECTS
  useEffect(function () {
    // Get today's date
    const today = new Date();

    // Format the date to get the abbreviated day name
    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    })
      .format(today)
      .toLowerCase();
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

function ExpenseBarDay({ expense, dayOfWeek }) {
  // VARIABLES
  const isToday = dayOfWeek === expense.day;

  return (
    <div className="spending__expense-bar-day">
      <span className="spending__expense">{expense.amount}</span>
      <div
        className="spending__bar"
        style={{ height: `${expense.amount * 2.866}px` }}
      ></div>
      <span className="spending__day">{expense.day}</span>
    </div>
  );
}

function Total() {
  return (
    <div className="total">
      <div className="total__this-month">
        <span className="total__label">Total this month</span>
        <span className="total__spent">$478.33</span>
      </div>
      <div className="total__last-month">
        <span className="total__percentage">+2.4%</span>
        <span className="total__label">from last month</span>
      </div>
    </div>
  );
}
