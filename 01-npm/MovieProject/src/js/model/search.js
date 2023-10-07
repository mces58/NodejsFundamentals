// api: 4ea3fb589c58732852b907c5919755c4
// url: https://api.themoviedb.org/3
// header: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWEzZmI1ODljNTg3MzI4NTJiOTA3YzU5MTk3NTVjNCIsInN1YiI6IjY0YTFjYjM3NGE1MmY4MDEwNzE2MGYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAGz-0cABNtfNO4nr6r8hUJbuFQYc7JbRXm-c_Soeq4/3/

// https://api.themoviedb.org/3/search/movie?query=abc&include_adult=false&language=en-US&page=1

import * as config from "../cofig";

export default class Search {
  constructor(searchValue) {
    this.searchValue = searchValue;
  }

  async getResult() {
    const url = `${config.baseUrl}/search/movie?query=${this.searchValue}&include_adult=false&page=1&api_key=${config.apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}
