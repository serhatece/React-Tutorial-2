export default function Search({ query, setQuery }) {
  return (
    <div className="col-4">
      <input
        type="text"
        className="form-control"
        placeholder="Film Ara"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
