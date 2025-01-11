import { useState } from "react";

const movie_list = [
  {
    Id: "769",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Id: "770",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
];

const selected_movie_list = [
  {
    Id: "769",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Duration: 120,
    Rating: 5.5,
  },
  {
    Id: "770",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Duration: 125,
    Rating: 8.8,
  },
];

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

export default function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

function Nav() {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align- items-center">
          <Logo />
          <Search />
          <NavSearchResults />
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i> Movie App
    </div>
  );
}

function Search() {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film Ara" />
    </div>
  );
}

function NavSearchResults() {
  return (
    <div className="col-4 text-end">
      <strong>5</strong> kayit bulundu.
    </div>
  );
}

function Main() {
  return (
    <main className="container">
      <div className="row mt-2">
        <div className="col-md-9">
          <MovieListContainer />
        </div>
        <div className="col-md-3">
          <MyMovieListContainer />
        </div>
      </div>
    </main>
  );
}

function MovieListContainer() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && <MovieList />}
    </div>
  );
}

function MovieList() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <div className="row row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.Id} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  return (
    <div className="col mb-2">
      <div className="card">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <h6 className="card-title">{movie.Title}</h6>
          <i className="bi  bi-calendar-date me-1"></i>
          <span>{movie.Year}</span>
        </div>
      </div>
    </div>
  );
}

function MyMovieListContainer() {
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
  const [isOpen2, setIsOpen2] = useState(true);
  const AvgRating = getAverage(selectedMovies.map((m) => m.Rating));
  const AvgDuration = getAverage(selectedMovies.map((m) => m.Duration));
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen2((val) => !val)}
      >
        {isOpen2 ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>

      {isOpen2 && (
        <>
          <MyListSummary
            selectedMovies={selectedMovies}
            AvgRating={AvgRating}
            AvgDuration={AvgDuration}
          />
          <MyMovieList selectedMovies={selectedMovies} />
        </>
      )}
    </div>
  );
}

function MyListSummary({ selectedMovies, AvgRating, AvgDuration }) {
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
            <i className="bi bi-hourglass-split text-warning me-1">
              {AvgDuration} dk
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

function MyMovieList({ selectedMovies }) {
  return selectedMovies.map((movie) => (
    <MyListMovie movie={movie} key={movie.Id} />
  ));
}

function MyListMovie({ movie }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
          <img
            src={movie.Poster}
            className="img-fluid rounded-start"
            alt={movie.Title}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.Title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.Rating}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.Duration} dk</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
