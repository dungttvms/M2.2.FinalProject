import React, { useState, useEffect } from "react";
import TrailerModal from "./TrailerModal";
import { Button, Grid } from "@mui/material";
import "../App.css";
const API_KEY = `2f631e2b93563b0294e21fad8c8ade20`;
const GET_URL = `https://api.themoviedb.org/3`;

export default function MainMovies() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleOpenModal = async (movieId) => {
    let url = `${GET_URL}/movie/${movieId}/videos?api_key=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json();
    if (data.results.length > 0) {
      setShowModal(true);
      setTrailerKey(data.results[0].key);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const loadAllMovies = async () => {
      let url = `${GET_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setMovies(data.results);
    };
    loadAllMovies();
  }, [page]);

  const handleLoadMoreMovies = async () => {
    setPage((page) => page + 1);
  };

  const loadTopRateMovies = async () => {
    let url = `${GET_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    let res = await fetch(url);
    let data = await res.json();
    setMovies(data.results);
  };

  const loadNowPlayingMovies = async () => {
    let url = `${GET_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    let res = await fetch(url);
    let data = await res.json();
    setMovies(data.results);
  };

  const loadNewestMovies = async () => {
    let url = `${GET_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    let res = await fetch(url);
    let data = await res.json();
    setMovies(data.results);
  };
  let URL_DEMO = "";
  const handleSearchMovies = async () => {
    if (query === "") {
      URL_DEMO = `${GET_URL}/discover/movie?api_key=${API_KEY}&page=1`;
    } else
      URL_DEMO = `${GET_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`;
    let res = await fetch(URL_DEMO);
    let data = await res.json();
    setMovies(data.results);
  };
  const handleSearchMoviesChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRateMovies = async (selectedItem) => {
    console.log(selectedItem);
    let url = `${GET_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    let res = await fetch(url);
    let data = await res.json();
    if (selectedItem === "lowToHigh") {
      data.results.sort((a, b) => a.vote_average - b.vote_average);
      console.log("Low To High", data);
    } else {
      data.results.sort((a, b) => b.vote_average - a.vote_average);
      console.log("High to Low", data);
    }
    setMovies(data.results);
  };

  return (
    <div className="total_container">
      <Grid className="header_container">
        <img className="Logo_Header" src="logo.png" alt="Logo The Movie DB" />
        <div className="btn_btn">
          <Button onClick={loadNewestMovies}>
            <h2 className="text_btn">Newest</h2>
          </Button>
        </div>
        <div className="btn_btn">
          <Button onClick={loadTopRateMovies}>
            <h2 className="text_btn">Ratting</h2>
          </Button>{" "}
        </div>
        <div className="btn_btn">
          <Button onClick={loadNowPlayingMovies}>
            <h2 className="text_btn">Now Playing</h2>
          </Button>
        </div>

        <select
          className="custom-select"
          onChange={(e) => handleRateMovies(e.target.value)}
        >
          <option value="highToLow">Highest to Lowest</option>
          <option value="lowToHigh">Lowest to Highest</option>
        </select>
        <hr className="cut-line" />
        <div className="Search_container">
          <input
            className="Input_Header"
            type="search"
            placeholder="Search Your Movie"
            value={query}
            onChange={handleSearchMoviesChange}
          />
          <button onClick={handleSearchMovies} className="Search_Header">
            SEARCH
          </button>
        </div>
      </Grid>
      <br />
      <br />
      <Grid className="card_container">
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={movie.id}
              className="movie-card"
            >
              <h2 className="movie-title">{movie.title}</h2>
              <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="p-text">
                <p className="movie-rating">
                  Vote Average: {movie.vote_average}
                </p>
                <p className="movie-release-date">
                  Release Date: {movie.release_date}
                </p>
              </div>

              <button
                className="button-detail"
                onClick={() => handleOpenModal(movie.id)}
              >
                View Trailer
              </button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <TrailerModal
        showModal={showModal}
        setShowModal={setShowModal}
        trailerKey={trailerKey}
        handleCloseModal={() => handleCloseModal()}
      />
      <button
        className="loadmore-btn"
        type="button"
        onClick={handleLoadMoreMovies}
      >
        <p className="loadmore-text">LOAD MORE MOVIES</p>
      </button>
    </div>
  );
}
