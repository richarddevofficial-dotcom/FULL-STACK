import { useEffect, useState } from "react";

function CountryExplorer() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  return (
    <div className="grid">
      {countries.slice(0, 20).map((c) => (
        <div key={c.cca3} className="card">
          <img src={c.flags.png} width="100%" />
          <h3>{c.name.common}</h3>
        </div>
      ))}
    </div>
  );
}

export default CountryExplorer;
