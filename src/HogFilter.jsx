function HogFilter({ filterGreased, setFilterGreased, sortBy, setSortBy }) {
  return (
    <div>
      <label>
        Greased Pigs Only?
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
      </label>

      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default HogFilter;
