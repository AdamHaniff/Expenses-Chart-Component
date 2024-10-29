export default function App() {
  return (
    <div className="app">
      <Balance />
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

function Spending() {}
