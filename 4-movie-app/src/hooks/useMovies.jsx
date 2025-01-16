import { useEffect, useState } from "react";
const api_key = "3bd6e1ef69e94753d5f438c7a13a2dc4";

export default function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total_results, setTotalResults] = useState(0);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function PreviousPage() {
    setCurrentPage(-currentPage - 1);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      const signal = controller.signal;
      async function getMovies(page) {
        try {
          setLoading(true);
          setError("");
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`,
            { signal: signal }
          );
          if (!res.ok) {
            throw new Error("Bir hata olustu");
          }
          const data = await res.json();
          if (data.total_results === 0) {
            throw new Error("Aradiginiz film bulunamadi");
          }
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log("AbortError");
          } else {
            setError(err.message);
          }
        }
        setLoading(false);
      }
      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }
      getMovies(currentPage);

      return () => {
        controller.abort();
      };
    },
    [query, currentPage]
  );
  return {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    nextPage,
    PreviousPage,
    total_results,
  };
}
