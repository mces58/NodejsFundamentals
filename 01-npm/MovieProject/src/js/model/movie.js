import * as config from "../cofig";

export class Movie {
  constructor(id) {
    this.id = id;
  }

  async getMovie() {
    const url = `${config.baseUrl}/movie/${this.id}?api_key=${config.apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}
