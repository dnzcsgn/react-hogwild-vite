import React, { useState } from "react";
import HogList from "../HogList";
import HogFilter from "../HogFilter";
import HogForm from "../HogForm";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
  const [hogsList, setHogsList] = useState(hogs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function handleHide(hogToHide) {
    setHogsList((prev) => prev.filter((hog) => hog !== hogToHide));
  }

  function addNewHog(newHog) {
    setHogsList((prevHogs) => [...prevHogs, newHog]);
  }

  function getFilteredHogs() {
    let filtered = [...hogsList];

    if (filterGreased) {
      filtered = filtered.filter((hog) => hog.greased);
    }

    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      filtered.sort((a, b) => a.weight - b.weight);
    }

    return filtered;
  }

  return (
    <div className="App">
      <Nav />
      <HogForm onAddHog={addNewHog} />
      <HogFilter
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogList hogs={getFilteredHogs()} onHide={handleHide} />
    </div>
  );
}

export default App;
