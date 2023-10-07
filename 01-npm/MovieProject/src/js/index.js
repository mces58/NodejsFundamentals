import { Movie } from "./model/movie";
import Search from "./model/search";
import { selectors } from "./selectors";
import { clearInput, displayResults, clearResults } from "./view/searchView";
import { displayMovie, backToTop, closeMovieDetails } from "./view/movieView";

const state = {};

// search controller

const searchController = () => {
  const txtKeyword = selectors.txtKeyword.value;

  if (txtKeyword) {
    state.search = new Search(txtKeyword);
    state.search.getResult().then((data) => {
      clearInput();
      clearResults();
      displayResults(data.results);
    });
  } else {
    alert("Please enter a keyword");
  }
};

selectors.formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  searchController();
});

// movie controller

const movieController = () => {
  const id = window.location.hash.replace("#", "");
  if (id) {
    state.movie = new Movie(id);
    state.movie.getMovie().then((data) => {
      displayMovie(data);
      backToTop();
    });
  }
  window.location.hash = "";
};

window.addEventListener("hashchange", movieController);

selectors.btnMovieDetailsClose.addEventListener("click", closeMovieDetails);
