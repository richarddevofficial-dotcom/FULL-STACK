import React from "react";
import StudentCard from "./components/StudentCard";
import Product from "./components/Product";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div className="container">
      <h1>React Props Practice</h1>

      {/* StudentCard rendered 3 times */}
      <StudentCard name="John Doe" course="Computer Science" age={22} />
      <StudentCard name="Sarah Ali" course="Software Engineering" age={21} />
      <StudentCard name="David Mark" course="Information Systems" age={23} />

      {/* Product rendered 4 times */}
      <Product name="Laptop" price={1200} inStock={true} />
      <Product name="Smartphone" price={800} inStock={false} />
      <Product name="Keyboard" price={50} inStock={true} />
      <Product name="Monitor" price={300} inStock={false} />

      {/* WelcomeMessage rendered twice */}
      <WelcomeMessage username="Drichi" isLoggedIn={true} />
      <WelcomeMessage username="Guest" isLoggedIn={false} />
    </div>
  );
}

export default App;
