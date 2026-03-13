import React from "react";

function FilterTabs({ filter, setFilter }) {
  const tabs = ["All", "Completed", "Pending"];

  return (
    <div className="filters">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`filter-btn ${filter === tab ? "active" : ""}`}
          onClick={() => setFilter(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
