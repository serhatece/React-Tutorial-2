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
  {
    Id: "771",
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
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);

  return (
    <>
      <Nav>
        <Logo />
        <Search />
        <NavSearchResults movies={movies} />
      </Nav>
      <Main>
        <div className="row mt-2">
          <div className="col-md-9">
            <ListContainer>
              <MovieList movies={movies} />
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>
              <>
                <MyListSummary
                  selectedMovies={selectedMovies}
                  AvgRating={getAverage(
                    selectedMovies.map((movie) => movie.Rating)
                  )}
                  AvgDuration={getAverage(
                    selectedMovies.map((movie) => movie.Duration)
                  )}
                />
                <MyMovieList selectedMovies={selectedMovies} />
              </>
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}

function Nav({ children }) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align- items-center">{children}</div>
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

function NavSearchResults({ movies }) {
  return (
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> kayit bulundu.
    </div>
  );
}

function Main({ children }) {
  return <main className="container">{children}</main>;
}

function ListContainer({ children }) {
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
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies }) {
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
