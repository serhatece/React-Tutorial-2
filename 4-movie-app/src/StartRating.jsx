const containerStyle = {
  display: "flex",
  gap: ".1rem",
};

const itemContainerStyle = {
  display: "flex",
  gap: ".2rem",
};
const textStyle = {
  margin: "0",
};

export default function StartRating() {
  return (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
        <i className="bi bi-star"></i>
      </div>
      <p style={textStyle}>4</p>
    </div>
  );
}
