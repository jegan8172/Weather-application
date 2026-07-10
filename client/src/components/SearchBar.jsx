function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="search-bar">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Enter city name"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
