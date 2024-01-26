import React, { useEffect, useState } from "react";

function Xcountries() {
  const [Countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data :", err));
  }, []);

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const img = {
    width: "100px",
    height: "100px",
  };

  const container = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <div style={container}>
      {Countries.map((Country) => (
        <div key={Country.cca3} style={cardStyle}>
          <img
            src={Country.flags.png}
            alt={`Flag of ${Country.name.common}`}
            style={img}
          />
          <h2>{Country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default Xcountries;
