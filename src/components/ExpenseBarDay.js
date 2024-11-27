import { useState } from "react";

export default function ExpenseBarDay({ expense, dayOfWeek }) {
  // STATE
  const [isBarHovered, setIsBarHovered] = useState(false);

  // VARIABLES
  const isToday = dayOfWeek === expense.day;

  // HANDLER FUNCTIONS
  const handleMouseEnter = () => setIsBarHovered(true);
  const handleMouseLeave = () => setIsBarHovered(false);

  return (
    <div className="spending__expense-bar-day">
      <div className="spending__expense-bar">
        {isBarHovered && (
          <span className="spending__expense">${expense.amount}</span>
        )}
        <div
          className={`spending__bar ${isToday ? "color-neptune-bg" : ""}`}
          style={{ height: `${expense.amount * 2.866}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
      <span className="spending__day">{expense.day}</span>
    </div>
  );
}
