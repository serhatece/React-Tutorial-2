import { getAverage } from "../../Helpers";
export default function MyListSummary({
  selectedMovies,
  AvgRating,
  AvgDuration,
}) {
  const avgUserRating = getAverage(selectedMovies.map((m) => m.userRating));
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>Listeye [{selectedMovies.length}] film eklendi.</h5>
        <div className="d-flex justify-content-between">
          <p>
            <i className="bi bi-star-fill text-warning me-1">
              {AvgRating.toFixed(2)}
            </i>
          </p>
          <p>
            <i className="bi bi-stars text-warning me-1">
              {avgUserRating.toFixed(2)}
            </i>
          </p>
          <p>
            <i className="bi bi-hourglass-split text-warning me-1">
              {AvgDuration} dk
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}
