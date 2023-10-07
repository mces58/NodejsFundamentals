export const selectors = {
  formSearch: document.querySelector("#form-search"),
  txtKeyword: document.querySelector("#txt-keyword"),
  result: document.querySelector("#result .row"),
  movieDetails: document.querySelector("#movie-details"),
  movieDetailsContainer: document.querySelector("#movie-details-container"),
  btnMovieDetailsClose: document.querySelector("#movie-details-close"),
};

export const imageSize = {
  backdrop_sizes: ["w300", "w780", "w1280", "original"],
  logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  profile_sizes: ["w45", "w185", "h632", "original"],
  still_sizes: ["w92", "w185", "w300", "original"],
};
