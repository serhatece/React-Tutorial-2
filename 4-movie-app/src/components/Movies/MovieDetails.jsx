import { useState } from "react";
import StartRating from "../../StartRating";
import useMovieDetails from "../../hooks/useMovieDetails";
import Loading from "../Loading";

export default function MovieDetails({
  selectedMovie,
  onUnSelectMovie,
  onAddToList,
  selectedMovies,
}) {
  const [userRating, setUserRating] = useState("");
  const { movie, loading } = useMovieDetails(selectedMovie);
  const isAddedToList = selectedMovies.map((m) => m.id).includes(selectedMovie);
  const selectedMovieUserRating = selectedMovies.find(
    (m) => m.id === selectedMovie
  )?.userRating;

  function handleAddToList(movie) {
    const newMovie = { ...movie, userRating };
    onAddToList(newMovie);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="border p-2 mb-3">
          <div className="row">
            <div className="col-4">
              <img
                src={
                  movie.poster_path
                    ? `https://media.themoviedb.org/t/p/w440_and_h660_face` +
                      movie.poster_path
                    : "/img/no-image.jpg"
                }
                className="img-fluid rounded"
                alt={movie.title}
              />
            </div>
            <div className="col-8">
              <h6>{movie.title}</h6>
              <p>
                <i className="bi  bi-calendar-date me-1"></i>
                <span>{movie.release_date}</span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning"></i>
                <span>{movie.vote_average}</span>
              </p>
            </div>
            <div className="col-12 border-top p-3 mt-3">
              <p>{movie.overview}</p>
              <p>
                {movie.genres?.map((genre) => (
                  <span key={genre.id} className="badge text-bg-primary me-1">
                    {genre.name}
                  </span>
                ))}
              </p>

              {!isAddedToList ? (
                <>
                  <div className="my-4">
                    <StartRating
                      maxRating={10}
                      size={20}
                      onRating={setUserRating}
                    />
                  </div>
                  <button
                    onClick={() => handleAddToList(movie)}
                    className="btn btn-primary me-1"
                  >
                    Listeye Ekle
                  </button>
                </>
              ) : (
                <p>
                  Bu film listeye eklendi! Değerlendirme Oran:
                  <i className="bi bi-stars text-warning me-1"></i>
                  {selectedMovieUserRating}{" "}
                </p>
              )}

              <button className="btn btn-danger" onClick={onUnSelectMovie}>
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
