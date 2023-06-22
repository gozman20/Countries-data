import React, { useState } from "react";

export default function DropDown({ selected, setSelected, setSearchParams }) {
  const [isActive, setIsActive] = useState(false);

  const continents = [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {continents.map((item, index) => (
            <div
              key={index}
              value="country"
              className="dropdown-item"
              onClick={() => {
                setSelected(item);
                setIsActive(false);

                setSearchParams({ continents: item });
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
