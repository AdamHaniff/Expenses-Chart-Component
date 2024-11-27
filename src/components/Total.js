export default function Total() {
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
